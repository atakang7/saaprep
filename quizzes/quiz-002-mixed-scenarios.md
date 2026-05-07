# Quiz 002: Mixed SAA Scenario Drill

These are original practice questions, not exam dumps. Answer first, then check the key.

## Questions

1. A company runs a public web app on EC2. The app must route `/api` traffic to one target group and `/images` traffic to another. Which load balancer should be used?
   - A. Application Load Balancer
   - B. Network Load Balancer
   - C. Gateway Load Balancer
   - D. AWS Transit Gateway

2. A Lambda-based application opens many short-lived connections to an Aurora database and exhausts database connections during bursts. What should be added?
   - A. RDS Proxy
   - B. S3 Transfer Acceleration
   - C. NAT gateway
   - D. AWS WAF

3. A team must move 500 TB from an on-premises data center to AWS, but available internet bandwidth is too limited. Which service family is most appropriate?
   - A. AWS Snow Family
   - B. AWS AppSync
   - C. Amazon SNS
   - D. Amazon CloudWatch

4. An application needs a managed GraphQL API for a mobile app. Which service best fits?
   - A. AWS AppSync
   - B. Amazon Athena
   - C. AWS DataSync
   - D. Amazon Redshift

5. A private subnet sends heavy traffic to S3 through a NAT gateway. The company wants to reduce cost and keep traffic private. What should be added?
   - A. S3 gateway VPC endpoint
   - B. Internet gateway
   - C. Client VPN
   - D. AWS Shield Advanced

6. A company has a read-heavy RDS database workload. The application can tolerate slightly stale reads for reports. What should improve read scale?
   - A. Read replica
   - B. Multi-AZ standby only
   - C. S3 Object Lock
   - D. AWS Backup vault

7. A company needs to discover sensitive personal data stored in S3 buckets. Which service should it use?
   - A. Amazon Macie
   - B. AWS Glue
   - C. AWS DataSync
   - D. Amazon Polly

8. A workload needs SQL analytics directly on log files stored in S3 with no servers to manage. Which service best fits?
   - A. Amazon Athena
   - B. Amazon RDS
   - C. Amazon MQ
   - D. Amazon EFS

9. A company wants to connect hundreds of VPCs across accounts and on-premises networks with a hub-and-spoke routing model. Which service best fits?
   - A. AWS Transit Gateway
   - B. VPC peering between every VPC
   - C. AWS WAF
   - D. Amazon Cognito

10. A batch processing fleet can checkpoint work and tolerate interruptions. Which compute purchasing model should reduce cost the most?
    - A. Spot Instances
    - B. Dedicated Hosts only
    - C. On-Demand Instances only
    - D. Multi-AZ RDS

11. A company uses Apache Kafka on premises and wants a managed Kafka-compatible service on AWS. Which service should it choose?
    - A. Amazon MSK
    - B. Amazon SQS
    - C. AWS Step Functions
    - D. Amazon Route 53

12. A company needs a managed SFTP endpoint where partners upload files into S3. Which service best fits?
    - A. AWS Transfer Family
    - B. AWS Direct Connect
    - C. Amazon EventBridge
    - D. AWS CloudHSM

13. A web app needs protection from SQL injection and rate-based HTTP rules. Which service should be placed at the edge or load balancer?
    - A. AWS WAF
    - B. AWS DMS
    - C. AWS Backup
    - D. Amazon ECR

14. A company wants to audit who changed security group rules last week. Which service provides API activity history?
    - A. AWS CloudTrail
    - B. Amazon CloudFront
    - C. AWS Data Exchange
    - D. Amazon EFS

15. A global application needs static anycast IPs and accelerated routing for TCP traffic, but the traffic is not cacheable. Which service best fits?
    - A. AWS Global Accelerator
    - B. Amazon CloudFront only
    - C. AWS Glue
    - D. Amazon S3 Glacier

16. A company has a strict requirement that archived records cannot be deleted or modified for 7 years. Which S3 feature should be used?
    - A. S3 Object Lock
    - B. S3 Transfer Acceleration
    - C. S3 Select only
    - D. Multipart upload

17. An application needs a low-latency key-value database with serverless scaling and predictable access patterns. Which service best fits?
    - A. Amazon DynamoDB
    - B. Amazon Redshift
    - C. Amazon EFS
    - D. AWS Elastic Beanstalk

18. A team wants centralized governance for new AWS accounts, guardrails, and a landing zone. Which service is most aligned?
    - A. AWS Control Tower
    - B. Amazon Textract
    - C. AWS Batch
    - D. Amazon Kinesis Video Streams

19. A company needs to move an on-premises Oracle database to Amazon RDS with minimal downtime using ongoing replication. Which service should help?
    - A. AWS DMS
    - B. Amazon CloudWatch
    - C. AWS Device Farm
    - D. Amazon SNS

20. A company has unpredictable S3 object access patterns and wants automatic cost optimization without moving data manually. Which storage class is best?
    - A. S3 Intelligent-Tiering
    - B. S3 One Zone-IA only
    - C. S3 Glacier Deep Archive only
    - D. EBS io2

## Answer Key

1. A - ALB supports path-based Layer 7 routing.
2. A - RDS Proxy pools connections and helps spiky apps use databases efficiently.
3. A - Snow Family handles very large transfers when network bandwidth is impractical.
4. A - AppSync is the managed GraphQL API service.
5. A - Gateway endpoints support private S3 access and can avoid NAT data processing.
6. A - Read replicas are for read scaling; Multi-AZ is mainly availability.
7. A - Macie discovers sensitive data in S3.
8. A - Athena runs serverless SQL queries over S3 data.
9. A - Transit Gateway is the hub pattern for many VPCs and networks.
10. A - Spot fits interruptible, fault-tolerant workloads.
11. A - MSK is managed Apache Kafka.
12. A - Transfer Family provides managed SFTP/FTPS/FTP endpoints to S3 or EFS.
13. A - WAF handles Layer 7 web rules such as SQL injection and rate limits.
14. A - CloudTrail records AWS API activity.
15. A - Global Accelerator provides static anycast IPs and optimized routing without caching.
16. A - S3 Object Lock supports WORM-style retention.
17. A - DynamoDB fits serverless key-value access at scale.
18. A - Control Tower helps set up governed multi-account landing zones.
19. A - DMS supports database migration and ongoing replication.
20. A - Intelligent-Tiering fits unknown or changing access patterns.

## Review

For every miss, write:

- Which requirement did I overlook?
- Which distractor tempted me?
- What rule would have picked the right service faster?
