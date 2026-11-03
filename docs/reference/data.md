# Data files

All three JSON files are read from the repository root during the Astro build.

| File | Content | Read by |
| --- | --- | --- |
| [`questions.json`](../../questions.json) | Array of practice questions | `getPracticeQuestions()` |
| [`topic-pages.json`](../../topic-pages.json) | Topic summaries and `core_services` | `getAllTopics()` |
| [`taxonomy-tree.json`](../../taxonomy-tree.json) | Exam domains, concepts, clusters, service names | `getTaxonomyTree()` |

## Question fields

| Field | Type | Use |
| --- | --- | --- |
| `id` | string or number | Practice URL query and service filter lookup |
| `question` | string | Question text |
| `options` | string[] | Answer choices; displayed with A-E labels |
| `answer` | string | Correct option text or letter |
| `explanation` | string or string[] | Answer explanation, when present |
| `references` | string[] | References, when present |

The build rejects missing, invalid, or empty `questions.json`. Service names from the taxonomy are resolved against topic data through aliases in [`src/lib/data.ts`](../../src/lib/data.ts).
