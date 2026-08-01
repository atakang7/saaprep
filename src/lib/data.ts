import fs from 'node:fs';
import path from 'node:path';

export interface Question {
  id: number;
  title: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string[];
  references: string[];
}

export function getPracticeQuestions(): Question[] {
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

export function normalizeServiceId(name: string): string {
  let clean = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  // Strip leading 'aws-' or 'amazon-' for uniform routing lookup
  if (clean.startsWith('aws-')) clean = clean.substring(4);
  if (clean.startsWith('amazon-')) clean = clean.substring(7);
  return clean;
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
        
        const serviceObj = {
          ...svc,
          id: primaryId,
          originalId,
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

  // 2. Guarantee every service in taxonomy-tree.json exists
  taxonomy.level_2_and_3.concepts.forEach((concept: any) => {
    concept.clusters.forEach((cluster: any) => {
      cluster.services.forEach((svcName: string) => {
        const normId = normalizeServiceId(svcName);
        const origId = svcName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        if (!servicesMap.has(normId) && !servicesMap.has(origId)) {
          const fallbackObj = {
            name: svcName,
            job: `${svcName} manages core AWS architectural capabilities for ${cluster.name}.`,
            choose_when: `Your architecture requires native ${svcName} functionality within ${cluster.name}.`,
            avoid_when: `Alternative AWS services handle out-of-scope requirements or different operational constraints.`,
            trap_words: `${svcName.toLowerCase()} configuration, permissions, multi-region setups`,
            id: normId,
            originalId: origId,
            cluster_id: cluster.id,
            cluster_title: cluster.name,
            concept_id: concept.id,
            concept_name: concept.name,
            exam_domains: ["Security", "Resilience"]
          };
          servicesMap.set(normId, fallbackObj);
          servicesMap.set(origId, fallbackObj);
        }
      });
    });
  });

  // Return unique service objects array
  const uniqueServices = Array.from(new Set(servicesMap.values()));
  
  // Also duplicate aliases into array so Astro getStaticPaths creates routes for both 'cloudtrail' AND 'aws-cloudtrail'
  const allRoutes: any[] = [];
  const registeredIds = new Set<string>();

  uniqueServices.forEach(s => {
    if (!registeredIds.has(s.id)) {
      registeredIds.add(s.id);
      allRoutes.push(s);
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
      description: `Cluster mapping to ${t.concept_name}`,
      url: `/topics/${t.cluster_id}`,
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
        description: s.job,
        url: `/services/${s.id}`,
        tags: s.cluster_title,
        content: `${s.job} ${s.choose_when} ${s.avoid_when} ${s.trap_words}`
      });
    }
  });
  
  return index;
}
