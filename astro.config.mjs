import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';

function normalizeSiteUrl(value) {
  const raw = value || 'https://atakang7.github.io';
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return withProtocol.replace(/\/+$/, '');
}

function normalizeBasePath(value) {
  const raw = String(value || '/saaprep').trim();
  if (!raw || raw === '/') return '';
  return `/${raw.replace(/^\/+|\/+$/g, '')}`;
}

function stripBasePath(pathname, basePath) {
  if (!basePath) return pathname;
  if (pathname === basePath) return '/';
  if (pathname.startsWith(`${basePath}/`)) return pathname.slice(basePath.length) || '/';
  return pathname;
}

function normalizeServiceId(name) {
  let clean = String(name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (clean.startsWith('aws-')) clean = clean.substring(4);
  if (clean.startsWith('amazon-')) clean = clean.substring(7);
  return clean;
}

const SERVICE_ALIASES = {
  'vpcs': 'Amazon VPC',
  'subnets': 'VPC subnets',
  'parameter store': 'AWS Systems Manager Parameter Store',
  'shield': 'AWS Shield Advanced',
  'nacls': 'Network ACLs (NACLs)',
  'route tables': 'Route Table',
  'internet gateways': 'Internet Gateway (IGW)',
  'nat gateways': 'NAT Gateway',
  'vpc endpoints (gateway, interface)': 'Gateway VPC Endpoint',
  'privatelink': 'Interface VPC Endpoint (AWS PrivateLink)',
  'alb': 'Application Load Balancer (ALB)',
  'nlb': 'Network Load Balancer (NLB)',
  'glb': 'Gateway Load Balancer',
  'fsx': 'Amazon FSx for Windows File Server',
  'lifecycle rules': 'S3 Lifecycle configuration',
  'object lock': 'S3 Object Lock',
  'snow family': 'AWS Snowball Edge',
  'elasticache': 'Amazon ElastiCache for Valkey / Redis OSS',
  'dax': 'DAX (DynamoDB Accelerator)',
  'opensearch': 'Amazon OpenSearch Service',
  'kinesis': 'Amazon Kinesis Data Streams',
  'sqs': 'Amazon SQS (Simple Queue Service)',
  'sns': 'Amazon SNS (Simple Notification Service)',
  'route 53 routing': 'Amazon Route 53'
};

function getCanonicalServiceId(name) {
  const normalized = normalizeServiceId(name);
  const preferredAlias = Object.entries(SERVICE_ALIASES).find(
    ([, canonicalName]) => normalizeServiceId(canonicalName) === normalized
  );

  return preferredAlias ? normalizeServiceId(preferredAlias[0]) : normalized;
}

function readJson(relativePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(new URL(relativePath, import.meta.url), 'utf-8'));
  } catch {
    return fallback;
  }
}

function getCanonicalServicePaths() {
  const paths = new Set();
  const topics = readJson('./topic-pages.json', []);
  const taxonomy = readJson('./taxonomy-tree.json', null);

  topics.forEach((topic) => {
    (topic.core_services || []).forEach((service) => {
      paths.add(`/services/${getCanonicalServiceId(service.name)}`);
    });
  });

  (taxonomy?.level_2_and_3?.concepts || []).forEach((concept) => {
    (concept.clusters || []).forEach((cluster) => {
      (cluster.services || []).forEach((serviceName) => {
        paths.add(`/services/${getCanonicalServiceId(serviceName)}`);
      });
    });
  });

  return paths;
}

const siteUrl = normalizeSiteUrl(
  process.env.PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL
);
const basePath = normalizeBasePath(process.env.PUBLIC_BASE_PATH || process.env.BASE_PATH || '/saaprep');

const canonicalServicePaths = getCanonicalServicePaths();

export default defineConfig({
  site: siteUrl,
  base: basePath || undefined,
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = stripBasePath(new URL(page).pathname.replace(/\/$/, '') || '/', basePath);
        if (pathname.startsWith('/api/')) return false;
        if (pathname.startsWith('/services/')) return canonicalServicePaths.has(pathname);
        return true;
      },
      serialize: (item) => {
        const pathname = new URL(item.url).pathname;
        const isIndexableHub = ['/', '/practice', '/concepts', '/services'].includes(pathname.replace(/\/$/, '') || '/');

        return {
          ...item,
          changefreq: isIndexableHub ? 'weekly' : 'monthly',
          priority: isIndexableHub ? 0.9 : 0.7,
          lastmod: new Date().toISOString()
        };
      }
    })
  ],
  server: {
    port: 4321,
    strictPort: true,
    host: true
  }
});
