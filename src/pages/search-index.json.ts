import type { APIRoute } from "astro";
import {
  classificationByQuestionId,
  conceptStyles,
  contentFor,
  questions,
  topics,
  topicById,
} from "../lib/data";

/**
 * One lazy-loaded index for the whole site. Question text is trimmed to a
 * snippet length that still matches well but keeps the payload small.
 */
export const GET: APIRoute = () => {
  const topicRows = topics.map((topic) => ({
    k: "t",
    id: topic.cluster_id,
    t: topic.cluster_title,
    s: (conceptStyles[topic.concept_id] ?? conceptStyles.c1).label,
    x: [
      contentFor(topic.cluster_id)?.core_concept.join(" ") ?? "",
      contentFor(topic.cluster_id)?.hard_facts.map((service) => service.name).join(" ") ?? "",
      topic.what_this_tests.join(" "),
      topic.core_services.map((service) => `${service.name} ${service.trap_words}`).join(" "),
      topic.signal_words.map((signal) => `${signal.phrase} ${signal.points_to}`).join(" "),
    ]
      .join(" ")
      .slice(0, 1400),
  }));

  const questionRows = questions.map((question) => {
    const classification = classificationByQuestionId.get(question.id);
    const topic = classification ? topicById.get(classification.cluster_id) : undefined;
    return {
      k: "q",
      id: question.id,
      t: question.question.slice(0, 260),
      s: classification?.primary_service_tested ?? "",
      c: topic?.cluster_title ?? "",
      cid: classification?.cluster_id ?? "",
    };
  });

  return new Response(JSON.stringify([...topicRows, ...questionRows]), {
    headers: { "Content-Type": "application/json" },
  });
};
