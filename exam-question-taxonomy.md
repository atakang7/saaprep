# Question Taxonomy — Hidden Decision Points of AWS SAA-C03

This file maps the exam's decision architecture. Each section = one decision point the exam repeatedly tests, how it's phrased, what trap it sets, and what questions we need to generate.

Questions will be created after this taxonomy is solid.

---

## TAXONOMY STRUCTURE

```
Decision Point
├── Concept: what is actually being tested
├── AWS phrasing variants: how the exam words it (2-3 ways)
├── Correct direction: what the constraint forces
├── Trap pattern: what sounds right but violates the constraint
├── Distractor pattern: what solves a different problem
├── Questions needed: number and angle
```

---

## CATEGORY 1: ACCESS PATH DECISIONS

These test: "How should traffic/access flow?"

### 1.1 Private vs Public access to AWS services

- **Concept:** Should this traffic go through internet or stay private?
- **AWS phrasing:**
  - "without traversing the public internet"
  - "traffic must remain on the AWS network"
  - "private connectivity to S3"
- **Correct:** VPC endpoint (gateway for S3/DDB, interface for others)
- **Trap:** NAT gateway (works but uses internet path)
- **Distractor:** VPC peering (different problem — VPC-to-VPC, not VPC-to-service)
- **Questions needed:** 3 (one S3, one non-S3 service, one that stacks with cost)

### 1.2 Private subnet internet access

- **Concept:** Private resources need outbound internet (patches, third-party APIs)
- **AWS phrasing:**
  - "instances in private subnets need to download updates"
  - "must not allow inbound connections from the internet"
  - "outbound internet access only"
- **Correct:** NAT gateway in public subnet
- **Trap:** Internet gateway (makes subnet public), VPC endpoint (only for AWS services)
- **Distractor:** Direct Connect (on-prem, not internet)
- **Questions needed:** 2 (one basic, one that contrasts with VPC endpoint for AWS-only traffic)

### 1.3 Hybrid connectivity choice

- **Concept:** How to connect on-premises to AWS
- **AWS phrasing:**
  - "dedicated private connection with consistent performance"
  - "quickly establish encrypted connectivity"
  - "predictable bandwidth between data center and AWS"
- **Correct:** Direct Connect (dedicated), VPN (quick/encrypted), both (resilient)
- **Trap:** Direct Connect when "quickly" is stated (takes weeks), VPN when "consistent bandwidth" is stated (internet jitter)
- **Distractor:** Transit Gateway alone (hub, not connectivity method)
- **Questions needed:** 3 (speed-to-deploy, consistency, combined)

### 1.4 Multi-VPC connectivity

- **Concept:** How to connect many VPCs / accounts
- **AWS phrasing:**
  - "hundreds of VPCs across accounts"
  - "hub-and-spoke network topology"
  - "transitive routing between VPCs"
- **Correct:** Transit Gateway
- **Trap:** VPC peering (non-transitive, doesn't scale)
- **Distractor:** PrivateLink (service exposure, not network connectivity)
- **Questions needed:** 2 (scale problem, transitive problem)

### 1.5 Private service exposure

- **Concept:** Expose a service to consumers without broad network access
- **AWS phrasing:**
  - "expose service to other VPCs without exposing entire network"
  - "third-party consumers access our service privately"
  - "without VPC peering"
- **Correct:** PrivateLink (interface endpoint)
- **Trap:** VPC peering (exposes full network), Transit Gateway (full routing)
- **Distractor:** Public endpoint + WAF (violates private requirement)
- **Questions needed:** 2

---

## CATEGORY 2: COMPUTE DECISIONS

These test: "What runs the code?"

### 2.1 Managed vs Control tradeoff

- **Concept:** How much infrastructure management is acceptable?
- **AWS phrasing:**
  - "least operational overhead"
  - "without managing servers"
  - "minimize infrastructure management"
- **Correct:** Lambda/Fargate/managed service
- **Trap:** EC2 with Auto Scaling (works but you manage it)
- **Distractor:** On-premises (absurd in context but sometimes offered)
- **Questions needed:** 3 (one Lambda-eligible, one container, one where EC2 IS correct because of OS/control need)

### 2.2 Container orchestration choice

- **Concept:** Which container platform?
- **AWS phrasing:**
  - "existing Kubernetes workloads"
  - "containerized application with least management"
  - "container orchestration with AWS-native integration"
- **Correct:** EKS (K8s), Fargate (least management), ECS (AWS-native)
- **Trap:** EKS when "least management" is the constraint (more complex than ECS+Fargate)
- **Distractor:** Lambda (not containers in traditional sense)
- **Questions needed:** 2 (K8s requirement, no-K8s simplest path)

### 2.3 Compute pricing model

- **Concept:** Which pricing fits the workload profile?
- **AWS phrasing:**
  - "steady-state production workload, reduce cost"
  - "fault-tolerant batch processing, lowest cost"
  - "unpredictable short-term workload"
  - "flexible commitment across instance families"
- **Correct:** Savings Plans/RI (steady), Spot (interruptible), On-Demand (unpredictable), Compute SP (flexible)
- **Trap:** Spot for critical production (can be interrupted), Reserved for variable workload (waste)
- **Distractor:** Dedicated Host (compliance/licensing only)
- **Questions needed:** 4 (one per pricing scenario)

### 2.4 Scaling trigger

- **Concept:** What metric drives scaling?
- **AWS phrasing:**
  - "scale based on demand"
  - "process messages from queue"
  - "maintain response time under load"
- **Correct:** CPU/request count for web, queue depth (ApproximateNumberOfMessages) for workers
- **Trap:** Scaling on memory when bottleneck is CPU, scaling on CPU when bottleneck is queue
- **Distractor:** Manual scaling
- **Questions needed:** 2 (web tier metric, worker tier metric)

### 2.5 Lambda limits as disqualifier

- **Concept:** When Lambda can't be used
- **AWS phrasing:**
  - "processing takes 30 minutes per file"
  - "application requires persistent connections"
  - "needs full operating system access"
- **Correct:** EC2, Fargate, Batch (depending on constraint)
- **Trap:** Lambda (15 min max, no persistent state)
- **Distractor:** API Gateway (front door, not compute itself)
- **Questions needed:** 2 (timeout kill, OS/control kill)

---

## CATEGORY 3: STORAGE DECISIONS

These test: "Where does data live?"

### 3.1 Storage type selection

- **Concept:** Object vs Block vs File
- **AWS phrasing:**
  - "shared across multiple Linux instances"
  - "static website assets"
  - "boot volume for EC2"
  - "Windows file shares"
- **Correct:** EFS (shared Linux), S3 (objects/static), EBS (block), FSx (Windows/HPC)
- **Trap:** EBS for shared (single attach), S3 for POSIX (not a file system)
- **Distractor:** Glacier (archive, not active storage)
- **Questions needed:** 4 (one per storage type)

### 3.2 S3 storage class selection

- **Concept:** Match access frequency to cost tier
- **AWS phrasing:**
  - "accessed infrequently but must be available in milliseconds"
  - "access patterns are unpredictable"
  - "archived for compliance, accessed once or twice per year"
  - "rarely retrieved, retrieval can take 12 hours"
- **Correct:** Standard-IA (infrequent+fast), Intelligent-Tiering (unknown), Glacier Flexible (yearly), Deep Archive (12h OK)
- **Trap:** Glacier when fast retrieval is needed, Standard-IA when access is truly unknown
- **Distractor:** S3 Standard for everything (works but wastes money)
- **Questions needed:** 4 (one per class decision)

### 3.3 Data migration method

- **Concept:** How to move data to AWS
- **AWS phrasing:**
  - "migrate 500TB, limited bandwidth"
  - "recurring daily sync from NFS to S3"
  - "partners upload files via SFTP"
  - "hybrid access to cloud storage from existing apps"
- **Correct:** Snow (large+limited BW), DataSync (recurring online), Transfer Family (SFTP), Storage Gateway (hybrid access)
- **Trap:** DataSync for petabytes with no bandwidth (too slow), Snow for recurring (one-time only)
- **Distractor:** DMS (databases, not file storage)
- **Questions needed:** 4 (one per migration scenario)

---

## CATEGORY 4: DATABASE DECISIONS

These test: "Which database/data service?"

### 4.1 Relational vs NoSQL

- **Concept:** Data model drives engine choice
- **AWS phrasing:**
  - "complex queries with joins across tables"
  - "flexible schema, key-value access at scale"
  - "ACID transactions across multiple tables"
  - "single-digit millisecond reads at any scale"
- **Correct:** RDS/Aurora (relational), DynamoDB (key-value/scale)
- **Trap:** DynamoDB for complex joins (can't), RDS for millions of key-value reads (won't scale)
- **Distractor:** Redshift (analytics, not OLTP)
- **Questions needed:** 3 (joins → relational, scale → DDB, ambiguous scenario)

### 4.2 Read performance improvement

- **Concept:** How to fix a read-heavy bottleneck
- **AWS phrasing:**
  - "read-heavy workload causing database performance issues"
  - "same data queried repeatedly"
  - "read latency increasing under load"
- **Correct:** Read replicas (scale reads), ElastiCache (cache hot reads), DAX (DynamoDB cache)
- **Trap:** Multi-AZ (availability, not read scale), scaling write primary (doesn't help reads)
- **Distractor:** Redshift (analytics, not OLTP caching)
- **Questions needed:** 3 (RDS reads, DynamoDB reads, repeated identical queries)

### 4.3 Availability vs Read scale confusion

- **Concept:** Multi-AZ ≠ read replica
- **AWS phrasing:**
  - "database must remain available if an AZ fails" → Multi-AZ
  - "reduce read latency for reporting queries" → read replica
  - "highly available AND read scaling" → both
- **Correct:** Multi-AZ (HA), read replica (read performance)
- **Trap:** Multi-AZ for read scaling, read replica for failover
- **Distractor:** DynamoDB Global Tables (multi-Region, not same Region HA for RDS)
- **Questions needed:** 3 (pure HA, pure read, combined)

### 4.4 Connection management

- **Concept:** Too many connections exhausting database
- **AWS phrasing:**
  - "Lambda functions open many short-lived connections"
  - "connection exhaustion during traffic spikes"
  - "database connections are being exceeded"
- **Correct:** RDS Proxy
- **Trap:** Read replicas (doesn't fix connection count), bigger instance (treats symptom)
- **Distractor:** ElastiCache (caching, not connection pooling)
- **Questions needed:** 2

### 4.5 Analytics vs OLTP

- **Concept:** Operational data vs analytical queries
- **AWS phrasing:**
  - "complex reporting queries affecting production performance"
  - "business intelligence dashboards"
  - "ad-hoc SQL queries over files in S3"
- **Correct:** Redshift (warehouse), Athena (S3 SQL), read replica (offload reports)
- **Trap:** RDS primary for BI (kills production), DynamoDB (no analytics)
- **Distractor:** Kinesis (ingestion, not query)
- **Questions needed:** 3 (warehouse, S3 query, separate from production)

### 4.6 Multi-Region data

- **Concept:** Global database patterns
- **AWS phrasing:**
  - "active-active writes across Regions" → DynamoDB Global Tables
  - "low-latency reads globally, single write Region" → Aurora Global Database
  - "regional disaster recovery for relational database" → Aurora Global
- **Correct:** DynamoDB Global Tables (multi-write), Aurora Global (relational, single-write + read secondaries)
- **Trap:** Aurora Global for multi-Region writes (secondaries are read-only), DynamoDB for relational
- **Distractor:** RDS cross-Region read replica (manual failover, slower)
- **Questions needed:** 3

---

## CATEGORY 5: RESILIENCE & DR DECISIONS

These test: "How does it survive failure?"

### 5.1 DR strategy selection

- **Concept:** RTO/RPO → strategy
- **AWS phrasing:**
  - "lowest cost, recovery can take hours"
  - "minutes of downtime acceptable"
  - "near-zero downtime, near-zero data loss"
  - "core systems ready but not fully running"
- **Correct:** Backup & restore → Pilot light → Warm standby → Active-active
- **Trap:** Active-active for "lowest cost DR", backup for "near-zero RTO"
- **Distractor:** Multi-AZ (not DR, that's HA within a Region)
- **Questions needed:** 4 (one per strategy)

### 5.2 Decoupling pattern

- **Concept:** How to prevent cascade failure
- **AWS phrasing:**
  - "downstream service cannot keep up with spikes"
  - "processing fails when third-party API is slow"
  - "orders are lost during peak traffic"
- **Correct:** SQS between components
- **Trap:** Bigger instance (doesn't decouple), SNS (no buffering)
- **Distractor:** CloudFront (edge caching, not work buffering)
- **Questions needed:** 3

### 5.3 Single point of failure removal

- **Concept:** Make each tier redundant
- **AWS phrasing:**
  - "application runs on a single EC2 instance"
  - "database is in a single Availability Zone"
  - "one NAT gateway serves all private subnets"
- **Correct:** ALB + ASG multi-AZ (web), Multi-AZ (DB), NAT per AZ (network)
- **Trap:** Larger instance (still single), snapshot only (backup, not HA)
- **Distractor:** CloudTrail (monitoring, not HA)
- **Questions needed:** 3 (one per tier)

---

## CATEGORY 6: SECURITY DECISIONS

These test: "Who/what can access, and how is it protected?"

### 6.1 Credential pattern

- **Concept:** How workloads authenticate
- **AWS phrasing:**
  - "application running on EC2 needs to access S3"
  - "securely access DynamoDB from Lambda"
  - "cross-account access to resources"
- **Correct:** IAM role (instance profile, execution role, assume role)
- **Trap:** Access keys stored in code/env/AMI
- **Distractor:** Cognito (app users, not workloads)
- **Questions needed:** 3 (EC2, Lambda, cross-account)

### 6.2 Secret management

- **Concept:** Where to store secrets
- **AWS phrasing:**
  - "automatically rotate database credentials"
  - "store configuration values with optional encryption"
  - "application references database password"
- **Correct:** Secrets Manager (rotation), Parameter Store (config, cheaper, no auto rotation)
- **Trap:** Parameter Store when auto rotation is required, Secrets Manager for plain config values
- **Distractor:** KMS (keys, not secrets themselves)
- **Questions needed:** 2

### 6.3 Encryption control

- **Concept:** Level of key control
- **AWS phrasing:**
  - "customer must control key rotation schedule"
  - "encrypt data using company-managed keys"
  - "default encryption at rest"
- **Correct:** CMK (customer control), AWS managed key (less control, simpler), SSE-S3 (default, no control)
- **Trap:** SSE-S3 when customer control is required, CMK when "simplest" is the constraint
- **Distractor:** ACM (TLS certs, not data-at-rest encryption)
- **Questions needed:** 2

### 6.4 Network filtering level

- **Concept:** Where to apply security rules
- **AWS phrasing:**
  - "block traffic from specific IP range"
  - "allow HTTPS traffic to application instances"
  - "stateful filtering at instance level"
- **Correct:** NACL (deny/block IPs, subnet level), Security group (allow, instance level, stateful)
- **Trap:** Security group for blocking (no deny rules), NACL for stateful filtering (stateless)
- **Distractor:** WAF (HTTP layer only, not network)
- **Questions needed:** 3

### 6.5 Multi-account governance

- **Concept:** How to restrict across an organization
- **AWS phrasing:**
  - "prevent member accounts from using specific services"
  - "organization-wide restriction"
  - "even administrators cannot override"
- **Correct:** SCP in AWS Organizations
- **Trap:** IAM policy (single account/principal), Config rules (detect, not prevent)
- **Distractor:** Security group (network, not service governance)
- **Questions needed:** 2

---

## CATEGORY 7: COST OPTIMIZATION DECISIONS

These test: "How to reduce spend while meeting requirements?"

### 7.1 Storage cost optimization

- **Concept:** Right-tier data
- **AWS phrasing:**
  - "reduce storage costs for logs accessed monthly"
  - "retain 7 years, accessed twice per year"
  - "cost-effective for unknown access patterns"
- **Correct:** Lifecycle to IA/Glacier, Deep Archive for long-term, Intelligent-Tiering for unknown
- **Trap:** Keeping everything in Standard, Glacier when fast retrieval is needed
- **Distractor:** EBS volume (not object storage cost issue)
- **Questions needed:** 3

### 7.2 Network cost reduction

- **Concept:** Reduce data transfer / NAT charges
- **AWS phrasing:**
  - "high NAT gateway data processing charges for S3 traffic"
  - "reduce data transfer costs between services"
  - "cross-AZ traffic adding unexpected cost"
- **Correct:** Gateway endpoint (S3/DDB), VPC endpoint, minimize cross-AZ chatter
- **Trap:** Bigger NAT (doesn't fix cost), Direct Connect for internal traffic
- **Distractor:** CloudFront for internal traffic (edge, not internal)
- **Questions needed:** 2

### 7.3 Compute right-sizing

- **Concept:** Don't overpay for wrong size/type
- **AWS phrasing:**
  - "CPU utilization consistently below 10%"
  - "identify underutilized instances"
  - "recommend right-sizing opportunities"
- **Correct:** Compute Optimizer, smaller instance, savings plan after right-sizing
- **Trap:** Reserved Instance for oversized instance (locking in waste)
- **Distractor:** Auto Scaling (doesn't fix size, fixes count)
- **Questions needed:** 2

---

## CATEGORY 8: EDGE & CONTENT DELIVERY DECISIONS

These test: "How to serve global users?"

### 8.1 CloudFront vs Global Accelerator

- **Concept:** Cacheable vs non-cacheable global traffic
- **AWS phrasing:**
  - "static and dynamic web content to global users" → CloudFront
  - "non-HTTP TCP application, needs static IPs, global" → Global Accelerator
  - "gaming server with UDP, fastest path" → Global Accelerator
- **Correct:** CloudFront (cacheable, HTTP), Global Accelerator (non-cacheable, TCP/UDP, static IP)
- **Trap:** CloudFront for TCP/UDP non-HTTP, Global Accelerator for static content
- **Distractor:** Route 53 (DNS only, not data path acceleration)
- **Questions needed:** 3

### 8.2 Load balancer selection

- **Concept:** ALB vs NLB vs GWLB
- **AWS phrasing:**
  - "route by URL path or hostname" → ALB
  - "millions of connections, static IP, TLS passthrough" → NLB
  - "inspect traffic with third-party appliance" → GWLB
- **Correct:** ALB (L7 HTTP), NLB (L4 TCP/UDP), GWLB (appliances)
- **Trap:** ALB for TCP/UDP (can't), NLB for path routing (can't)
- **Distractor:** Route 53 (DNS, not load balancer)
- **Questions needed:** 3

---

## CATEGORY 9: ASYNC & EVENT DECISIONS

These test: "How do components communicate?"

### 9.1 Queue vs Pub/Sub vs Event Bus

- **Concept:** Communication pattern selection
- **AWS phrasing:**
  - "workers process jobs one at a time from a backlog" → SQS
  - "one notification triggers multiple services" → SNS
  - "route events by pattern to different targets" → EventBridge
- **Correct:** SQS (1:1 buffered), SNS (1:many push), EventBridge (smart routing)
- **Trap:** SNS for buffering (no retention), SQS for fanout (one consumer pool)
- **Distractor:** Kinesis (streaming, not messaging)
- **Questions needed:** 3

### 9.2 Stream processing choice

- **Concept:** Real-time data ingestion
- **AWS phrasing:**
  - "custom real-time processing application, replay capability" → Kinesis Data Streams
  - "deliver streaming data to S3 with minimal code" → Data Firehose
  - "Kafka-compatible consumers already built" → MSK
- **Correct:** Kinesis (custom), Firehose (delivery), MSK (Kafka)
- **Trap:** Firehose for custom processing (no consumer API), Kinesis for simple delivery (over-engineering)
- **Distractor:** SQS (messaging, not streaming analytics)
- **Questions needed:** 3

### 9.3 Workflow orchestration

- **Concept:** Multi-step coordinated process
- **AWS phrasing:**
  - "multiple steps with retry logic and conditional branching"
  - "coordinate Lambda functions in sequence with error handling"
  - "human approval step in automated pipeline"
- **Correct:** Step Functions
- **Trap:** Chaining Lambdas via invocation (fragile), SQS (no orchestration flow)
- **Distractor:** EventBridge (routing, not orchestration)
- **Questions needed:** 2

---

## CATEGORY 10: OBSERVABILITY & GOVERNANCE DECISIONS

These test: "How do you watch, audit, and comply?"

### 10.1 CloudWatch vs CloudTrail vs Config

- **Concept:** Three different visibility tools
- **AWS phrasing:**
  - "who modified the security group?" → CloudTrail
  - "alert when CPU exceeds 80%" → CloudWatch
  - "detect when S3 bucket becomes public" → Config
- **Correct:** CloudTrail (API audit), CloudWatch (metrics/alarms), Config (resource compliance)
- **Trap:** Any of these three confused for each other
- **Distractor:** GuardDuty (threats, not config/metrics)
- **Questions needed:** 3

### 10.2 Detection vs Prevention

- **Concept:** Finding problems vs blocking them
- **AWS phrasing:**
  - "detect suspicious account activity" → GuardDuty
  - "find vulnerabilities in EC2 packages" → Inspector
  - "discover sensitive data in S3" → Macie
  - "prevent actions across accounts" → SCP
- **Correct:** Each has its lane
- **Trap:** GuardDuty for prevention (detects only), SCP for detection (prevents only)
- **Distractor:** WAF (web attacks, not account activity)
- **Questions needed:** 3

---

## SUMMARY: QUESTIONS TO GENERATE

| Category | Questions needed |
| --- | --- |
| 1. Access Path | 16 |
| 2. Compute | 13 |
| 3. Storage | 12 |
| 4. Database | 17 |
| 5. Resilience & DR | 10 |
| 6. Security | 12 |
| 7. Cost Optimization | 7 |
| 8. Edge & Content | 6 |
| 9. Async & Events | 8 |
| 10. Observability | 6 |
| **Total** | **~107** |

---

## GENERATION ORDER

We generate questions following this logic:
1. Start with highest-fail-rate categories (4, 1, 5 — database, access, resilience)
2. Then decision-confusion categories (9, 8 — async, edge)
3. Then constraint-kill categories (2, 3, 6 — compute, storage, security)
4. Finally optimization categories (7, 10 — cost, observability)

This order targets what actually fails people first.

---
