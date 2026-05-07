# Quiz 001: Security And Resilience

These are original practice questions, not exam dumps. Answer first, then check the key.

## Questions

1. An application running on EC2 needs to read objects from one S3 bucket. What is the most secure credential pattern?
   - A. Store an access key in an environment variable
   - B. Store an access key in the AMI
   - C. Attach an IAM role to the EC2 instance profile
   - D. Use the AWS account root user access keys

2. A company has private EC2 instances that must download patches from the internet. The instances should not receive inbound internet connections. What should be used?
   - A. Internet gateway directly on the private subnet
   - B. NAT gateway in a public subnet
   - C. VPC peering
   - D. AWS Direct Connect

3. A web application receives sudden traffic spikes and its image-processing workers cannot keep up. What improves resilience with minimal coupling?
   - A. Add Amazon SQS between upload and processing
   - B. Replace the database with Amazon Redshift
   - C. Put all instances in one Availability Zone
   - D. Disable Auto Scaling

4. A workload needs high availability for an RDS database in one Region. Read scaling is not the main requirement. What should be configured?
   - A. RDS Multi-AZ
   - B. RDS read replica only
   - C. S3 lifecycle policy
   - D. CloudFront

5. A company wants one event to trigger several independent downstream processes. Which service pattern best fits?
   - A. SNS fanout
   - B. EBS snapshot
   - C. Security group
   - D. NAT gateway

6. A team needs to centrally restrict which AWS services member accounts can use. What should they use?
   - A. Security groups
   - B. Service control policies in AWS Organizations
   - C. S3 pre-signed URLs
   - D. EC2 key pairs

7. A private application must call S3 frequently without sending traffic through the public internet or NAT gateway. What should be added?
   - A. Gateway VPC endpoint
   - B. Internet gateway
   - C. Public IP addresses
   - D. Elastic Beanstalk

8. A company has an RTO of minutes and wants a scaled-down copy of its environment running in another Region. Which DR strategy is this?
   - A. Backup and restore
   - B. Pilot light
   - C. Warm standby
   - D. Local snapshots only

9. Which service is best for storing and automatically rotating database credentials?
   - A. AWS Secrets Manager
   - B. Amazon CloudFront
   - C. Amazon Athena
   - D. AWS Batch

10. A public web app needs protection from common HTTP-layer attacks such as SQL injection. What should be used?
   - A. AWS WAF
   - B. AWS DataSync
   - C. Amazon EFS
   - D. AWS Glue

## Answer Key

1. C - Use an IAM role with least privilege. Avoid long-term keys on instances.
2. B - NAT gateway allows outbound internet from private subnets when routes are configured.
3. A - SQS buffers work and lets workers process asynchronously.
4. A - Multi-AZ provides availability and failover for RDS.
5. A - SNS fanout sends a message to multiple subscribers.
6. B - SCPs set organization guardrails for accounts.
7. A - Gateway endpoints support private S3 access from a VPC.
8. C - Warm standby keeps a smaller full environment ready to scale.
9. A - Secrets Manager is the rotation-friendly choice.
10. A - WAF filters HTTP(S) requests based on web rules.

## Review

Log every miss in [../mistakes.md](../mistakes.md), then add at least one new card to [../flashcards.md](../flashcards.md).
