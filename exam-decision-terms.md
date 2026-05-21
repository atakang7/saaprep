# SAA-C03 Exam Decision Terms — The Complete Map

Every question hides one or two of these terms. Find the term → apply the rule → eliminate → pick.

---

## OPERATIONAL CONSTRAINT TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Least operational overhead | Managed, serverless, no patching | EC2, self-managed DBs, anything you maintain |
| Minimal management / administration | Same as above + prefer AWS-native over custom | Custom scripts, manual processes, cron on EC2 |
| Fully managed | AWS handles scaling, patching, HA | Anything on EC2, anything you install yourself |
| Serverless | No capacity planning, pay-per-use | Fixed instances, reserved capacity planning |
| No server management | Lambda, Fargate, managed services | EC2, self-hosted containers on EC2 |
| Least development effort | Use existing AWS features, not custom code | Custom Lambda glue, hand-rolled solutions |
| Least configuration changes | Smallest delta from current state | Re-architecture, migration to new service |
| Without modifying application code | Infrastructure-level fix only | Code changes, SDK changes, refactoring |

---

## SECURITY CONSTRAINT TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Must not traverse the public internet | VPC endpoints, PrivateLink, Direct Connect | NAT gateway path, public IPs, internet gateway |
| Private connectivity / private access | Same as above | Anything that routes through internet |
| Encrypt at rest | KMS, SSE-S3, SSE-KMS, service-native encryption | Unencrypted storage, default-only without key |
| Encrypt in transit | TLS, HTTPS, ACM, SSL listeners | HTTP listeners, unencrypted replication |
| Customer-managed keys / customer control | KMS customer managed key (CMK) | AWS managed keys, AWS owned keys, SSE-S3 |
| Least privilege | Scoped IAM policy, specific resources + actions | Wildcards, broad admin, full-access policies |
| Temporary credentials | IAM roles, STS, instance profiles | Long-term access keys, stored credentials |
| Cross-account access | Role assumption with trust policy | IAM user sharing, key copying between accounts |
| Rotate credentials automatically | Secrets Manager | Parameter Store (no auto rotation), hardcoded creds |
| Centralized access / single sign-on | IAM Identity Center | IAM users per account |
| Restrict to specific VPC | VPC endpoint policy, S3 bucket policy condition | Public access patterns |
| Prevent accidental deletion | Versioning, MFA Delete, Object Lock | No protection = wrong |
| Immutable / cannot be modified or deleted | S3 Object Lock (WORM), Governance or Compliance mode | Standard versioning alone (can still delete) |
| Audit / who did what | CloudTrail | CloudWatch (symptoms, not who) |
| Configuration history / drift | AWS Config | CloudTrail (API events, not state) |
| Threat detection | GuardDuty | Inspector (vulnerabilities, not threats) |
| Vulnerability scanning | Inspector | GuardDuty (threats, not CVEs) |
| Sensitive data discovery in S3 | Macie | GuardDuty, Inspector (wrong scope) |
| Organization-wide guardrail | SCP | IAM policy (single account/principal only) |
| DDoS protection | Shield (+ CloudFront + WAF) | Security groups, NACLs (not DDoS-focused) |
| SQL injection / XSS / HTTP attacks | WAF | Shield (DDoS only), security groups (L3/4 only) |
| Stateful network firewall in VPC | AWS Network Firewall | NACLs (stateless), security groups (allow only) |
| Block specific IP ranges at subnet level | NACL (deny rules) | Security group (no deny, allow only) |

---

## AVAILABILITY / RESILIENCE TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Highly available | Multi-AZ | Single AZ, single instance |
| Fault tolerant | No service interruption on failure, automatic | Anything requiring manual intervention |
| Survive AZ failure | Multi-AZ deployment, ALB + ASG across AZs | Single-AZ anything |
| Survive Region failure | Multi-Region, replication, Route 53 failover | Multi-AZ alone (same Region) |
| Automatic failover | Multi-AZ RDS, Aurora, Route 53 health checks | Manual DNS change, manual promotion |
| Minimal downtime (during maintenance) | Multi-AZ, blue/green, rolling | Single instance you must stop |
| Eliminate single point of failure | Redundancy at that tier | Any answer that leaves one component solo |
| Stateless application tier | External state (DynamoDB, ElastiCache, S3) | Local instance storage for session/state |
| Decouple / loosely coupled | SQS, SNS, EventBridge between components | Direct synchronous calls, tight dependencies |
| Buffer spikes / absorb bursts | SQS queue in front of workers | Direct invocation that overloads downstream |
| Asynchronous processing | SQS, SNS, EventBridge, Step Functions | Synchronous API call chains |

---

## DISASTER RECOVERY TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Minimize data loss | Lowest RPO → replication, continuous backup | Infrequent snapshots, daily backups |
| Minimize recovery time | Lowest RTO → warm standby or active-active | Backup and restore (hours) |
| RTO hours, RPO hours | Backup and restore (cheapest) | Over-engineering with active-active |
| RTO minutes, RPO minutes | Warm standby | Backup and restore (too slow), active-active (too expensive) |
| RTO near-zero, RPO near-zero | Active-active, multi-Region | Backup and restore, pilot light |
| Lowest cost DR | Backup and restore | Warm standby, active-active (cost more) |
| Core infrastructure ready but not running | Pilot light | Warm standby (running), backup (nothing ready) |
| Scaled-down but running | Warm standby | Pilot light (not running), active-active (full scale) |
| Point-in-time recovery | RDS PITR, DynamoDB PITR | Snapshots (discrete points only) |

---

## PERFORMANCE TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Near real-time / real-time | Streaming: Kinesis, Firehose | Batch, daily ETL, scheduled jobs |
| Low latency | Caching, edge, proximity, in-memory | Cross-Region calls, cold storage retrieval |
| Single-digit millisecond | DynamoDB, ElastiCache | RDS (higher latency), S3 (object retrieval overhead) |
| Microsecond latency | ElastiCache (Redis/Memcached), DAX | DynamoDB alone (ms not μs) |
| Millions of requests per second | DynamoDB, CloudFront, S3 | Single RDS instance, single EC2 |
| Global users / worldwide | CloudFront, Global Accelerator, Route 53 latency | Single-Region alone |
| Reduce latency for global users | CloudFront (if cacheable), Global Accelerator (if not) | Just scaling in one Region |
| Static content globally | CloudFront | Global Accelerator (no caching) |
| Non-cacheable TCP/UDP globally + static IPs | Global Accelerator | CloudFront (caches, no static IP, HTTP-focused) |
| Read-heavy workload | Read replicas, ElastiCache, DAX, CloudFront | Scaling the primary write instance |
| Write-heavy workload | DynamoDB, write sharding, scale primary | Read replicas (don't help writes) |
| High throughput sequential I/O | EBS HDD (st1/sc1) | gp3/io2 (IOPS-optimized, not throughput-seq) |
| High IOPS random I/O | EBS io2/io2 Block Express | HDD volumes (low IOPS) |
| Shared file access across instances | EFS (Linux), FSx (Windows/HPC) | EBS (single attachment for standard use) |
| HPC / tightly coupled compute | Cluster placement group, FSx for Lustre, EFA | Spread placement (opposite purpose) |

---

## COST TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Most cost-effective | Meet requirement at lowest price | Over-engineered solutions that exceed requirement |
| Lowest cost | Cheapest option that still works | Anything more expensive, even if better |
| Reduce cost | Change from current expensive setup | Staying with current architecture |
| Steady-state / predictable workload | Reserved Instances, Savings Plans | On-Demand (overpaying), Spot (unnecessary) |
| Variable / unpredictable traffic | On-Demand, Auto Scaling, serverless | Reserved Instances (commitment waste) |
| Interruptible / fault-tolerant batch | Spot Instances | On-Demand (overpaying), Reserved (over-committing) |
| Unknown access pattern (S3) | Intelligent-Tiering | Manual lifecycle (guessing wrong class) |
| Rarely accessed, need fast retrieval | S3 Standard-IA or Glacier Instant Retrieval | S3 Standard (overpaying), Deep Archive (too slow) |
| Rarely accessed, retrieval in hours OK | Glacier Flexible Retrieval | Deep Archive (if they need < 12h), Standard-IA (too expensive) |
| Archive, 7+ years, almost never retrieved | Glacier Deep Archive | Anything more expensive |
| Reduce NAT gateway cost | Gateway VPC endpoint for S3/DynamoDB | Keeping NAT for AWS-service traffic |
| Long-term compute commitment, flexibility | Compute Savings Plans | Reserved Instances (less flexible across families) |
| Idle periods / variable relational demand | Aurora Serverless | Provisioned RDS (paying idle) |
| Non-production environment cost | Stop instances off-hours, smaller sizes | Production-grade 24/7 |
| Unpredictable DynamoDB traffic | On-demand capacity mode | Provisioned (may waste or throttle) |
| Predictable DynamoDB traffic | Provisioned + auto scaling | On-demand (more expensive for steady) |

---

## DATA & STORAGE TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Object storage / static assets / data lake | S3 | EBS, EFS (wrong storage model) |
| Block storage attached to instance | EBS | S3 (objects, not block), EFS (shared file) |
| Shared Linux file system / POSIX | EFS | EBS (single attach), S3 (not POSIX) |
| Windows file share / SMB | FSx for Windows File Server | EFS (Linux/NFS only) |
| HPC scratch file system | FSx for Lustre | EFS (not HPC-optimized) |
| Hybrid on-premises + cloud storage | Storage Gateway | DataSync (transfer, not hybrid access) |
| Transfer data online, recurring sync | DataSync | Storage Gateway (access, not migration), Snow (offline) |
| Massive offline data transfer / limited bandwidth | Snow Family | DataSync (needs bandwidth), Direct Connect (takes time to provision) |
| Managed SFTP/FTP access to S3 | Transfer Family | Building FTP on EC2 |
| Central backup across services | AWS Backup | Per-service manual snapshots |
| Cross-Region backup copy | AWS Backup with cross-Region rule | Manual snapshot copy scripts |

---

## DATABASE TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Relational / SQL / joins / transactions | RDS or Aurora | DynamoDB (no joins) |
| Key-value / document at scale | DynamoDB | RDS (not designed for this) |
| In-memory cache / session store | ElastiCache | RDS, DynamoDB (not in-memory) |
| DynamoDB repeated reads acceleration | DAX | ElastiCache (not DynamoDB-native) |
| Data warehouse / OLAP / complex analytics | Redshift | RDS (OLTP), DynamoDB (no analytics) |
| SQL over S3 files, no servers | Athena | Redshift (servers), RDS (not over S3) |
| Search / log analytics | OpenSearch | RDS, DynamoDB (not search engines) |
| Graph relationships | Neptune | DynamoDB, RDS (not graph-native) |
| MongoDB compatibility | DocumentDB | DynamoDB (different model) |
| Cassandra compatibility | Keyspaces | DynamoDB (different API) |
| Kafka compatibility | MSK | Kinesis (similar purpose, different API) |
| Database migration, minimal downtime | DMS | DataSync (not database), manual dump/restore (downtime) |
| Too many DB connections from Lambda | RDS Proxy | Adding read replicas (doesn't fix connection count) |
| Multi-Region active-active writes (NoSQL) | DynamoDB Global Tables | Aurora Global (read-only secondaries) |
| Multi-Region relational, fast DR | Aurora Global Database | RDS cross-Region read replica (slower failover) |
| Variable relational demand, idle periods | Aurora Serverless | Provisioned RDS (paying while idle) |

---

## NETWORKING & CONNECTIVITY TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Private subnet outbound internet | NAT gateway | Internet gateway directly (makes it public) |
| Private access to S3/DynamoDB | Gateway VPC endpoint (free, route table) | Interface endpoint (costs more for S3/DDB) |
| Private access to other AWS services | Interface VPC endpoint / PrivateLink | Gateway endpoint (S3/DDB only) |
| Private service exposure to consumers | PrivateLink | VPC peering (exposes whole network) |
| Dedicated private connection to AWS | Direct Connect | VPN (internet-based, less consistent) |
| Quick to deploy hybrid connection | Site-to-Site VPN | Direct Connect (weeks/months to provision) |
| Consistent bandwidth, predictable latency | Direct Connect | VPN (internet jitter) |
| Many VPCs connected, hub and spoke | Transit Gateway | VPC peering mesh (doesn't scale, non-transitive) |
| Two VPCs, simple connectivity | VPC peering | Transit Gateway (overkill + costs more) |
| HTTP path/host routing | ALB | NLB (no L7 routing) |
| TCP/UDP, static IP, extreme throughput | NLB | ALB (HTTP only, no static IP) |
| Network appliance insertion | Gateway Load Balancer | ALB/NLB (not for appliances) |
| DNS failover between Regions | Route 53 failover routing + health checks | Manual DNS updates |
| Send users to closest Region | Route 53 latency-based routing | Simple routing (no Region awareness) |
| Weighted traffic shifting (canary) | Route 53 weighted routing | Failover (on/off, not percentages) |

---

## ASYNC / EVENT / WORKFLOW TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Buffer work for workers / queue | SQS | SNS (push, no buffer retention) |
| One message → many subscribers | SNS fanout | SQS (one consumer pool) |
| Event routing with rules/patterns | EventBridge | SNS (basic filtering only) |
| Multi-step workflow with retries/branching | Step Functions | SQS (no orchestration), SNS (no state) |
| Exactly-once + ordering per group | SQS FIFO | SQS Standard (may duplicate, no order) |
| Maximum throughput queue, duplicates OK | SQS Standard | FIFO (throughput limited per group) |
| Streaming ingestion, custom consumers, replay | Kinesis Data Streams | Firehose (no custom consumers, no replay) |
| Deliver stream to S3/Redshift, minimal code | Data Firehose | Kinesis Data Streams (need custom consumer code) |
| Existing ActiveMQ/RabbitMQ protocols | Amazon MQ | SQS/SNS (different protocol) |
| GraphQL real-time mobile/web API | AppSync | API Gateway (REST/HTTP, not GraphQL-native) |
| REST/HTTP API with Lambda backend | API Gateway | AppSync (GraphQL-focused) |

---

## COMPUTE TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Full OS control / custom agents | EC2 | Lambda (no OS), Fargate (no host access) |
| Lift and shift | EC2, Application Migration Service | Lambda, rewrite-heavy options |
| Event-driven, short-lived, no server | Lambda | EC2 (overhead), Fargate (unnecessary for single function) |
| Containers without managing instances | Fargate | EC2 launch type (you manage nodes) |
| Kubernetes required | EKS | ECS (not K8s API) |
| AWS-native containers, simplest | ECS | EKS (more complex if K8s not required) |
| Batch processing jobs, queued | AWS Batch | Lambda (timeout limits), manual EC2 fleet |
| Spark / Hadoop / big data frameworks | EMR | Glue (simpler ETL), Batch (not Spark) |
| Scale out EC2 fleet on demand | Auto Scaling group | Manual instance launching |
| Replace unhealthy instances automatically | Auto Scaling group + health checks | Standalone EC2 (no replacement) |

---

## MIGRATION TERMS

| Term in question | Forces | Kills |
| --- | --- | --- |
| Rehost / lift and shift servers | Application Migration Service (MGN) | Re-platform, refactor approaches |
| Database migration, ongoing replication | DMS + CDC | DataSync (not for databases) |
| Schema conversion (heterogeneous DB) | SCT (Schema Conversion Tool) + DMS | Direct dump/restore to different engine |
| Move NFS/SMB data to AWS | DataSync | DMS (databases only), Snow (if network is fine) |
| Limited bandwidth + petabytes | Snow Family | DataSync (would take forever) |
| Managed SFTP endpoint for partners | Transfer Family | EC2 FTP server (operational overhead) |

---

## CONSTRAINT COMBINATION PATTERNS

The exam usually stacks 2 constraints. The intersection narrows to one answer:

| Combo | Answer |
| --- | --- |
| Lowest cost + interruptible batch | Spot |
| Lowest cost + steady 24/7 | Savings Plans / Reserved |
| High availability + relational DB | RDS Multi-AZ or Aurora |
| Read scaling + relational DB | Read replicas or ElastiCache |
| Private S3 access + reduce cost | Gateway VPC endpoint |
| Global + cacheable content | CloudFront |
| Global + TCP/UDP + static IPs | Global Accelerator |
| Least ops + event-driven | Lambda |
| Least ops + containers | Fargate |
| Least ops + relational + variable | Aurora Serverless |
| Shared files + Linux | EFS |
| Shared files + Windows | FSx for Windows |
| Decouple + absorb spikes | SQS |
| One event → many actions | SNS or EventBridge |
| Ordered workflow | Step Functions |
| Real-time stream + custom processing | Kinesis Data Streams |
| Stream delivery + no custom code | Data Firehose |
| Encrypt + customer key control | KMS CMK |
| Rotate credentials + auto | Secrets Manager |
| Cross-account governance + block services | SCP |
| Audit API history | CloudTrail |
| Compliance rules on resource config | AWS Config |
| Archive + 7 years + cheapest | Glacier Deep Archive |
| Unknown S3 access pattern + cost | Intelligent-Tiering |
| Multi-Region writes + NoSQL | DynamoDB Global Tables |
| Multi-Region reads + relational DR | Aurora Global Database |
| Many VPCs + hybrid | Transit Gateway |
| Quick hybrid connectivity | VPN |
| Consistent hybrid bandwidth | Direct Connect |
| Lambda → DB connection overload | RDS Proxy |
| Log query in S3 + no servers | Athena |
| ETL + catalog for data lake | Glue |
| DDoS + HTTP filtering | CloudFront + WAF + Shield |
| Immutable retention | S3 Object Lock |
| Sensitive data in S3 | Macie |
| Centralized workforce access | IAM Identity Center |

---

## KILLER NUMBERS (when they disqualify an option)

| Service | Limit that kills it | When it matters |
| --- | --- | --- |
| Lambda | 15 min max timeout | Long-running process → can't use Lambda |
| Lambda | 10 GB memory max | Memory-intensive → may need EC2/Fargate |
| Lambda | 6 MB sync response payload | Large response → can't use Lambda directly |
| SQS | 256 KB message max | Large payload → use S3 pointer pattern |
| SQS | 14-day max retention | Longer retention need → not SQS |
| SQS FIFO | 3,000 msg/s with batching per queue (higher in some regions) | Very high throughput → Standard or Kinesis |
| S3 | 5 TB max single object | Won't hit this, but multipart required >5 GB |
| S3 | 100 MB → should use multipart | Upload performance question |
| S3 Standard-IA | 30-day minimum charge | Frequent access → wrong class |
| Glacier Flexible | 90-day minimum charge | Short retention → wrong class |
| Glacier Deep Archive | 180-day minimum, 12h+ retrieval | Need fast retrieval → wrong class |
| API Gateway | 29s integration timeout | Long-running backend → need async pattern |
| DynamoDB | 400 KB max item size | Large items → wrong service or S3 pointers |
| RDS | 5 read replicas (standard), Aurora 15 | Extreme read scale → Aurora or caching |
| Aurora | Failover typically <30s | When failover speed matters vs RDS ~60-120s |
| Direct Connect | Weeks to months to provision | "Quickly establish connectivity" → VPN first |
| EBS gp3 | 16,000 IOPS max | Need more → io2 |
| EBS io2 | 64,000 IOPS (or 256k with Block Express) | Extreme IOPS need |
| VPC | /16 to /28 CIDR range | Can't make bigger than /16, smaller than /28 |
| KMS | AWS managed keys rotate yearly (automatic) | Customer managed keys → configurable rotation |
| NAT Gateway | ~45 Gbps bandwidth per gateway | Usually not the bottleneck, but per-AZ resource |

---

## HOW TO USE THIS TOMORROW

1. Read the question once. Circle/identify the **constraint term(s)**.
2. Look up what it forces and what it kills.
3. Eliminate killed options immediately.
4. If two survive, look for the **second constraint** — it always breaks the tie.
5. If still stuck: pick the **smaller managed option** that satisfies the stated requirement exactly.

---
