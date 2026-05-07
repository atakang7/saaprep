# SAA-C03 Study Plan

Default pace: 6 weeks. If your exam is sooner, compress by doing the review and practice blocks every day.

## Week 1: Security Core

Goal: get comfortable with identity, network security, encryption, and data protection.

- IAM users, groups, roles, policies, permission boundaries, SCPs
- AWS Organizations, IAM Identity Center, cross-account access
- VPC security groups, network ACLs, public/private subnets
- KMS, encryption at rest, encryption in transit, ACM
- Secrets Manager vs Systems Manager Parameter Store
- S3 security: bucket policies, access points, Block Public Access, versioning

Deliverables:

- Finish [notes/domain-1-security.md](notes/domain-1-security.md)
- Take [quizzes/quiz-001-security-and-resilience.md](quizzes/quiz-001-security-and-resilience.md)
- Log weak topics in [mistakes.md](mistakes.md)

## Week 2: Resilience And Architecture Patterns

Goal: recognize high availability, fault tolerance, and loose coupling patterns.

- Multi-AZ vs multi-Region designs
- ELB, Auto Scaling, Route 53 routing and failover
- SQS, SNS, EventBridge, Step Functions
- RDS Multi-AZ, read replicas, Aurora, DynamoDB global tables
- Disaster recovery: backup and restore, pilot light, warm standby, active-active
- Stateless app tiers and stateful data tiers

Deliverables:

- Finish [notes/domain-2-resilience.md](notes/domain-2-resilience.md)
- Write 5 DR scenario decisions in [mistakes.md](mistakes.md)

## Week 3: Storage, Databases, And Compute Performance

Goal: choose services based on access pattern, scaling need, latency, and throughput.

- S3 storage classes and lifecycle policies
- EBS vs EFS vs FSx vs S3
- EC2 instance families, Auto Scaling metrics, Lambda sizing
- RDS vs Aurora vs DynamoDB vs ElastiCache vs Redshift
- Read-heavy vs write-heavy patterns
- Caching: CloudFront, ElastiCache, DAX

Deliverables:

- Finish storage, compute, and database parts of [notes/domain-3-performance.md](notes/domain-3-performance.md)
- Add 20 service-choice flashcards to [flashcards.md](flashcards.md)

## Week 4: Networking, Edge, And Data Movement

Goal: make confident choices for connectivity, routing, hybrid access, and data transfer.

- VPC routing, peering, Transit Gateway, PrivateLink
- NAT gateway vs VPC endpoints
- VPN vs Direct Connect
- CloudFront vs Global Accelerator
- DataSync, Storage Gateway, Transfer Family, Snow Family
- Kinesis, Firehose, Glue, Athena, Lake Formation

Deliverables:

- Finish network and data parts of [notes/domain-3-performance.md](notes/domain-3-performance.md)
- Do one architecture drill from [labs/lab-index.md](labs/lab-index.md)

## Week 5: Cost Optimization

Goal: answer "least expensive while meeting requirements" questions without overbuilding.

- Compute pricing: On-Demand, Reserved Instances, Savings Plans, Spot
- Right sizing, Auto Scaling, serverless, containers
- S3 lifecycle, Intelligent-Tiering, Glacier classes
- NAT gateway cost, data transfer cost, VPC endpoints
- RDS/Aurora/DynamoDB cost levers
- Cost Explorer, Budgets, Cost and Usage Report, tags

Deliverables:

- Finish [notes/domain-4-cost.md](notes/domain-4-cost.md)
- Take one timed practice set and log results in [practice-log.md](practice-log.md)

## Week 6: Exam Readiness

Goal: practice under exam conditions and review only high-yield weak spots.

- Take at least two timed full-length practice exams
- Review every miss and every lucky guess
- Re-read the official exam guide scope
- Build a one-page "final review" from your mistakes
- Practice multi-response questions carefully

Final readiness target:

- Consistently score around 80% or better on reputable practice exams
- Can explain why wrong answers are wrong
- No repeated misses in IAM, VPC, S3, RDS, DynamoDB, HA, DR, or cost questions
