# Domain 2: Design Resilient Architectures

Official weight: 26% of scored content.

Source: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain2.html

## What To Master

- Scalable and loosely coupled architectures
- Highly available and fault-tolerant architectures

## Availability Basics

- Multi-AZ: high availability inside one Region.
- Multi-Region: disaster recovery, global latency, or regional isolation.
- Auto Scaling: adjusts capacity based on demand.
- Elastic Load Balancing: spreads traffic across healthy targets.
- Route 53: DNS routing, health checks, and failover patterns.

Decision patterns:

- Need simple high availability for a web app: ALB plus Auto Scaling group across at least two AZs.
- Need database failover inside a Region: RDS Multi-AZ or Aurora replicas.
- Need lower read latency: read replicas or caching.
- Need regional disaster recovery: pick DR strategy by RTO and RPO.

## Loose Coupling

- SQS: queue for decoupling producers and consumers.
- SNS: pub/sub fanout.
- EventBridge: event bus for application, SaaS, and AWS events.
- Step Functions: workflow orchestration and state management.
- Lambda: event-driven compute.

Decision patterns:

- Smooth sudden spikes: SQS between app and worker.
- Send one event to many subscribers: SNS fanout or EventBridge rules.
- Coordinate multi-step business process: Step Functions.
- Avoid losing work when downstream fails: queue and retry.

## Disaster Recovery

- Backup and restore: lowest cost, longest recovery.
- Pilot light: core components ready, scale after disaster.
- Warm standby: scaled-down full environment, faster recovery.
- Active-active: full production in multiple Regions, fastest and most complex.

RTO is how long recovery can take. RPO is how much data loss is acceptable.

Decision patterns:

- Low cost and tolerant of downtime: backup and restore.
- Minutes of downtime with controlled cost: warm standby.
- Near-zero downtime: active-active with data replication and global routing.

## Data Resilience

- S3 is designed for very high durability across multiple AZs.
- EBS snapshots back up volumes to S3.
- RDS automated backups support point-in-time restore.
- DynamoDB point-in-time recovery protects against accidental writes and deletes.
- Cross-Region replication helps with regional disaster recovery.

## Drill Prompts

- Design a resilient three-tier web app.
- Add a queue to prevent order-processing overload.
- Choose a DR strategy for a system with 15-minute RTO and 5-minute RPO.
- Improve an app that has one EC2 instance and one single-AZ database.
