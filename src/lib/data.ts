import fs from 'node:fs';
import path from 'node:path';
import { serviceDescription, sitePath, topicDescription } from './seo';

export interface Question {
  id: number | string;
  title: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string[];
  references: string[];
}

export function getPracticeQuestions(): Question[] {
  const jsonPath = path.resolve(process.cwd(), 'questions.json');
  if (fs.existsSync(jsonPath)) {
    try {
      const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
      if (Array.isArray(rawData) && rawData.length > 0) {
        return rawData.map((q: any, index: number) => {
          const formattedOptions = (q.options || []).map((opt: string, optIdx: number) => {
            if (/^[A-E]\.\s/.test(opt)) return opt;
            return `${String.fromCharCode(65 + optIdx)}. ${opt}`;
          });

          const explanationArr = Array.isArray(q.explanation) 
            ? q.explanation 
            : (typeof q.explanation === 'string' ? [q.explanation] : [`Correct Answer: ${q.answer}`]);

          return {
            id: q.id || index + 1,
            title: `SAA-C03 Question #${index + 1}`,
            question: q.question || '',
            options: formattedOptions,
            answer: q.answer || '',
            explanation: explanationArr,
            references: q.references || ['AWS SAA-C03 Official Exam Guide']
          };
        });
      }
    } catch (e) {
      console.error('Error parsing questions.json:', e);
    }
  }

  // Fallback to markdown loading
  const filePath = path.resolve(process.cwd(), '01_AWS_Fundamentals.md');
  if (!fs.existsSync(filePath)) return [];
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  const questions: Question[] = [];
  const rawQuestions = fileContent.split(/### Question \d+/).slice(1);
  
  rawQuestions.forEach((qBlock, index) => {
    const lines = qBlock.trim().split('\n');
    const questionTextLines: string[] = [];
    const options: string[] = [];
    let answer = '';
    const explanationLines: string[] = [];
    const referencesLines: string[] = [];
    
    let state: 'question' | 'answer' | 'explanation' | 'references' = 'question';
    
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('**Answer:')) {
        answer = trimmed.replace(/\*\*Answer:\s*/, '').replace(/\*\*/, '').trim();
        state = 'explanation';
        return;
      }
      if (trimmed.startsWith('**References:**')) {
        const refsStr = trimmed.replace(/\*\*References:\*\*\s*/, '');
        referencesLines.push(...refsStr.split(',').map(r => r.trim()));
        state = 'references';
        return;
      }
      
      if (state === 'question') {
        if (/^[A-E]\.\s/.test(trimmed)) {
          options.push(trimmed);
        } else if (!trimmed.startsWith('<details>') && !trimmed.startsWith('<summary>') && !trimmed.startsWith('---')) {
          if (trimmed.length > 0) questionTextLines.push(trimmed);
        }
      } else if (state === 'explanation') {
        if (trimmed.startsWith('- ')) {
          explanationLines.push(trimmed.replace(/^- /, ''));
        }
      }
    });
    
    if (questionTextLines.length > 0) {
      questions.push({
        id: index + 1,
        title: `Question ${index + 1}`,
        question: questionTextLines.join(' '),
        options,
        answer,
        explanation: explanationLines,
        references: referencesLines
      });
    }
  });
  
  return questions;
}

export function getTaxonomyTree() {
  const filePath = path.resolve(process.cwd(), 'taxonomy-tree.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export function getAllTopics() {
  const filePath = path.resolve(process.cwd(), 'topic-pages.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

/**
 * taxonomy-tree.json uses short colloquial names; topic-pages.json uses the
 * full AWS service names. Map the short forms onto the real, fact-checked
 * entries so those pages show verified content instead of placeholder text.
 */
const SERVICE_ALIASES: Record<string, string> = {
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

export function resolveServiceAlias(name: string): string {
  return SERVICE_ALIASES[name.trim().toLowerCase()] || name;
}

export function normalizeServiceId(name: string): string {
  let clean = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (clean.startsWith('aws-')) clean = clean.substring(4);
  if (clean.startsWith('amazon-')) clean = clean.substring(7);
  return clean;
}

export function getCanonicalServiceId(name: string): string {
  const normalized = normalizeServiceId(name);
  const preferredAlias = Object.entries(SERVICE_ALIASES).find(
    ([, canonicalName]) => normalizeServiceId(canonicalName) === normalized
  );

  return preferredAlias ? normalizeServiceId(preferredAlias[0]) : normalized;
}

export function getTaxonomyEntryHref(name: string, clusterId: string): string {
  return `/services/${getCanonicalServiceId(name)}`;
}

export function getAllServices() {
  const topics = getAllTopics();
  const taxonomy = getTaxonomyTree();
  
  const servicesMap = new Map<string, any>();
  
  // 1. Ingest from topic-pages.json
  topics.forEach((topic: any) => {
    if (topic.core_services) {
      topic.core_services.forEach((svc: any) => {
        const primaryId = normalizeServiceId(svc.name);
        const originalId = svc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const canonicalId = getCanonicalServiceId(svc.name);
        
        const serviceObj = {
          ...svc,
          id: primaryId,
          originalId,
          canonicalId,
          cluster_id: topic.cluster_id,
          cluster_title: topic.cluster_title,
          concept_id: topic.concept_id,
          concept_name: topic.concept_name,
          exam_domains: topic.exam_domains
        };

        servicesMap.set(primaryId, serviceObj);
        servicesMap.set(originalId, serviceObj);
      });
    }
  });

  // 2. Point taxonomy-tree.json's short names at the real, fact-checked
  //    entries. We never invent service content: an entry that has no
  //    verified counterpart gets no service page at all.
  taxonomy.level_2_and_3.concepts.forEach((concept: any) => {
    concept.clusters.forEach((cluster: any) => {
      cluster.services.forEach((svcName: string) => {
        const normId = normalizeServiceId(svcName);
        const origId = svcName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        if (servicesMap.has(normId) || servicesMap.has(origId)) return;

        const canonical = servicesMap.get(normalizeServiceId(resolveServiceAlias(svcName)));
        if (canonical) {
          // Alias route: same verified content, reachable by the short name.
          const aliasObj = {
            ...canonical,
            id: normId,
            originalId: origId,
            canonicalId: normId,
            aliasOfId: canonical.id
          };
          servicesMap.set(normId, aliasObj);
          servicesMap.set(origId, aliasObj);
        }
      });
    });
  });

  const uniqueServices = Array.from(new Set(servicesMap.values()));
  const allRoutes: any[] = [];
  const registeredIds = new Set<string>();

  uniqueServices.forEach(s => {
    if (!registeredIds.has(s.id)) {
      registeredIds.add(s.id);
      allRoutes.push(s);
    }
    if (s.canonicalId && !registeredIds.has(s.canonicalId)) {
      registeredIds.add(s.canonicalId);
      allRoutes.push({ ...s, id: s.canonicalId });
    }
    if (s.originalId && !registeredIds.has(s.originalId)) {
      registeredIds.add(s.originalId);
      allRoutes.push({ ...s, id: s.originalId });
    }
  });

  return allRoutes;
}

export function getSearchIndex() {
  const topics = getAllTopics();
  const services = getAllServices();
  
  const index: any[] = [];
  
  // Index Topics
  topics.forEach((t: any) => {
    index.push({
      id: `topic-${t.cluster_id}`,
      type: 'Topic',
      title: t.cluster_title,
      description: topicDescription(t),
      url: sitePath(`/topics/${t.cluster_id}`),
      tags: t.exam_domains.join(', '),
      content: t.what_this_tests.join(' ')
    });
  });
  
  // Index Services
  const seenSvc = new Set<string>();
  services.forEach((s: any) => {
    if (!seenSvc.has(s.name)) {
      seenSvc.add(s.name);
      index.push({
        id: `svc-${s.id}`,
        type: 'Service',
        title: s.name,
        description: serviceDescription(s),
        url: sitePath(`/services/${s.canonicalId || getCanonicalServiceId(s.name)}`),
        tags: s.cluster_title,
        content: `${s.job} ${s.choose_when} ${s.avoid_when} ${s.trap_words}`
      });
    }
  });
  
  return index;
}

/**
 * Does a practice question actually cover this service?
 * Shared by the service deep-dive page and the practice arena so both agree
 * on what "related" means. Matches on the service name appearing in the
 * question stem, the options, or the explanation.
 */
export function questionMatchesService(q: any, serviceName: string): boolean {
  const needle = serviceName.toLowerCase();
  if (needle.length < 3) return false;

  const haystacks: string[] = [q.question || ''];
  if (Array.isArray(q.options)) haystacks.push(...q.options);
  if (Array.isArray(q.explanation)) haystacks.push(...q.explanation);
  else if (typeof q.explanation === 'string') haystacks.push(q.explanation);

  return haystacks.some(h => (h || '').toLowerCase().includes(needle));
}

/**
 * Map of question id -> service ids that question is relevant to.
 * Built once at build time so the practice page can filter client-side.
 */
export function getQuestionServiceMap(): Record<string, string[]> {
  const questions = getPracticeQuestions();
  const services = getAllServices();

  // getAllServices registers each service under several alias keys; dedupe by id.
  const uniqueServices = new Map<string, any>();
  services.forEach((s: any) => uniqueServices.set(s.id, s));

  const map: Record<string, string[]> = {};
  questions.forEach((q: any) => {
    const ids: string[] = [];
    uniqueServices.forEach((svc, id) => {
      if (questionMatchesService(q, svc.name)) ids.push(id);
    });
    if (ids.length) map[String(q.id)] = ids;
  });
  return map;
}
