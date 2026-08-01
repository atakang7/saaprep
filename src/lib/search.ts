/**
 * Client-side search. Small enough to stay instant over ~1,070 rows, but aware
 * enough of AWS vocabulary that "load balancer", "elb" and "alb" all land in
 * the same place.
 */

export interface Row {
  k: "t" | "q";
  id: string;
  t: string;
  s?: string;
  c?: string;
  cid?: string;
}

/** Query words that should also match the canonical service vocabulary. */
const ALIASES: Record<string, string[]> = {
  s3: ["s3", "simple storage", "bucket", "object storage"],
  bucket: ["s3", "bucket"],
  ebs: ["ebs", "elastic block", "volume"],
  efs: ["efs", "elastic file", "nfs", "shared file"],
  elb: ["elb", "load balancer", "alb", "nlb", "application load balancer"],
  alb: ["alb", "application load balancer", "elb", "load balancer"],
  nlb: ["nlb", "network load balancer", "elb", "load balancer"],
  lb: ["load balancer", "elb", "alb", "nlb"],
  loadbalancer: ["load balancer", "elb", "alb", "nlb"],
  asg: ["auto scaling", "asg", "scaling group"],
  autoscaling: ["auto scaling", "asg"],
  rds: ["rds", "relational database", "aurora", "multi-az"],
  ddb: ["dynamodb", "dynamo"],
  dynamo: ["dynamodb", "dynamo"],
  cf: ["cloudfront", "cloudformation"],
  cdn: ["cloudfront", "cdn", "edge", "cache"],
  iam: ["iam", "role", "policy", "permission", "identity"],
  perms: ["permission", "policy", "iam"],
  kms: ["kms", "encryption", "key", "cmk"],
  vpc: ["vpc", "subnet", "route table", "network"],
  sg: ["security group", "sg", "firewall"],
  nacl: ["nacl", "network acl"],
  dns: ["route 53", "dns", "hosted zone"],
  r53: ["route 53", "dns"],
  sqs: ["sqs", "queue", "message"],
  sns: ["sns", "topic", "notification", "pub/sub"],
  lambda: ["lambda", "serverless", "function"],
  serverless: ["lambda", "fargate", "serverless"],
  ha: ["high availability", "multi-az", "failover", "resilience"],
  dr: ["disaster recovery", "backup", "rpo", "rto", "failover"],
  cheap: ["cost", "cheapest", "lowest cost", "spot", "savings"],
  cost: ["cost", "cheapest", "spot", "reserved", "savings"],
  fast: ["latency", "performance", "throughput", "cache"],
  encrypt: ["encryption", "kms", "ssl", "tls", "at rest"],
};

const STOP = new Set([
  "a", "an", "the", "of", "for", "to", "in", "on", "is", "are", "and", "or",
  "with", "how", "what", "which", "best", "should", "i", "my", "do", "does",
]);

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9\s.+#/-]/g, " ");
}

export function tokenize(query: string) {
  return normalize(query)
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 1 && !STOP.has(token));
}

/** Each token expands to itself plus any alias phrases it implies. */
function expand(tokens: string[]) {
  return tokens.map((token) => {
    const key = token.replace(/[^a-z0-9]/g, "");
    return { token, variants: [token, ...(ALIASES[key] ?? [])] };
  });
}

export interface Hit {
  row: Row;
  score: number;
}

export function search(rows: Row[], query: string, limit = 40): Hit[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const phrase = normalize(query).trim();
  const groups = expand(tokens);
  const hits: Hit[] = [];

  for (const row of rows) {
    const title = normalize(row.t);
    const service = normalize(row.s ?? "");
    const cluster = normalize(row.c ?? "");
    const body = normalize((row as { x?: string }).x ?? "");
    const haystack = `${title} ${service} ${cluster} ${body}`;

    let score = 0;
    let matched = 0;

    for (const { token, variants } of groups) {
      let best = 0;
      for (const variant of variants) {
        const exact = variant === token;
        if (title.includes(variant)) best = Math.max(best, exact ? 60 : 34);
        else if (service.includes(variant)) best = Math.max(best, exact ? 50 : 30);
        else if (cluster.includes(variant)) best = Math.max(best, exact ? 34 : 20);
        else if (body.includes(variant)) best = Math.max(best, exact ? 16 : 9);
      }
      if (best > 0) matched += 1;
      score += best;
    }

    // Every word has to land somewhere, otherwise results get mushy.
    if (matched < groups.length) continue;

    if (haystack.includes(phrase)) score += 45;
    if (title.startsWith(phrase)) score += 60;
    if (row.k === "t") score += 55; // teaching pages outrank single questions
    if (row.id.toLowerCase() === phrase) score += 500;

    hits.push({ row, score });
  }

  return hits
    .sort((a, b) => b.score - a.score || a.row.t.length - b.row.t.length)
    .slice(0, limit);
}

export function highlight(text: string, query: string) {
  const tokens = tokenize(query).filter((token) => token.length > 2);
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  if (tokens.length === 0) return escaped;
  const pattern = new RegExp(
    `(${tokens.map((token) => token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi",
  );
  return escaped.replace(pattern, "<mark>$1</mark>");
}
