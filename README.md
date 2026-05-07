# SaaPrep: AWS SAA-C03 Study Guide

An open-source study guide for the AWS Certified Solutions Architect - Associate exam, exam code SAA-C03.

Last checked against AWS sources: 2026-05-07.

This project is built for practical exam readiness: learn the official domains, understand the service tradeoffs, practice scenario questions, and turn mistakes into rules.

> Independent study material. Not affiliated with or endorsed by AWS. No exam dumps, real exam questions, or confidential exam content.

## Exam Snapshot

- Exam: AWS Certified Solutions Architect - Associate (SAA-C03)
- Format: 65 multiple choice or multiple response questions
- Time: 130 minutes
- Scoring: 50 scored questions and 15 unscored questions; passing scaled score is 720/1000
- Main skill: choose secure, resilient, high-performing, and cost-optimized AWS architectures
- Official sources:
  - https://aws.amazon.com/certification/certified-solutions-architect-associate/
  - https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html

## Domain Weights

| Domain | Weight | Notes |
| --- | ---: | --- |
| Design Secure Architectures | 30% | [notes/domain-1-security.md](notes/domain-1-security.md) |
| Design Resilient Architectures | 26% | [notes/domain-2-resilience.md](notes/domain-2-resilience.md) |
| Design High-Performing Architectures | 24% | [notes/domain-3-performance.md](notes/domain-3-performance.md) |
| Design Cost-Optimized Architectures | 20% | [notes/domain-4-cost.md](notes/domain-4-cost.md) |

## How We Study Here

1. Work one domain at a time, but always think in tradeoffs.
2. After each topic, answer scenario questions and log every miss in [mistakes.md](mistakes.md).
3. Turn misses into flashcards in [flashcards.md](flashcards.md).
4. Use [practice-log.md](practice-log.md) to track scores, weak domains, and next actions.
5. Review official scope before spending time on niche services.

## Repository Map

- [study-plan.md](study-plan.md): default 6-week plan
- [notes/index.md](notes/index.md): map of domains and repeated decision patterns
- [field-guide/README.md](field-guide/README.md): story-style guide with all 14 official task topics and 10 high-yield explanations per topic
- [field-guide/official-topic-checklist.md](field-guide/official-topic-checklist.md): scope checklist from the AWS exam guide
- [field-guide/service-decision-matrix.md](field-guide/service-decision-matrix.md): in-scope service recognition and exam clue words
- [field-guide/readiness-audit.md](field-guide/readiness-audit.md): honest gap analysis and pass-readiness checklist
- [field-guide/final-cram-sheet.md](field-guide/final-cram-sheet.md): last-48-hours decision sheet
- [quizzes/quiz-001-security-and-resilience.md](quizzes/quiz-001-security-and-resilience.md): first original mini-quiz
- [quizzes/quiz-002-mixed-scenarios.md](quizzes/quiz-002-mixed-scenarios.md): mixed service-choice scenario drill
- [labs/lab-index.md](labs/lab-index.md): optional hands-on labs
- [resources/official-links.md](resources/official-links.md): source links to keep us honest
- [CONTRIBUTING.md](CONTRIBUTING.md): contribution rules and style guide
- [DISCLAIMER.md](DISCLAIMER.md): trademark, affiliation, and exam-content disclaimer

## Deep Study Path

Use the field guide when you want the "teach me like a story" version:

- [field-guide/domain-1-security.md](field-guide/domain-1-security.md): badges, streets, vaults
- [field-guide/domain-2-resilience.md](field-guide/domain-2-resilience.md): systems that bend instead of snap
- [field-guide/domain-3-performance.md](field-guide/domain-3-performance.md): finding the actual bottleneck
- [field-guide/domain-4-cost.md](field-guide/domain-4-cost.md): meeting requirements without waste

## Default Daily Loop

- 25 minutes: learn one topic
- 20 minutes: answer 10-20 questions
- 10 minutes: review wrong answers
- 5 minutes: write one architecture rule in your own words

When in doubt, ask: "What requirement is the question optimizing for?" Security, resilience, performance, cost, operations, or migration constraints usually point at the answer.

## Passing Readiness

Studying these notes is necessary but not sufficient. To be ready for the real exam, combine the field guide with scenario practice:

- Use [field-guide/readiness-audit.md](field-guide/readiness-audit.md) as the pass-readiness checklist.
- Use [field-guide/service-decision-matrix.md](field-guide/service-decision-matrix.md) to recognize in-scope services and distractors.
- Use [field-guide/final-cram-sheet.md](field-guide/final-cram-sheet.md) in the final 48 hours.
- Score around 80% or better on multiple reputable timed practice exams.
- Log every repeated miss in [mistakes.md](mistakes.md), then turn it into a rule or flashcard.

## Contributing

Contributions are welcome when they improve clarity, accuracy, or practice value. Good contributions include original scenario questions, updated AWS service notes, clearer decision frameworks, and corrections backed by official AWS docs.

Do not submit exam dumps, copied paid practice questions, or confidential exam content. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT License. See [LICENSE](LICENSE).
