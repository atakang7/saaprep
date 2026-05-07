# Final Cram Sheet

Use this in the last 48 hours before the exam. It is not a replacement for the guides; it is the "what do I reach for first?" page.

## First Question To Ask

What is the strongest requirement?

- Secure
- Resilient
- High-performing
- Cost-optimized
- Least operational overhead
- Migration-compatible
- Private connectivity
- Global low latency
- RTO/RPO

## Identity

- Human workforce across accounts: IAM Identity Center.
- App on AWS service: IAM role.
- Cross-account access: role trust policy plus permission to assume role.
- Organization guardrail: SCP.
- Resource makes access decision: resource policy.
- Secrets with rotation: Secrets Manager.
- Encrypt with customer key control: KMS customer managed key.

## Network

- Public subnet: route to internet gateway.
- Private subnet outbound internet: NAT gateway.
- Private access to S3/DynamoDB: gateway endpoint.
- Private access to many AWS services: interface endpoint.
- Private service exposure: PrivateLink.
- Many VPCs/hybrid networks: Transit Gateway.
- Dedicated private connection: Direct Connect.
- Encrypted internet tunnel: Site-to-Site VPN.
- Remote users into VPC: Client VPN.

## Web And Edge

- HTTP path/host routing: ALB.
- TCP/UDP/static IP/high throughput: NLB.
- Network appliances: Gateway Load Balancer.
- Cache content globally: CloudFront.
- Static anycast IPs and global network acceleration: Global Accelerator.
- DNS routing and health checks: Route 53.
- SQL injection/XSS/rate-based web rules: WAF.
- DDoS protection: Shield.

## Compute

- Maximum control: EC2.
- EC2 elasticity: Auto Scaling.
- Event function: Lambda.
- Containers without EC2 management: Fargate.
- AWS-native containers: ECS.
- Kubernetes: EKS.
- Batch jobs: Batch.
- Spark/Hadoop big data: EMR.
- Existing simple web app deployment: Elastic Beanstalk.

## Storage

- Object storage/data lake/static assets: S3.
- Archive: S3 Glacier classes.
- EC2 block volume: EBS.
- Shared Linux file system: EFS.
- Windows/HPC/special file systems: FSx.
- Hybrid file/volume/tape gateway: Storage Gateway.
- Online storage transfer: DataSync.
- Huge/offline transfer: Snow Family.
- Managed SFTP/FTPS/FTP: Transfer Family.
- Central backups: AWS Backup.

## Database

- Relational SQL: RDS or Aurora.
- Higher-performance AWS relational: Aurora.
- Variable relational demand: Aurora Serverless.
- Key-value/document at massive scale: DynamoDB.
- In-memory cache: ElastiCache.
- DynamoDB cache: DAX.
- Search/log analytics: OpenSearch.
- Data warehouse: Redshift.
- Query S3 with SQL: Athena.
- Document database: DocumentDB.
- Graph relationships: Neptune.
- Cassandra-compatible: Keyspaces.
- Too many DB connections: RDS Proxy.
- Database migration: DMS.

## Async And Events

- Queue and buffer workers: SQS.
- Fanout notification: SNS.
- Event bus and routing: EventBridge.
- Ordered workflow/state machine: Step Functions.
- Real-time stream with custom consumers: Kinesis Data Streams.
- Managed stream delivery: Data Firehose.
- Kafka-compatible: MSK.
- Existing broker protocols: Amazon MQ.

## Security And Governance

- API audit history: CloudTrail.
- Metrics/logs/alarms: CloudWatch.
- Config and compliance history: Config.
- Threat detection: GuardDuty.
- Vulnerability management: Inspector.
- Sensitive data in S3: Macie.
- Central findings: Security Hub.
- Compliance reports: Artifact.
- Audit evidence: Audit Manager.
- Multi-account setup: Organizations and Control Tower.
- Architecture review: Well-Architected Tool.

## Cost

- Steady compute: Savings Plans or Reserved Instances.
- Interruptible work: Spot.
- Unpredictable S3 access: Intelligent-Tiering.
- Rare archive: Glacier classes based on retrieval time.
- S3-heavy private subnet traffic: gateway endpoint to reduce NAT use.
- Cost analysis: Cost Explorer.
- Cost alerts: Budgets.
- Detailed billing: Cost and Usage Report.
- Right-sizing: Compute Optimizer.

## DR

- Lowest cost, slowest recovery: backup and restore.
- Core services ready: pilot light.
- Scaled-down full environment: warm standby.
- Full multi-Region production: active-active.
- RTO: how long recovery can take.
- RPO: how much data can be lost.

## Answer Strategy

- Eliminate answers that violate one hard requirement.
- Prefer managed services for "least operational overhead".
- Prefer Multi-AZ before multi-Region unless regional failure/global latency is required.
- Do not use root or long-term access keys for app access.
- Do not choose read replicas for failover if the problem is availability; do not choose Multi-AZ if the problem is read scale.
- Do not choose the fanciest service when S3, SQS, RDS, DynamoDB, CloudFront, IAM, or VPC endpoint directly solves it.
