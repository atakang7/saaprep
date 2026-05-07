# Readiness Audit

Audit date: 2026-05-07.

Official sources checked:

- Exam guide: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html
- Domain 1: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain1.html
- Domain 2: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain2.html
- Domain 3: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain3.html
- Domain 4: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain4.html
- In-scope services: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-03-in-scope-services.html
- Technologies and concepts: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-technologies-concepts.html

## Bottom Line

The workspace now covers the official SAA-C03 task outline and the full in-scope service list at a study-guide level.

This does not guarantee a pass. The SAA exam tests scenario judgment, not only recognition. To be exam-ready, use this documentation plus timed practice and mistake review.

## What Was Strong Before This Audit

- All 4 official domains were represented.
- All 14 official task topics had story-style explanations.
- Each task topic had 10 high-yield ideas, for 140 total high-yield explanations.
- The main repeated exam patterns were covered: IAM, VPC, S3, RDS/Aurora, DynamoDB, HA, DR, cost, queues, caching, and edge networking.
- The workspace had a study plan, flashcards, a mistake log, a practice log, and one starter quiz.

## What Was Missing Or Too Thin

1. Lower-frequency in-scope services were mostly listed, not explained.

   Examples: AppFlow, AppSync, Amazon MQ, Data Exchange, Device Farm, ML services, Elastic Transcoder, Kinesis Video Streams, License Manager, Managed Grafana, Managed Service for Prometheus, CloudHSM, Directory Service, Network Firewall, RAM, Application Migration Service, and hybrid container variants.

   Fix: Added [service-decision-matrix.md](service-decision-matrix.md), with depth level, exam job, and clue words for each in-scope service.

2. There was not enough explicit pass-readiness guidance.

   Reading notes alone is weaker than answering scenario questions, reviewing misses, and proving timing.

   Fix: Added this audit and the readiness checklist below.

3. Practice volume was too low.

   One 10-question quiz is useful for warmup, but it is not enough to build exam judgment. A realistic plan needs repeated mixed-domain scenario practice.

   Fix: Add more quizzes over time. Minimum target before exam: at least two full timed practice exams from a reputable provider, plus all misses logged in [../mistakes.md](../mistakes.md).

4. Hands-on work was optional but not connected to readiness.

   The exam can be passed without deep production experience, but the target candidate is expected to have about 1 year of hands-on design experience. Labs make service behavior less abstract.

   Fix: Use [../labs/lab-index.md](../labs/lab-index.md) for the highest-yield hands-on areas: IAM roles, VPC endpoints, S3 lifecycle, SQS decoupling, and DR patterns.

## Coverage Verdict By Domain

| Domain | Status | Remaining risk |
| --- | --- | --- |
| Security | Strong | KMS policy nuance, cross-account access, and S3 policy conditions need practice questions. |
| Resilience | Strong | DR strategy choice and service quota planning need scenario drills. |
| Performance | Strong | Database service selection and analytics pipeline choices need repeated practice. |
| Cost | Good | Network transfer cost and NAT/endpoint tradeoffs need drills. |
| Service recognition | Improved | Rare services should be recognized but not over-studied. |
| Exam technique | Needs ongoing practice | Multi-response questions and distractor elimination require timed reps. |

## Pass-Readiness Checklist

You are ready to schedule or sit the exam when:

- You can explain the difference between IAM role, resource policy, SCP, and permission boundary.
- You can design a public/private subnet architecture without confusing route tables, security groups, and NACLs.
- You can choose between NAT gateway, gateway endpoint, interface endpoint, PrivateLink, VPN, Direct Connect, VPC peering, and Transit Gateway.
- You can choose between S3, EBS, EFS, FSx, Storage Gateway, DataSync, Transfer Family, and Snow Family.
- You can choose between RDS, Aurora, DynamoDB, ElastiCache, Redshift, Athena, OpenSearch, DocumentDB, Neptune, and Keyspaces.
- You can map RTO/RPO to backup and restore, pilot light, warm standby, and active-active.
- You can choose between SQS, SNS, EventBridge, Step Functions, Kinesis Data Streams, Data Firehose, and MSK.
- You can choose between ALB, NLB, Gateway Load Balancer, CloudFront, Global Accelerator, and Route 53 policies.
- You can choose compute purchasing models: On-Demand, Reserved Instances, Savings Plans, Spot, Lambda, Fargate, and scheduled scaling.
- You can answer why the wrong options are wrong, not just why the right answer is right.
- You score around 80% or better on multiple reputable timed practice exams.
- Every repeated miss has a rule written in [../mistakes.md](../mistakes.md).

## Suggested Final Study Order

1. Read [official-topic-checklist.md](official-topic-checklist.md) to know the map.
2. Study the four domain guides.
3. Read [service-decision-matrix.md](service-decision-matrix.md) as a recognition pass.
4. Do scenario questions.
5. Log misses.
6. Convert repeated misses into flashcards.
7. Do timed practice.
8. Re-read only weak topics.

## Biggest Exam Traps To Drill

- Multi-AZ vs multi-Region.
- RDS Multi-AZ vs read replicas.
- Security group vs NACL.
- IAM role vs IAM user access key.
- Resource policy vs identity policy.
- SCP denies vs IAM allows.
- Gateway endpoint vs interface endpoint.
- NAT gateway vs VPC endpoint.
- CloudFront vs Global Accelerator.
- SQS vs SNS vs EventBridge.
- Kinesis Data Streams vs Data Firehose.
- Athena vs Redshift.
- RDS/Aurora vs DynamoDB.
- EBS vs EFS vs S3.
- DataSync vs Storage Gateway vs Snow Family.
- Backup vs replication.
- Savings Plans/Reserved Instances vs Spot.
- Least operational overhead vs lowest cost.

## What To Add Next

- More mixed scenario quizzes.
- A one-page cram sheet.
- Architecture flashcards for service-choice traps.
- Optional diagrams for VPC, HA web app, async processing, and data lake patterns.
