# SAA-C03 Field Guide

This is the fun, story-style guide for the AWS Certified Solutions Architect - Associate exam.

Last checked against the AWS exam guide: 2026-05-07.

Official sources:

- Exam guide: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html
- Technologies and concepts: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-technologies-concepts.html
- In-scope services: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-03-in-scope-services.html

## How To Use This Guide

The official exam outline has 4 domains and 14 task topics. Each task topic in this guide has:

- A mini-story so the topic sticks
- A simple framework for exam decisions
- The 10 most important things to know
- Detailed explanations and exam signals

For a clean scope checklist before you study the stories, use [official-topic-checklist.md](official-topic-checklist.md).

For a concept-first shortcut, use [cloud-concept-map.md](cloud-concept-map.md). For service-choice questions, use [service-decision-matrix.md](service-decision-matrix.md). For a final pre-exam pass, use [final-cram-sheet.md](final-cram-sheet.md). For the honest status of the study pack, use [readiness-audit.md](readiness-audit.md).

## Official Topic Map

| Domain | Weight | Official task topics | Guide |
| --- | ---: | --- | --- |
| Design Secure Architectures | 30% | 1.1 Secure access, 1.2 Secure workloads, 1.3 Data security controls | [domain-1-security.md](domain-1-security.md) |
| Design Resilient Architectures | 26% | 2.1 Scalable and loosely coupled architectures, 2.2 Highly available and fault-tolerant architectures | [domain-2-resilience.md](domain-2-resilience.md) |
| Design High-Performing Architectures | 24% | 3.1 Storage, 3.2 Compute, 3.3 Databases, 3.4 Networks, 3.5 Data ingestion and transformation | [domain-3-performance.md](domain-3-performance.md) |
| Design Cost-Optimized Architectures | 20% | 4.1 Storage cost, 4.2 Compute cost, 4.3 Database cost, 4.4 Network cost | [domain-4-cost.md](domain-4-cost.md) |

## The Master Framework: SAA-CHECK

When a question feels noisy, run SAA-CHECK:

- S: Security boundary. Who can access what?
- A: Availability target. One AZ, multi-AZ, or multi-Region?
- A: Access pattern. Read-heavy, write-heavy, bursty, streaming, archive, shared file, block, object?
- C: Coupling. Can components fail or scale independently?
- H: High performance lever. Cache, scale out, choose better storage, tune database, move closer to users?
- E: Economics. What is the cheapest option that still meets the requirement?
- C: Constraints. Least operational overhead, migration limits, compliance, private connectivity, RTO/RPO?
- K: Kill distractors. Remove answers that solve the wrong requirement.

## The Exam Mood

The exam often gives you a small architecture drama:

- A workload is overloaded.
- A database is stressed.
- A company wants less downtime.
- Security needs a tighter front door.
- Costs are quietly climbing.

Your job is not to build the fanciest city. Your job is to choose the smallest, clearest architecture that satisfies the written requirement.

## In-Scope Service Map

AWS says the in-scope list is non-exhaustive and can change. Treat this as a study map, not a promise that every listed service gets equal exam weight.

- Analytics: Athena, Data Exchange, Data Firehose, EMR, Glue, Kinesis, Lake Formation, MSK, OpenSearch Service, QuickSuite, Redshift
- Application Integration: AppFlow, AppSync, EventBridge, Amazon MQ, SNS, SQS, Step Functions
- Cost Management: Budgets, Cost and Usage Report, Cost Explorer, Savings Plans
- Compute: Batch, EC2, EC2 Auto Scaling, Elastic Beanstalk, Outposts, Serverless Application Repository, VMware Cloud on AWS, Wavelength
- Containers: ECR, ECS, ECS Anywhere, EKS, EKS Anywhere, EKS Distro
- Database: Aurora, Aurora Serverless, DocumentDB, DynamoDB, ElastiCache, Keyspaces, Neptune, RDS, Redshift
- Developer Tools: X-Ray
- Front-End Web and Mobile: Amplify, API Gateway, Device Farm
- Machine Learning: Comprehend, Kendra, Lex, Polly, Rekognition, SageMaker AI, Textract, Transcribe, Translate
- Management and Governance: Auto Scaling, CLI, CloudFormation, CloudTrail, CloudWatch, Compute Optimizer, Config, Control Tower, Health Dashboard, License Manager, Managed Grafana, Managed Service for Prometheus, Management Console, Organizations, Service Catalog, Systems Manager, Trusted Advisor, Well-Architected Tool
- Media Services: Elastic Transcoder, Kinesis Video Streams
- Migration and Transfer: Application Migration Service, DataSync, DMS, Snow Family, Transfer Family
- Networking and Content Delivery: Client VPN, CloudFront, Direct Connect, ELB, Global Accelerator, PrivateLink, Route 53, Site-to-Site VPN, Transit Gateway, VPC
- Security, Identity, and Compliance: Artifact, Audit Manager, ACM, CloudHSM, Cognito, Detective, Directory Service, Firewall Manager, GuardDuty, IAM Identity Center, Inspector, KMS, Macie, Network Firewall, RAM, Secrets Manager, Security Hub, Shield, WAF, IAM
- Serverless: AppSync, Fargate, Lambda
- Storage: Backup, EBS, EFS, FSx, S3, S3 Glacier, Storage Gateway

## High-Yield Bias

If time is limited, over-study these first:

- IAM, Organizations, SCPs, KMS, S3 security
- VPC, subnets, route tables, security groups, NACLs, NAT, endpoints
- ALB/NLB, Auto Scaling, Route 53, CloudFront
- SQS, SNS, EventBridge, Step Functions
- RDS, Aurora, DynamoDB, ElastiCache
- S3, EBS, EFS, FSx, Backup, DataSync, Storage Gateway
- DR strategies, RTO/RPO, Multi-AZ vs multi-Region
- Compute pricing, storage lifecycle, NAT/data transfer cost
