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

export function getAllServices() {
  const topics = getAllTopics();
  const services: any[] = [];
  
  topics.forEach((topic: any) => {
    if (topic.core_services) {
      topic.core_services.forEach((svc: any) => {
        const serviceId = svc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        services.push({
          ...svc,
          id: serviceId,
          cluster_id: topic.cluster_id,
          cluster_title: topic.cluster_title,
          concept_id: topic.concept_id,
          concept_name: topic.concept_name,
          exam_domains: topic.exam_domains
        });
      });
    }
  });
  
  return services;
}

export function getSearchIndex() {
  const topics = getAllTopics();
  const services = getAllServices();
  const questions = getPracticeQuestions();
  
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
  services.forEach((s: any) => {
    index.push({
      id: `svc-${s.id}`,
      type: 'Service',
      title: s.name,
      description: s.job,
      url: `/services/${s.id}`,
      tags: s.cluster_title,
      content: `${s.job} ${s.choose_when} ${s.avoid_when} ${s.trap_words}`
    });
  });
  
  return index;
}
