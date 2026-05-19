# Start Here — SAA-C03 Study Path

One page. Tells you where to begin, what to read in what order, and when to stop reading and start drilling.

## The 4 Layers You Must Master (in order)

1. **Concepts** — the 6 things the cloud does (guard, connect, run, store, remember, decouple).
2. **Concept -> Service mapping** — given a requirement, which service family answers it.
3. **Discriminators** — the one detail that flips between look-alike services.
4. **Reference architectures** — how services compose into real apps.

Skip a layer and you will either freeze on novel scenarios (skipped 1-2) or pick the plausible-but-wrong answer (skipped 3-4).

## Where Each Layer Lives In This Repo

| Layer | File | How long |
| --- | --- | --- |
| 1 + 2 | [field-guide/cloud-concept-map.md](field-guide/cloud-concept-map.md) - sections "Six Concepts" + "Service Cards By Concept" | 60-90 min first read |
| 3 | [field-guide/cloud-concept-map.md](field-guide/cloud-concept-map.md) - "Discriminators For Look-Alike Pairs" + "Numbers Worth Memorizing" | 45 min, then daily 10 min |
| 4 | [field-guide/cloud-concept-map.md](field-guide/cloud-concept-map.md) - "Reference Architectures" | 30 min, then sketch from memory |
| Domain deep-dives | [field-guide/domain-1-security.md](field-guide/domain-1-security.md) ... [domain-4-cost.md](field-guide/domain-4-cost.md) | Only when a domain is weak |
| Final 48h cram | [field-guide/final-cram-sheet.md](field-guide/final-cram-sheet.md) | 2 reads in last two days |
| Mistakes journal | [mistakes.md](mistakes.md) | After every practice set |
| Practice log | [practice-log.md](practice-log.md) | After every practice set |
| Flashcards | [flashcards.md](flashcards.md) | 10 min/day Anki-style |
| Quizzes | [quizzes/](quizzes/) | See plan below |

## A Concrete Study Plan (~3 weeks, ~1.5h/day)

### Week 1 - Build the scaffolding
- **Day 1-2**: Read [cloud-concept-map.md](field-guide/cloud-concept-map.md) end-to-end. Do not memorize; just see the shape.
- **Day 3**: Re-read the 6 concept table + service cards. Cover the right column and try to recall the 3 facts per service.
- **Day 4-5**: Read [domain-1-security.md](field-guide/domain-1-security.md) and [domain-2-resilience.md](field-guide/domain-2-resilience.md). Add anything surprising to [flashcards.md](flashcards.md).
- **Day 6**: Read [domain-3-performance.md](field-guide/domain-3-performance.md) and [domain-4-cost.md](field-guide/domain-4-cost.md).
- **Day 7**: First 20-question practice quiz from [quizzes/](quizzes/). Log score, log every miss in [mistakes.md](mistakes.md).

### Week 2 - Drill discriminators + composition
- **Daily warm-up (10 min)**: Discriminators table + Numbers table.
- **Daily core (60 min)**: 40-question practice set. After: review every wrong answer, write the one-line discriminator into [mistakes.md](mistakes.md).
- **Daily close (15 min)**: Pick one reference architecture and sketch it from memory on paper. Compare.
- **End of week**: 65-question full-length practice exam. Target 70%+.

### Week 3 - Pattern reps + cram
- Two full-length exams (Tutorials Dojo style, 65q, timed). Target 75%+ before booking.
- Re-read your own [mistakes.md](mistakes.md) daily - this is now more valuable than the field guide.
- **Last 48h**: only [final-cram-sheet.md](field-guide/final-cram-sheet.md) + [mistakes.md](mistakes.md). No new material.

## The 30-Second Loop For Every Practice Question

1. Read once, circle the **strictest requirement** (security, HA, latency, cost, ops, hybrid).
2. Name the **concept** (one of 6).
3. Eliminate answers that solve the wrong concept.
4. Use **discriminators** to pick between the two survivors.
5. If still stuck: pick the **smaller, more managed** option.

## How To Know You Are Ready

- Scoring **75%+** on two consecutive full-length practice exams (not the same one twice).
- Can recite the 6 concepts and 3+ services in each, cold.
- Can sketch all 8 reference architectures from memory.
- [mistakes.md](mistakes.md) entries are no longer repeating - new misses are genuinely new.

If those four are true, book the exam.

## What To Skip

- Memorizing every service feature page on docs.aws.amazon.com. The exam tests selection, not configuration syntax.
- AWS whitepapers cover-to-cover (read only Well-Architected + Reliability summaries if any).
- Anything not in [resources/official-links.md](resources/official-links.md) in-scope services list.

## If You Only Have One Week

Day 1: [cloud-concept-map.md](field-guide/cloud-concept-map.md) twice. Day 2-5: one 40q set + review daily. Day 6: full exam. Day 7: [final-cram-sheet.md](field-guide/final-cram-sheet.md) + mistakes. Pass rate drops but it is doable if you already work in AWS.
