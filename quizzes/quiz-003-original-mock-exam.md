# Quiz 003: Original SAA-C03 Mock Exam

These are original practice questions, not exam dumps. Answer first, then check the key.

Suggested timing: 60 minutes for 30 questions.

## Questions

1. A company wants employees to access multiple AWS accounts with centralized sign-in from its corporate identity provider. Which service should the company use?
   - A. IAM Identity Center
   - B. IAM access keys
   - C. Amazon Cognito identity pools
   - D. AWS Secrets Manager

2. An application in Account A needs to write objects into an S3 bucket in Account B. What must be configured?
   - A. An internet gateway in both accounts
   - B. A security group rule that allows S3 inbound traffic
   - C. A trust and permission path that allows the principal in Account A to access the bucket in Account B
   - D. A NAT gateway in Account B

3. A company wants to prevent all member accounts from creating public S3 buckets, even if an administrator in a member account has broad IAM permissions. Which control should be used?
   - A. Amazon CloudWatch alarm
   - B. AWS Organizations SCP
   - C. EC2 key pair
   - D. Route 53 health check

4. An application stores database credentials in a plain text configuration file on EC2 instances. The company wants automatic rotation with minimal operational overhead. What should replace this pattern?
   - A. AWS Artifact
   - B. AWS CloudTrail
   - C. Amazon EFS
   - D. AWS Secrets Manager

5. A public application must block common HTTP request attacks and rate-limit abusive clients. Which service should be used with CloudFront or an Application Load Balancer?
   - A. AWS Shield Standard only
   - B. AWS WAF
   - C. AWS DMS
   - D. AWS Transfer Family

6. A company must ensure that customer-managed encryption keys cannot be used by principals outside a strict policy. Which AWS feature is central to this control?
   - A. S3 lifecycle rule
   - B. VPC route table
   - C. KMS key policy
   - D. Auto Scaling lifecycle hook

7. A workload in private subnets must call AWS Systems Manager APIs without using the public internet. Which option fits best?
   - A. Interface VPC endpoint
   - B. Gateway VPC endpoint for DynamoDB
   - C. Internet gateway
   - D. Elastic IP address

8. A company needs to discover PII in many S3 buckets. Which service should it use?
   - A. Amazon Inspector
   - B. AWS X-Ray
   - C. Amazon Polly
   - D. Amazon Macie

9. A team needs immutable retention for financial records in S3 for 7 years. Which feature should be configured?
   - A. S3 Transfer Acceleration
   - B. S3 Object Lock
   - C. S3 event notifications only
   - D. S3 Select

10. A monolithic web tier writes jobs directly to a database during traffic bursts. The database becomes overloaded and requests time out. Which architecture change improves resilience?
    - A. Move the database into a public subnet
    - B. Replace security groups with NACLs
    - C. Place SQS between the web tier and workers that write to the database
    - D. Disable Auto Scaling to reduce writes

11. A company needs DNS failover between two Regional endpoints based on health checks. Which service should be used?
    - A. Amazon Route 53
    - B. AWS Direct Connect
    - C. Amazon ECR
    - D. AWS Glue

12. A relational database must remain available after the loss of one Availability Zone. Read scaling is not the primary requirement. Which option should be chosen?
    - A. RDS read replica only
    - B. Amazon Athena
    - C. S3 Standard-IA
    - D. RDS Multi-AZ

13. A company has an RTO measured in hours and an RPO measured in hours. It wants the lowest-cost DR approach. Which strategy is most appropriate?
    - A. Active-active multi-Region
    - B. Backup and restore
    - C. Warm standby
    - D. Multi-site active-active with full capacity

14. A workload receives unpredictable bursts of messages. Each message must be processed at least once by a fleet of workers. Which service should buffer the work?
    - A. Amazon CloudFront
    - B. AWS Certificate Manager
    - C. Amazon SQS
    - D. AWS RAM

15. An order workflow has multiple steps, retries, branching, and timeout handling. The company wants managed orchestration. Which service should be used?
    - A. AWS Step Functions
    - B. Amazon S3 Glacier Deep Archive
    - C. Amazon GuardDuty
    - D. AWS DataSync

16. An application runs in a single AZ on EC2 instances behind no load balancer. The company wants high availability for the web tier. Which design is best?
    - A. Larger EC2 instance in the same AZ
    - B. One NAT gateway in the same private subnet
    - C. One read replica in the same AZ
    - D. Auto Scaling group across multiple AZs behind an Application Load Balancer

17. A company has millions of users worldwide accessing static and dynamic web content. It wants lower latency and origin offload for cacheable content. Which service should be used?
    - A. AWS Direct Connect
    - B. Amazon CloudFront
    - C. AWS Batch
    - D. Amazon Redshift

18. A Lambda function opens many database connections during bursts and overwhelms an RDS database. Which service can pool and manage these connections?
    - A. AWS WAF
    - B. Amazon SNS
    - C. RDS Proxy
    - D. S3 Object Lambda

19. A company needs a shared POSIX file system mounted by many EC2 instances across multiple AZs. Which service fits?
    - A. Amazon EFS
    - B. Amazon EBS
    - C. Amazon S3 Glacier
    - D. AWS Snowcone

20. A data team needs serverless SQL queries over CSV and Parquet files in S3. Which service should it use?
    - A. Amazon RDS for PostgreSQL
    - B. Amazon MQ
    - C. AWS Batch
    - D. Amazon Athena

21. A read-heavy DynamoDB workload has repeated reads for the same keys and needs microsecond read latency. Which option should be considered?
    - A. RDS Multi-AZ
    - B. DynamoDB Accelerator (DAX)
    - C. S3 Intelligent-Tiering
    - D. AWS Backup

22. A company needs to migrate an on-premises NFS file share into Amazon S3 with recurring incremental transfers. Which service should it use?
    - A. Amazon Cognito
    - B. Amazon EventBridge
    - C. AWS DataSync
    - D. AWS CloudHSM

23. A global application needs static anycast IP addresses and fast routing for TCP traffic. The content is not cacheable. Which service fits?
    - A. AWS Global Accelerator
    - B. Amazon CloudFront only
    - C. Amazon EFS
    - D. AWS Config

24. A company must run a latency-sensitive HPC workload where EC2 instances need high network throughput and low latency between nodes. Which placement option is best?
    - A. Spread placement group across many Regions
    - B. Dedicated Host only
    - C. Partition placement group for unrelated microservices
    - D. Cluster placement group

25. A steady-state EC2 workload runs all year. The company can commit to a consistent amount of compute usage and wants a discount with flexibility across instance families. Which pricing option is best?
    - A. Spot Instances only
    - B. Compute Savings Plans
    - C. On-Demand Instances only
    - D. S3 Glacier Flexible Retrieval

26. A fault-tolerant batch process can checkpoint progress and tolerate interruptions. Which EC2 purchasing option should reduce cost the most?
    - A. Dedicated Hosts
    - B. On-Demand Capacity Reservations only
    - C. Spot Instances
    - D. Standard RDS Reserved Instances

27. A private subnet sends heavy S3 traffic through a NAT gateway. The company wants to lower NAT processing charges and keep traffic private. What should it add?
    - A. Gateway VPC endpoint for S3
    - B. Internet gateway
    - C. Public IPs on the instances
    - D. AWS Shield Advanced

28. A company stores logs that are rarely accessed after 90 days and must be retained for 7 years at the lowest cost. Which S3 storage class is usually best for long-term archive with very rare retrieval?
    - A. S3 Standard
    - B. S3 One Zone-IA for all copies
    - C. EBS gp3
    - D. S3 Glacier Deep Archive

29. An application has unpredictable relational database usage with long idle periods. The company wants to avoid paying for fixed capacity when idle. Which database option should be considered?
    - A. Amazon Redshift provisioned cluster
    - B. Aurora Serverless
    - C. RDS Reserved Instance
    - D. Amazon Neptune provisioned cluster

30. A company wants to identify underutilized EC2 instances and receive rightsizing recommendations. Which service should be used?
    - A. AWS Artifact
    - B. Amazon Kendra
    - C. AWS Compute Optimizer
    - D. AWS AppSync

## Answer Key

1. A - IAM Identity Center is the workforce identity service for centralized access across accounts.
2. C - Cross-account access needs permission on the calling side and a resource/trust path on the target side.
3. B - SCPs set maximum permissions and guardrails across member accounts.
4. D - Secrets Manager stores secrets and supports managed rotation patterns.
5. B - WAF handles Layer 7 HTTP filtering and rate-based rules.
6. C - KMS key policies are a core authorization layer for KMS keys.
7. A - Systems Manager uses interface endpoints through PrivateLink, not gateway endpoints.
8. D - Macie discovers sensitive data such as PII in S3.
9. B - Object Lock provides WORM-style retention for S3 objects.
10. C - SQS decouples request intake from downstream processing and absorbs bursts.
11. A - Route 53 supports DNS routing policies and health-check-based failover.
12. D - Multi-AZ is the standard RDS HA choice when read scaling is not the main goal.
13. B - Backup and restore is the lowest-cost DR strategy when RTO/RPO can be hours.
14. C - SQS is the managed queue for buffering worker jobs.
15. A - Step Functions orchestrates multi-step workflows with retries and branching.
16. D - Multi-AZ Auto Scaling behind an ALB removes the single-AZ web-tier risk.
17. B - CloudFront caches content at edge locations and reduces latency for global users.
18. C - RDS Proxy pools database connections for spiky serverless or application traffic.
19. A - EFS is the managed shared POSIX file system for Linux EC2 instances.
20. D - Athena provides serverless SQL over S3 data.
21. B - DAX is the DynamoDB cache for microsecond read latency.
22. C - DataSync handles online NFS/SMB/object transfers and recurring sync.
23. A - Global Accelerator gives static anycast IPs and optimized non-cache routing.
24. D - Cluster placement groups optimize for low-latency, high-throughput node-to-node traffic.
25. B - Compute Savings Plans give commitment-based compute discounts with flexibility.
26. C - Spot is the lowest-cost EC2 choice for interruptible/checkpointed workloads.
27. A - S3 gateway endpoints avoid NAT for S3 traffic and keep routing private.
28. D - Glacier Deep Archive is designed for rarely accessed long-term archive at very low storage cost.
29. B - Aurora Serverless fits variable relational capacity needs with idle periods.
30. C - Compute Optimizer recommends rightsizing for underutilized compute resources.

## Review

Score by domain:

- Questions 1-9: security
- Questions 10-16: resilience
- Questions 17-24: performance
- Questions 25-30: cost

For every miss, add one sentence to [../mistakes.md](../mistakes.md): `I chose X, but the clue was Y, so the rule is Z.`
