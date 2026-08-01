import topicPages from "../../topic-pages.json";
import practiceQuestions from "../../practice-questions.json";
import classifications from "../../taxonomy-classifications.json";
import topicContent from "../../topic-content.json";

export type TopicPage = (typeof topicPages)[number];
export type PracticeQuestion = (typeof practiceQuestions.questions)[number];
export type Classification = (typeof classifications)[number];

export const topics = topicPages as TopicPage[];
export const questions = practiceQuestions.questions as PracticeQuestion[];
export const taxonomyClassifications = classifications as Classification[];

export const topicById = new Map(topics.map((topic) => [topic.cluster_id, topic]));
export const questionById = new Map(questions.map((question) => [question.id, question]));
export const classificationByQuestionId = new Map(
  taxonomyClassifications.map((classification) => [classification.question_id, classification]),
);

/**
 * Hand-written page copy, keyed by cluster. This is the replacement for the
 * generated `topic-pages.json` prose; clusters migrate one at a time, and any
 * cluster without an entry still renders from the old generated fields.
 */
export interface TopicContent {
  one_liner: string;
  core_concept: string[];
  hard_facts: { name: string; facts: string[] }[];
  architecture_rules: string[];
  when_to_choose: { scenario: string; choice: string; why: string }[];
}

const contentByCluster = topicContent as Record<string, TopicContent>;

export function contentFor(clusterId: string): TopicContent | undefined {
  return contentByCluster[clusterId];
}

/** Headline sentence for a cluster: hand-written copy when we have it. */
export function summaryFor(topic: TopicPage) {
  return contentFor(topic.cluster_id)?.one_liner ?? topic.what_this_tests[0];
}

const inlineEscapes: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
};

/**
 * The copy uses `**bold**` and `` `code` `` and nothing else, so a full
 * markdown dependency would be overkill. Escape first, then mark up.
 */
export function inlineMarkdown(text: string) {
  return text
    .replace(/[&<>"]/g, (character) => inlineEscapes[character])
    .replace(/`([^`]+)`/g, '<code class="mono">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
}

export const conceptStyles: Record<string, { label: string; color: string }> = {
  c1: { label: "Guard", color: "var(--teal)" },
  c2: { label: "Connect", color: "var(--blue)" },
  c3: { label: "Run", color: "var(--rose)" },
  c4: { label: "Store", color: "var(--green)" },
  c5: { label: "Query", color: "var(--violet)" },
  c6: { label: "Operate", color: "var(--amber)" },
};

export function accentFor(conceptId: string) {
  return (conceptStyles[conceptId] ?? conceptStyles.c1).color;
}

export const totalQuestions = questions.length;
export const totalTopics = topics.length;

export function getTopicForQuestion(questionId: string) {
  const classification = classificationByQuestionId.get(questionId);
  if (!classification) return undefined;
  return topicById.get(classification.cluster_id);
}

/** Practice questions linked to a cluster, in corpus order, skipping dead links. */
export function getQuestionsForTopic(topic: TopicPage) {
  return topic.practice_links
    .map((id) => questionById.get(id))
    .filter((question): question is PracticeQuestion => Boolean(question));
}

export function getClassificationForQuestion(questionId: string) {
  return classificationByQuestionId.get(questionId);
}

export function sourceLabel(source: string) {
  if (source.includes("Ditectrev")) return "Ditectrev";
  if (source.includes("Supplemental")) return "Supplemental";
  if (source.includes("Fundamentals")) return "Fundamentals";
  return source;
}

export function explanationFor(question: PracticeQuestion) {
  return question.explanation || question.source_explanation || null;
}

/**
 * Exam domain a cluster mostly serves. `exam_domains` lists all four for many
 * clusters in the source data, so only the first entry carries information.
 */
export function primaryDomain(topic: TopicPage) {
  return topic.exam_domains[0] ?? "Security";
}

export const domainWeights = [
  { domain: "Security", weight: 30 },
  { domain: "Resilience", weight: 26 },
  { domain: "Performance", weight: 24 },
  { domain: "Cost", weight: 20 },
];

export interface ClusterMeta {
  id: string;
  title: string;
  concept: string;
  conceptId: string;
  color: string;
  domain: string;
  count: number;
}

export function clusterMeta(): ClusterMeta[] {
  return topics.map((topic) => ({
    id: topic.cluster_id,
    title: topic.cluster_title,
    concept: (conceptStyles[topic.concept_id] ?? conceptStyles.c1).label,
    conceptId: topic.concept_id,
    color: accentFor(topic.concept_id),
    domain: primaryDomain(topic),
    count: topic.practice_links.length,
  }));
}
