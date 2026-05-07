# SAA-C03 Service Decision Matrix

Last checked against the AWS in-scope service list: 2026-05-07.

Official source: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-03-in-scope-services.html

This file closes the main coverage gap in the field guide: lower-frequency services that are in scope but not worth a full story chapter. For each service, learn the exam job it performs and the clue words that point to it.

## How To Read This Matrix

- Core: know the service well enough to explain common architecture choices.
- Support: know the main use case and how it differs from neighboring services.
- Recognize: know what it is so a distractor does not scare you.

The exam is still architecture-first. Do not memorize the matrix as trivia. Use it to answer: "Which service best satisfies this requirement?"

## Analytics

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| Amazon Athena | Core | Serverless SQL queries over data in S3. | Query S3, ad hoc analytics, no servers, SQL over logs |
| AWS Data Exchange | Recognize | Find and subscribe to third-party data products. | External datasets, data subscriptions, third-party data |
| Amazon Data Firehose | Core | Managed streaming delivery to S3, Redshift, OpenSearch, and destinations. | Streaming delivery, minimal code, buffer, transform, deliver |
| Amazon EMR | Support | Managed big data frameworks such as Spark and Hadoop-style workloads. | Spark, Hadoop, big data cluster, distributed data processing |
| AWS Glue | Core | ETL, crawlers, and Data Catalog for analytics pipelines. | Transform data, catalog, CSV to Parquet, data lake metadata |
| Amazon Kinesis | Core | Real-time streaming data ingestion and processing. | Clickstream, real-time stream, shards, custom consumers |
| AWS Lake Formation | Support | Govern and secure data lakes. | Data lake permissions, centralized governance, fine-grained access |
| Amazon MSK | Support | Managed Apache Kafka. | Kafka compatibility, existing Kafka apps, Kafka migration |
| Amazon OpenSearch Service | Support | Search, log analytics, and observability-style indexing. | Search, logs, full-text, dashboards, indexing |
| Amazon QuickSuite | Recognize | Business intelligence and visualization in AWS exam wording. | Dashboards, visualization, business intelligence |
| Amazon Redshift | Core | Data warehouse for large-scale analytics. | Warehouse, OLAP, columnar analytics, complex reports |

## Application Integration

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| Amazon AppFlow | Recognize | Managed data flow between SaaS apps and AWS services. | Salesforce, SaaS integration, managed data flow |
| AWS AppSync | Support | Managed GraphQL API service, often for mobile/web apps. | GraphQL, real-time app sync, offline-capable app data |
| Amazon EventBridge | Core | Event bus and rules for event-driven architectures. | Event routing, SaaS events, loosely coupled apps, event bus |
| Amazon MQ | Support | Managed ActiveMQ/RabbitMQ for existing message broker apps. | Existing broker, ActiveMQ, RabbitMQ, JMS, protocol compatibility |
| Amazon SNS | Core | Pub/sub messaging and fanout. | Notifications, fanout, one message many subscribers |
| Amazon SQS | Core | Queue-based decoupling and buffering. | Queue, buffer spikes, workers, dead-letter queue |
| AWS Step Functions | Core | Orchestrate multi-step workflows. | Workflow, state machine, retries, branching, human-ish process |

## AWS Cost Management

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| AWS Budgets | Core | Alert when cost or usage crosses thresholds. | Budget alert, forecast alert, notify before overspend |
| AWS Cost and Usage Report | Support | Detailed billing data for analysis. | Detailed cost data, line-item billing, Athena billing analysis |
| AWS Cost Explorer | Core | Analyze historical and forecast spend. | Analyze cost trends, forecast, service spend |
| Savings Plans | Core | Discount model for committed compute spend. | Steady compute, commitment, reduce EC2/Lambda/Fargate cost |

## Compute

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| AWS Batch | Support | Managed batch job scheduling and compute environments. | Batch jobs, queues of jobs, fault-tolerant processing |
| Amazon EC2 | Core | Virtual machines with full control. | OS control, custom agents, instance families, lift-and-shift |
| Amazon EC2 Auto Scaling | Core | Adjust and replace EC2 fleet capacity. | Scale out/in, health replacement, launch template |
| AWS Elastic Beanstalk | Support | Deploy web apps with managed platform orchestration. | Simple app deployment, less infrastructure management |
| AWS Outposts | Recognize | AWS infrastructure on premises for hybrid/locality needs. | On-premises AWS, local data processing, hybrid location |
| AWS Serverless Application Repository | Recognize | Find and deploy serverless apps/components. | Reusable serverless app, prebuilt Lambda application |
| VMware Cloud on AWS | Recognize | Run VMware workloads on AWS infrastructure. | VMware migration, vSphere, minimal refactoring |
| AWS Wavelength | Recognize | Run workloads at telecom edge for ultra-low latency. | 5G, mobile edge, ultra-low latency to devices |

## Containers

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| Amazon ECR | Support | Container image registry. | Store container images, private registry |
| Amazon ECS | Core | AWS-native container orchestration. | Containers, tasks, services, simpler than Kubernetes |
| Amazon ECS Anywhere | Recognize | Run ECS-managed containers outside AWS. | ECS on premises, hybrid container management |
| Amazon EKS | Core | Managed Kubernetes. | Kubernetes, portability, existing K8s workloads |
| Amazon EKS Anywhere | Recognize | Run EKS-style Kubernetes outside AWS. | Kubernetes on premises, hybrid Kubernetes |
| Amazon EKS Distro | Recognize | Kubernetes distribution used by EKS. | EKS-compatible Kubernetes distribution |

## Database

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| Amazon Aurora | Core | High-performance AWS relational database. | MySQL/PostgreSQL compatible, high availability, Aurora replicas |
| Amazon Aurora Serverless | Core | Variable-capacity Aurora for intermittent or unpredictable relational workloads. | Variable relational demand, serverless database capacity |
| Amazon DocumentDB | Support | Managed document database compatible with MongoDB-style workloads. | Document database, JSON documents, MongoDB compatibility |
| Amazon DynamoDB | Core | Serverless NoSQL key-value/document database at massive scale. | Single-digit millisecond, key-value, on-demand, global tables |
| Amazon ElastiCache | Core | In-memory Redis/Memcached caching. | Cache hot reads, session store, microsecond latency |
| Amazon Keyspaces | Recognize | Managed Cassandra-compatible database. | Cassandra compatibility, wide-column workloads |
| Amazon Neptune | Support | Managed graph database. | Graph relationships, fraud rings, recommendations, social graph |
| Amazon RDS | Core | Managed relational databases. | MySQL, PostgreSQL, Oracle, SQL Server, Multi-AZ, read replica |
| Amazon Redshift | Core | Data warehouse for analytics, not OLTP. | Warehouse, columnar analytics, business reporting |

## Developer Tools

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| AWS X-Ray | Support | Distributed tracing for applications. | Trace requests, service map, latency root cause |

## Front-End Web And Mobile

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| AWS Amplify | Recognize | Build and host web/mobile front ends with AWS integrations. | Front-end hosting, mobile/web app backend |
| Amazon API Gateway | Core | Managed API front door for HTTP, REST, and WebSocket APIs. | API throttling, Lambda API, REST API, WebSocket |
| AWS Device Farm | Recognize | Test apps on real mobile devices/browsers. | Mobile app testing, device testing |

## Machine Learning

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| Amazon Comprehend | Recognize | Natural language processing. | Sentiment, entities, key phrases |
| Amazon Kendra | Recognize | Enterprise search powered by ML. | Search corporate documents, intelligent search |
| Amazon Lex | Recognize | Chatbot and conversational interfaces. | Chatbot, voice/text conversation |
| Amazon Polly | Recognize | Text to speech. | Convert text to speech, spoken audio |
| Amazon Rekognition | Recognize | Image and video analysis. | Detect faces, labels, image moderation |
| Amazon SageMaker AI | Recognize | Build, train, and deploy ML models. | Machine learning model training/deployment |
| Amazon Textract | Recognize | Extract text and forms from documents. | OCR, forms, invoices, scanned documents |
| Amazon Transcribe | Recognize | Speech to text. | Audio transcription, speech recognition |
| Amazon Translate | Recognize | Language translation. | Translate text between languages |

## Management And Governance

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| AWS Auto Scaling | Support | Scale multiple resource types, not only EC2. | Scaling plan, multiple services scale together |
| AWS CLI | Recognize | Command-line access to AWS APIs. | Script AWS actions, command line |
| AWS CloudFormation | Core | Infrastructure as code for repeatable deployments. | Templates, stacks, repeatable infrastructure |
| AWS CloudTrail | Core | Records AWS API calls for audit. | Who did what, API history, audit trail |
| Amazon CloudWatch | Core | Metrics, logs, alarms, dashboards, and events. | Alarms, logs, metrics, operational visibility |
| AWS Compute Optimizer | Support | Recommends right-sizing for compute resources. | Rightsize, underutilized, instance recommendation |
| AWS Config | Core | Tracks resource configuration and compliance. | Configuration history, drift, compliance rules |
| AWS Control Tower | Support | Multi-account landing zone governance. | New accounts, landing zone, governed multi-account setup |
| AWS Health Dashboard | Recognize | AWS service health and account events. | Service event, account health |
| AWS License Manager | Recognize | Manage software licenses. | License tracking, BYOL |
| Amazon Managed Grafana | Recognize | Managed visualization dashboards. | Grafana dashboards, metrics visualization |
| Amazon Managed Service for Prometheus | Recognize | Managed Prometheus-compatible monitoring. | Prometheus metrics, container monitoring |
| AWS Management Console | Recognize | Web UI for AWS management. | Console access |
| AWS Organizations | Core | Multi-account management and consolidated billing. | Multiple accounts, SCPs, consolidated billing |
| AWS Service Catalog | Support | Curated self-service approved products. | Standard approved stacks, self-service provisioning |
| AWS Systems Manager | Core | Operate and manage instances and resources. | Patch, Session Manager, Parameter Store, Run Command |
| AWS Trusted Advisor | Support | Best-practice checks for cost, security, performance, and quotas. | Recommendations, cost checks, service limits |
| AWS Well-Architected Tool | Core | Review architectures against Well-Architected pillars. | Architecture review, best practices, improvement plan |

## Media Services

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| Amazon Elastic Transcoder | Recognize | Convert media files between formats. | Transcode video/audio files |
| Amazon Kinesis Video Streams | Recognize | Stream video data to AWS. | Video stream ingestion, camera streams |

## Migration And Transfer

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| AWS Application Migration Service | Support | Lift-and-shift server migration to AWS. | Rehost servers, minimal downtime migration |
| AWS DataSync | Core | Online data transfer between storage systems. | NFS/SMB/object transfer, recurring sync |
| AWS DMS | Core | Database migration and replication. | Database migration, minimal downtime, CDC |
| AWS Snow Family | Support | Physical devices for large/offline data transfer and edge compute. | Petabytes, limited bandwidth, disconnected transfer |
| AWS Transfer Family | Support | Managed SFTP/FTPS/FTP to S3 or EFS. | SFTP users, file transfer protocol, managed FTP |

## Networking And Content Delivery

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| AWS Client VPN | Support | Managed client-based VPN into AWS. | Remote users access VPC, client VPN |
| Amazon CloudFront | Core | CDN and edge front door. | Cache globally, static content, edge, origin offload |
| AWS Direct Connect | Core | Dedicated private connectivity to AWS. | Dedicated line, consistent bandwidth, private connection |
| Elastic Load Balancing | Core | Distribute traffic across healthy targets. | ALB, NLB, GWLB, health checks |
| AWS Global Accelerator | Support | Anycast static IPs and optimized global routing. | Static global IPs, TCP/UDP acceleration, no caching |
| AWS PrivateLink | Core | Private service access through interface endpoints. | Private access to service, no peering, interface endpoint |
| Amazon Route 53 | Core | DNS, routing policies, and health checks. | DNS failover, latency routing, weighted routing |
| AWS Site-to-Site VPN | Core | Encrypted connection from on-premises network to VPC. | IPsec VPN, quick hybrid connection |
| AWS Transit Gateway | Core | Hub routing for many VPCs and networks. | Many VPCs, hub-and-spoke, shared routing |
| Amazon VPC | Core | Isolated network foundation in AWS. | Subnets, CIDR, routes, security groups, NACLs |

## Security, Identity, And Compliance

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| AWS Artifact | Support | Access AWS compliance reports and agreements. | Compliance reports, audit documents |
| AWS Audit Manager | Support | Collect evidence for audits. | Audit evidence, compliance assessment |
| AWS Certificate Manager | Core | Provision and manage TLS certificates. | HTTPS certificate, ALB/CloudFront TLS |
| AWS CloudHSM | Support | Dedicated hardware security modules. | Single-tenant HSM, strict key control |
| Amazon Cognito | Core | Customer identity for web/mobile apps. | User pools, app sign-in, app users |
| Amazon Detective | Recognize | Investigate security findings. | Security investigation, finding analysis |
| AWS Directory Service | Support | Managed Microsoft AD and directory integration. | Active Directory, domain join, directory federation |
| AWS Firewall Manager | Support | Central firewall policy management across accounts. | Manage WAF/firewall rules across accounts |
| Amazon GuardDuty | Core | Threat detection from AWS activity and network signals. | Threat detection, suspicious activity |
| AWS IAM Identity Center | Core | Central workforce access across AWS accounts/apps. | Single sign-on, workforce, multi-account access |
| Amazon Inspector | Support | Vulnerability management for workloads. | Vulnerability scan, package CVEs |
| AWS KMS | Core | Create and control encryption keys. | Customer managed key, key policy, encrypt at rest |
| Amazon Macie | Support | Discover sensitive data in S3. | PII in S3, data classification |
| AWS Network Firewall | Support | Managed network firewall for VPC traffic. | Stateful network firewall, egress inspection |
| AWS RAM | Support | Share resources across AWS accounts. | Share subnet, share resource, cross-account sharing |
| AWS Secrets Manager | Core | Store and rotate secrets. | Database credential rotation, secret value |
| AWS Security Hub | Support | Centralize security findings and posture. | Security dashboard, aggregate findings |
| AWS Shield | Core | DDoS protection. | DDoS, Shield Advanced |
| AWS WAF | Core | Layer 7 web request filtering. | SQL injection, XSS, rate-based web rule |
| IAM | Core | Identity and access management. | Users, groups, roles, policies, least privilege |

## Serverless

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| AWS AppSync | Support | Managed GraphQL APIs for serverless/web/mobile apps. | GraphQL API, app data sync |
| AWS Fargate | Core | Serverless compute for containers. | Containers without EC2, less operations |
| AWS Lambda | Core | Event-driven functions. | Function, event trigger, no server management |

## Storage

| Service | Depth | Exam job | Clue words |
| --- | --- | --- | --- |
| AWS Backup | Core | Centralized backup policies across supported services. | Backup policy, cross-account backup, retention |
| Amazon EBS | Core | Block storage for EC2. | Boot volume, low-latency block, snapshots |
| Amazon EFS | Core | Shared Linux file system. | Many Linux instances, POSIX, shared file |
| Amazon FSx | Core | Managed specialized file systems. | Windows file share, Lustre HPC, ONTAP, OpenZFS |
| Amazon S3 | Core | Durable object storage. | Objects, static assets, logs, data lake |
| Amazon S3 Glacier | Core | Low-cost archive storage classes. | Archive, long retention, retrieval time |
| AWS Storage Gateway | Support | Hybrid on-premises access to AWS-backed storage. | File gateway, volume gateway, tape gateway |

## Distractor Handling

When a service appears that you barely know, ask:

- Does the requirement explicitly name its pattern, such as Kafka, GraphQL, VMware, SFTP, or Cassandra?
- Is it a managed replacement for something the company already uses?
- Is the question asking for architecture design, or just trying to tempt me with a fancy service?

If the service is only a distractor, the requirement will usually be better satisfied by a core service such as IAM, VPC, S3, RDS, DynamoDB, CloudFront, SQS, SNS, Lambda, Auto Scaling, ELB, KMS, or Route 53.
