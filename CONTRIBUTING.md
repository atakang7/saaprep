# Contributing

Thanks for helping make this SAA-C03 study guide sharper.

## Contribution Principles

- Keep it exam-focused. Prefer scenario judgment, service choice, and tradeoffs over trivia.
- Use official AWS documentation as the source of truth when scope or service behavior is uncertain.
- Do not add exam dumps, copied paid practice questions, or confidential exam content.
- Keep explanations clear, original, and beginner-friendly.
- Prefer concise examples and decision frameworks.

## Good Contributions

- Fixing outdated AWS service names or exam scope.
- Adding original scenario questions with explanations.
- Improving a confusing explanation.
- Adding missing service-choice distinctions.
- Adding simple diagrams in text or Markdown.
- Tightening wording without making it dry.

## Pull Request Checklist

- The change is original or clearly attributed to a public official source.
- Links to official AWS docs are included when changing exam scope or service behavior.
- New quiz questions include answer keys and explanations.
- Markdown headings and links render cleanly.
- No real exam questions or copyrighted practice questions are included.

## Style Guide

- Use ASCII unless a file already has a clear reason not to.
- Keep the tone direct, warm, and practical.
- Explain the "why", not just the service name.
- Prefer "choose X when..." phrasing for exam decisions.
- Use tables for comparisons and bullets for checklists.

## Local Review

Before opening a pull request, run a quick scan:

```sh
rg -n "[^\x00-\x7F]" .
rg -n "exam dump|actual exam|real exam question" .
```

The first command should usually return nothing. The second command helps keep the repo clean of prohibited material.
