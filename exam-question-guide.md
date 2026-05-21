# Question Construction Guide — How We Write SAA-C03 Questions

This is the quality standard. Every question we generate must follow this.

---

## THE ANATOMY OF AN AWS EXAM QUESTION

```
[Scenario: 2-4 sentences setting context]
[Hidden constraint: buried in the last sentence or the question itself]
[Question: "Which solution meets these requirements?"]

A. [Correct — satisfies ALL stated constraints]
B. [Trap — works in reality but violates the stated constraint]
C. [Wrong problem — solves something the question didn't ask]
D. [Noise — real service, wrong context entirely]
```

---

## RULES FOR THE SCENARIO

1. **Set a realistic context** — company, workload type, current architecture
2. **Include one factual detail that matters** — "runs in private subnets", "thousands of concurrent users", "traffic is unpredictable"
3. **The constraint goes in the last sentence or question line** — this is where the exam hides the decision point
4. **Never state the constraint in an obvious way** — embed it in business language: "the company wants to minimize ongoing maintenance" not "use serverless"
5. **Max 4 sentences** for scenario — exam questions are dense, not essays

---

## RULES FOR THE CONSTRAINT

The constraint is THE thing being tested. It must:

1. **Map to exactly one term from our decision-terms list**
2. **Disqualify at least one plausible option** — if the constraint doesn't kill anything, it's not doing its job
3. **Be stated once, not repeated** — exam doesn't highlight it for you
4. **Sometimes be stacked** — two constraints that intersect to narrow to one answer (e.g., "lowest cost" + "must not traverse public internet" = gateway endpoint)

---

## RULES FOR OPTION A (CORRECT)

1. Satisfies ALL constraints in the question — not just one
2. Uses the right service for the right reason
3. Is not over-engineered — smallest solution that meets requirements
4. Is specific enough — not vague ("use AWS managed service" is not an answer)

---

## RULES FOR OPTION B (THE TRAP)

This is the most important option. It's what separates 720 from 680.

1. **Would genuinely work in real life** — this is not a wrong answer, it's a wrong-for-the-constraint answer
2. **Violates exactly one stated constraint** — usually the operational overhead, the cost, the privacy, or the availability term
3. **Sounds professional and reasonable** — a senior engineer might pick this in production
4. **Is the "I know AWS but didn't read carefully" answer**

Examples of good traps:
- NAT gateway when "must not traverse internet" is stated (it works, uses internet)
- EC2 + Auto Scaling when "least operational overhead" is stated (it works, you manage it)
- Multi-AZ when "read scaling" is the problem (it works for HA, doesn't help reads)
- Secrets Manager when the question only needs config storage, not rotation (overkill)

---

## RULES FOR OPTION C (WRONG PROBLEM)

1. Solves a **different category** of problem than what was asked
2. Uses a real service that exists and has a real purpose
3. Could confuse someone who misread the question's domain
4. Should be eliminable by recognizing the category mismatch

Examples:
- VPC peering when the question is about private access to S3 (connectivity ≠ service access)
- Read replica when the question is about credential rotation (performance ≠ security)
- Glacier when the question is about real-time processing (archive ≠ streaming)

---

## RULES FOR OPTION D (NOISE)

1. A real AWS service used in a **completely wrong context**
2. Should be immediately eliminable by anyone who knows what the service does
3. Exists to reward basic service recognition
4. Never make it tempting — it's the freebie elimination

Examples:
- AWS Glue when the question is about network security
- Amazon Polly when the question is about database failover
- AWS Batch when the question is about DNS routing

---

## RULES FOR THE ANSWER EXPLANATION

Every answer explanation must follow this pattern:

```
Term identified: [exact constraint from question]
Rule applied: [what the term forces/kills from our decision-terms list]
Eliminated: [which options die and why — one line each]
Correct because: [why A survives — one sentence]
```

This trains the decision reflex, not just "A is right because A is right."

---

## DIFFICULTY CALIBRATION

The exam has roughly:

- **30% straightforward** — one clear constraint, three obviously wrong options
- **50% moderate** — one constraint, one genuine trap option
- **20% hard** — two stacked constraints, two plausible options

Our questions should mirror this distribution within each category:
- 2-3 straightforward per category (builds confidence, confirms mapping)
- 3-5 moderate per category (the real training)
- 1-2 hard per category (stacked constraints)

---

## LANGUAGE RULES

Match the exam's voice:

| Do | Don't |
| --- | --- |
| "A company runs..." | "You are building..." |
| "Which solution meets these requirements?" | "What should you do?" |
| "with the LEAST operational overhead" | "use the simplest thing" |
| "MOST cost-effective" | "cheapest" |
| "How should a solutions architect..." | "How would you..." |
| Use full service names first time | Abbreviate without context |
| "A solutions architect needs to..." | "Pick the best option..." |

---

## RULES FOR THE REASONING (CRITICAL)

Every question MUST include a `reasoning` field that:

1. **Starts with identifying the constraint** — "The question says X, which means..."
2. **Connects the constraint to the underlying architectural truth** — not just "A is right" but WHY the architecture demands it. This is the hidden layer. Example: "NAT gateway routes through public internet because it translates private IPs to a public elastic IP and sends traffic OUT through the internet gateway — that's why 'must not traverse public internet' kills it."
3. **Explains why the trap ALMOST works** — what makes it tempting and the ONE fact that breaks it
4. **Builds a mental model** — after reading this, the reader should understand the concept deeper, not just know the answer to this one question
5. **Is 3-5 sentences max** — dense, not a lecture

The reasoning is the TEACHING. The question tests. The reasoning teaches. Without it, drilling is just memorization. With it, each wrong answer becomes permanent understanding.

---

## WHAT WE DO NOT DO

1. **No trivia questions** — "What is the max message size of SQS?" is not an exam question. It's a detail embedded in a scenario that disqualifies an option.
2. **No "explain this" questions** — exam never asks you to explain. It asks you to choose.
3. **No trick wording in the question itself** — the trick is in the OPTIONS, not in confusing question phrasing
4. **No questions where two options are genuinely equally correct** — there must always be a single best answer based on the stated constraint
5. **No questions that require knowledge outside the in-scope service list**
6. **No questions that require hands-on console experience** — it's a design exam, not an operations exam

---

## MANDATORY COVERAGE GATE (before generating ANY layer)

You CANNOT start writing questions until you complete this checklist:

1. **List ALL decision vectors for this layer** — every possible angle the exam can exploit
2. **Cross-reference with trap facts** — does every trap fact from exam-question-flow.md Part 2 for this layer have at least one question?
3. **Cross-reference with decision terms** — does every relevant term from exam-decision-terms.md that touches this layer have at least one question?
4. **Cross-reference with taxonomy** — does every AWS phrasing variant from exam-question-taxonomy.md for this layer have at least one question?
5. **Count vectors vs questions** — minimum 1 question per vector, 2 for high-confusion vectors
6. **Write the vector list INTO the JSON file** as a top-level comment or separate manifest so coverage is auditable

If a vector exists and has no question → the layer is INCOMPLETE. Do not ship incomplete layers.

### Vector enumeration format (produce this BEFORE writing questions):

```
Layer X vectors:
- [ ] Vector 1: [description] → trap fact: [which one] → question ID: [assigned after writing]
- [ ] Vector 2: ...
- [ ] ...
```

Only after ALL vectors are listed AND all have assigned question IDs is the layer done.

---

## THE VALIDATION TEST

Before accepting a question, ask:

1. Can I point to the exact constraint term that decides it? → If no, rewrite
2. Does the trap option genuinely work except for the constraint? → If no, it's too easy
3. Would someone who knows AWS but reads carelessly pick the trap? → If no, the trap is weak
4. Is there exactly one correct answer given the constraint? → If no, the question is broken
5. Can it be answered in 90 seconds? → If no, too complex for the exam

---

## FILE STRUCTURE FOR GENERATED QUESTIONS

Questions are stored as **JSON** for programmatic drilling (can be loaded, randomized, scored, filtered by layer/difficulty).

```
drill/
├── layer-0-network.json
├── layer-1-access.json
├── layer-2-storage.json
├── layer-3-compute.json
├── layer-4-database.json
├── layer-5-communication.json
├── layer-6-resilience.json
├── layer-7-edge.json
├── layer-8-cost.json
├── layer-9-governance.json
└── drill.py          ← simple CLI runner
```

### JSON Schema per question:

```json
{
  "id": "L4-003",
  "layer": 4,
  "category": "database",
  "difficulty": "moderate",
  "trap_fact": "RDS Multi-AZ standby cannot serve read traffic",
  "constraint_terms": ["read-heavy", "high availability"],
  "scenario": "A company has a read-heavy web application backed by Amazon RDS MySQL...",
  "question": "Which solution meets these requirements?",
  "options": {
    "A": "Create a read replica for reporting queries and configure Multi-AZ for the primary",
    "B": "Configure Multi-AZ deployment to serve read traffic from the standby",
    "C": "Migrate to Amazon DynamoDB with on-demand capacity",
    "D": "Place Amazon CloudFront in front of the database"
  },
  "answer": "A",
  "reasoning": "The question asks for BOTH read scaling AND high availability. Multi-AZ provides HA through a synchronous standby, but that standby is a ghost — it exists only for failover and cannot serve any read traffic. This is the number one RDS trap. Read replicas handle the read load (asynchronous copies that accept queries), while Multi-AZ handles the AZ failure case. You need both because they solve different problems — one is performance, the other is availability.",
  "eliminated": {
    "B": "Multi-AZ standby cannot serve reads — trap fact",
    "C": "Wrong database engine for a relational workload with joins",
    "D": "CloudFront caches HTTP content, cannot sit in front of a database connection"
  }
}
```

### Properties explained:

- `id`: Layer number + sequence (L0-001, L4-003, etc.) — allows infinite expansion
- `layer`: 0-9, matches the flow architecture
- `difficulty`: "straightforward" / "moderate" / "hard"
- `trap_fact`: The specific fact from exam-question-flow.md Part 2 that this question exploits
- `constraint_terms`: The exam terms from exam-decision-terms.md that decide this question
- `reasoning`: THE TEACHING — connects constraint to architectural truth, explains why trap almost works
- `eliminated`: Per-option explanation of why each wrong answer dies

### Why JSON:

1. **Infinite generation** — can keep adding questions per layer without restructuring
2. **Programmatic drilling** — CLI tool shows question, waits for answer, shows reasoning
3. **Filtering** — drill only one layer, only hard questions, only questions you got wrong
4. **No spoilers** — reasoning is hidden until you answer
5. **Trackable** — can log which questions were missed for focused review

---

## GENERATION ORDER (from taxonomy)

1. Category 4: Database (17 questions) — highest confusion rate
2. Category 1: Access Path (16 questions) — network is hard contextually
3. Category 5: Resilience & DR (10 questions) — DR strategy selection trips people
4. Category 9: Async & Events (8 questions) — SQS/SNS/EB/Kinesis confusion
5. Category 8: Edge & Content (6 questions) — CloudFront vs GA confusion
6. Category 2: Compute (13 questions) — Lambda limits, pricing
7. Category 3: Storage (12 questions) — class selection, migration
8. Category 6: Security (12 questions) — credential, encryption, filtering
9. Category 7: Cost (7 questions) — constraint stacking
10. Category 10: Observability (6 questions) — three-way tool confusion

---
