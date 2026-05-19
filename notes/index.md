# Notes Index

The SAA exam is less about memorizing every AWS service and more about selecting the best architecture for a stated requirement.

## Domains

- [Domain 1: Security](domain-1-security.md)
- [Domain 2: Resilience](domain-2-resilience.md)
- [Domain 3: Performance](domain-3-performance.md)
- [Domain 4: Cost](domain-4-cost.md)

## Recurring Decision Patterns

For a visual version of these patterns, use [../field-guide/cloud-concept-map.md](../field-guide/cloud-concept-map.md).

- Least privilege: prefer roles, scoped policies, and temporary credentials.
- High availability: spread across Availability Zones before jumping to multi-Region.
- Fault tolerance: remove single points of failure and automate recovery.
- Loose coupling: use queues, events, and managed services to absorb spikes.
- Performance: match service to access pattern, latency, throughput, and scale.
- Cost: meet the requirement, then choose the lowest cost design that still satisfies it.
- Operational simplicity: prefer managed services when the question asks for less administration.

## Services To Know Cold

- IAM, Organizations, IAM Identity Center, KMS, Secrets Manager
- VPC, subnets, route tables, security groups, network ACLs, NAT gateway, VPC endpoints
- EC2, Auto Scaling, ALB/NLB/GWLB, Lambda, ECS/Fargate
- S3, EBS, EFS, FSx, Storage Gateway, DataSync
- RDS, Aurora, DynamoDB, ElastiCache, Redshift
- Route 53, CloudFront, Global Accelerator, Direct Connect, Site-to-Site VPN
- SQS, SNS, EventBridge, Step Functions
- CloudWatch, CloudTrail, Config, Systems Manager

## Question Reading Checklist

- What is the strictest requirement?
- Is the answer optimizing for security, resilience, performance, cost, or operations?
- Are there keywords like "least operational overhead", "lowest cost", "near real-time", "multi-AZ", "global users", "private connectivity", or "millions of requests"?
- Is the workload read-heavy, write-heavy, bursty, steady, stateful, or stateless?
- Does the solution need synchronous response, asynchronous processing, streaming, or batch?
