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
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContent);
}
