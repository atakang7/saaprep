# Question Flow Architecture & Critical Service Details

Two things must exist before generation:
1. The learning flow — what builds on what
2. The trap details — per-service facts the exam exploits

---

## PART 1: THE LEARNING FLOW

Questions are NOT random. They follow the path that traffic and decisions actually flow in a real architecture. Each layer teaches you the hidden intuition for the next layer.

### The Flow (bottom-up, like building a system)

```
Layer 0: THE NETWORK PLANE
  "Where can things exist? Where can traffic go?"
  → VPC, subnets, route tables, internet gateway, NAT gateway
  → You can't understand any service until you feel where it sits

Layer 1: ACCESS PLANE
  "Who can reach what, through what path?"
  → VPC endpoints, PrivateLink, security groups, NACLs
  → IAM roles, policies, resource policies
  → Now you understand: things exist in places AND have permission boundaries

Layer 2: DATA PLANE
  "Where does data live, in what shape?"
  → S3, EBS, EFS, FSx (the physical storage layer)
  → Storage classes, lifecycle (how data moves over time)
  → Now you understand: data has a place, a shape, and a cost curve

Layer 3: COMPUTE PLANE
  "What runs code, at what scale, with what control?"
  → EC2, Lambda, Fargate, ECS/EKS, Batch
  → Auto Scaling, pricing models
  → Now you understand: compute sits on the network, accesses data, scales

Layer 4: DATA SERVICES PLANE
  "How does data get queried, cached, analyzed?"
  → RDS, Aurora, DynamoDB, ElastiCache, Redshift, Athena
  → Read replicas, Multi-AZ, global patterns
  → Now you understand: databases serve compute, with specific access patterns

Layer 5: COMMUNICATION PLANE
  "How do components talk to each other?"
  → SQS, SNS, EventBridge, Step Functions, Kinesis, Firehose
  → Now you understand: decoupled systems use async patterns between layers

Layer 6: RESILIENCE PLANE
  "How does the whole thing survive failure?"
  → Multi-AZ, Multi-Region, DR strategies, Route 53, backups
  → Now you understand: each previous layer has a failure mode and a fix

Layer 7: EDGE PLANE
  "How does it reach end users fast?"
  → CloudFront, Global Accelerator, Route 53 policies
  → Now you understand: the user is far from the system, edge closes the gap

Layer 8: COST PLANE
  "How do you do all of the above without waste?"
  → Pricing models, lifecycle, endpoints, right-sizing, Savings Plans
  → Now you understand: every previous decision has a cost lever

Layer 9: GOVERNANCE PLANE
  "How do you prove it's correct and catch when it drifts?"
  → CloudTrail, Config, CloudWatch, GuardDuty, Organizations
  → Now you understand: the system needs eyes on every layer
```

### Why This Order Works

- Layer 0 questions will make Layer 1 obvious (endpoints live in the network)
- Layer 1 questions will make Layer 4 obvious (databases need access controls)
- Layer 3 questions will make Layer 5 obvious (compute needs communication patterns)
- Layer 6 questions will reference all previous layers (resilience is per-layer)
- Layer 8 questions will stack constraints from earlier layers (cost optimizes what you already built)

### Within Each Layer: Question Progression

```
Question 1-2: Basic concept install (straightforward, one constraint)
Question 3-5: Constraint + trap (moderate, the real SAA level)
Question 6+: Stacked constraints (hard, two layers interacting)
```

---

## PART 2: CRITICAL SERVICE DETAILS (TRAP FACTS)

These are NOT "know the service." These are "the ONE fact about this service that the exam uses to make a right-sounding answer wrong."

Format: Service → Trap fact → How exam exploits it

### Network Plane Traps

| Service/Feature | Trap Fact | How Exam Exploits It |
| --- | --- | --- |
| Gateway VPC endpoint | Only supports S3 and DynamoDB | Question asks private access to SQS/KMS → gateway endpoint is wrong, must be interface |
| Interface VPC endpoint | Costs money (per hour + per GB) | Question asks "most cost-effective private S3 access" → gateway is free, interface isn't |
| NAT gateway | Per-AZ resource, not cross-AZ | Question has multi-AZ private subnets → need one NAT per AZ for HA (or accept single point) |
| NAT gateway | Charges per hour AND per GB processed | Question stacks "reduce cost" + "private access to S3" → endpoint removes NAT need |
| VPC peering | Non-transitive | VPC A↔B and B↔C does NOT mean A↔C → need Transit Gateway |
| Transit Gateway | Has data processing charges | Simple 2-VPC case → peering is cheaper |
| Direct Connect | Takes weeks/months to establish | "Quickly connect" → VPN. "Consistent bandwidth" → DC |
| Security groups | No deny rules, allow only | "Block specific IP" → must use NACL |
| NACLs | Stateless — must allow return traffic | Forget ephemeral ports = broken traffic |
| Route table | No route = no traffic regardless of SG/NACL | "Private subnet" = no route to IGW is what makes it private |

### Access Plane Traps

| Service/Feature | Trap Fact | How Exam Exploits It |
| --- | --- | --- |
| SCP | Never GRANTS permissions, only restricts | Question says "grant access across org" → SCP is wrong, need IAM policy |
| SCP | Applies to member accounts, NOT management account | "Prevent root from doing X in management account" → SCP won't help |
| IAM role (assume) | Needs BOTH trust policy + permission to assume | Cross-account access missing one side = doesn't work |
| S3 bucket policy | Can deny VPC endpoint condition | "Restrict S3 access to specific VPC" → bucket policy with vpc endpoint condition |
| KMS key policy | Key policy is PRIMARY authority (unlike IAM) | IAM allows KMS action but key policy doesn't → denied |
| Resource policy | Can grant cross-account WITHOUT role assumption | S3 bucket policy can directly allow external account |
| Cognito User Pool | For APP users authentication | Workforce access → IAM Identity Center, not Cognito |
| Cognito Identity Pool | Hands out temporary AWS credentials | After auth → get AWS creds for mobile/web apps |

### Storage Plane Traps

| Service/Feature | Trap Fact | How Exam Exploits It |
| --- | --- | --- |
| EBS | Standard attachment is single-instance, single-AZ | "Shared storage across instances" → EBS is wrong |
| EBS io2 multi-attach | Exists but only within same AZ, requires cluster-aware filesystem | Not the general shared storage answer |
| EFS | Linux/NFS only, no Windows | "Windows file share" → FSx, not EFS |
| S3 Standard-IA | 30-day minimum charge + retrieval fee | Frequent access → IA is MORE expensive |
| S3 One Zone-IA | Single AZ — data lost if AZ destroyed | "Recreatable data" OK, "cannot lose data" → NOT One Zone |
| Glacier Flexible | 90-day minimum, retrieval in minutes to hours | "Instant retrieval needed" → wrong class |
| Glacier Deep Archive | 180-day minimum, 12+ hours retrieval | Any faster need → wrong class |
| S3 Object Lock Compliance mode | NOBODY can delete, not even root | "Admin must be able to override" → use Governance mode |
| S3 Object Lock Governance mode | Can be overridden with special permissions | "Immutable for compliance, no exceptions" → Compliance mode |
| DataSync | Online transfer, needs network bandwidth | "Limited bandwidth + petabytes" → Snow, not DataSync |
| Storage Gateway | Ongoing hybrid ACCESS, not one-time migration | "Migrate and done" → DataSync. "Ongoing hybrid access" → Gateway |

### Compute Plane Traps

| Service/Feature | Trap Fact | How Exam Exploits It |
| --- | --- | --- |
| Lambda | 15-minute max timeout | Processing takes > 15 min → Lambda disqualified |
| Lambda | No persistent local state between invocations | "Maintain connection pool" → Lambda can't |
| Lambda | Cold starts can add latency | "Consistent sub-100ms latency" might push to container/EC2 |
| Lambda | 6 MB synchronous response payload | Large response body → async pattern or different compute |
| Fargate | No access to underlying host | "Install monitoring agent on host OS" → need EC2 launch type |
| Spot Instances | Can be interrupted with 2-min warning | Production stateful DB → NEVER Spot |
| Reserved Instances | Tied to instance type/Region/platform | Changing instance families frequently → Savings Plans better |
| Compute Savings Plans | Flexible across instance families AND Regions | Flexibility needed → Compute SP, not RIs |
| Auto Scaling | Cooldown period prevents flapping | Rapid scale without cooldown → thrashing |
| Cluster placement group | Same AZ, same rack — low latency | Multi-AZ requirement → can't use cluster placement |

### Database Plane Traps

| Service/Feature | Trap Fact | How Exam Exploits It |
| --- | --- | --- |
| RDS Multi-AZ (classic) | Standby CANNOT serve read traffic | "Need HA + read scaling" → Multi-AZ alone not enough, need replicas too |
| RDS read replica | Asynchronous — slight replication lag | "Perfectly consistent reads" → can't guarantee from replica |
| RDS read replica | Can be promoted — breaks replication permanently | "Promote for DR" → it works but it's a one-way door |
| Aurora | Up to 15 replicas that CAN serve reads | Aurora replicas are different from RDS read replicas in this HA model |
| Aurora Global Database | Secondary Regions are READ-ONLY | "Multi-Region writes for relational" → Aurora Global can't, DynamoDB Global Tables can |
| Aurora Global | Write forwarding forwards to primary (adds latency) | "Low-latency writes in all Regions" → false for Aurora Global |
| DynamoDB | 400 KB max item size | Large objects → store in S3, pointer in DDB |
| DynamoDB Global Tables | Multi-Region active-active writes — last writer wins conflict | Conflict resolution is automatic but simplistic |
| DynamoDB on-demand | More expensive per-request than provisioned at scale | "Predictable traffic + cost optimization" → provisioned + auto scaling |
| ElastiCache Redis vs Memcached | Redis: persistence, replication, complex types. Memcached: simple, multi-threaded, no persistence | "Persistence needed" → Redis. "Simple scale-out cache" → Memcached |
| DAX | Only for DynamoDB | RDS read acceleration → ElastiCache, not DAX |
| RDS Proxy | Only works with specific RDS/Aurora engines | Usually not a trap but know it exists for Lambda connection pooling |
| Redshift | Not for OLTP, not for single-row lookups | Transaction processing → RDS/Aurora, not Redshift |
| Athena | Cost = data scanned | Unpartitioned/uncompressed data → expensive Athena queries |

### Communication Plane Traps

| Service/Feature | Trap Fact | How Exam Exploits It |
| --- | --- | --- |
| SQS Standard | At-least-once delivery (may duplicate) | "Exactly once processing" → need FIFO or idempotent design |
| SQS FIFO | 3,000 msg/s with batching, 300 without | Massive throughput need → Standard or Kinesis |
| SQS | Pull-based (consumers poll) | "Push to subscribers" → SNS, not SQS |
| SNS | Push-based, no message retention/replay | "Replay events from yesterday" → SNS can't, Kinesis can |
| SNS | No buffering — if subscriber is down, message may be lost | "Guaranteed delivery even if consumer offline" → SQS (with DLQ) |
| EventBridge | Has archive and replay capability | "Replay events" with event routing → EventBridge can do it |
| Kinesis Data Streams | You manage shard capacity | "Least operational overhead for streaming delivery" → Firehose |
| Data Firehose | No custom consumer, no replay | "Custom real-time analytics application" → Kinesis Data Streams |
| Data Firehose | Near real-time (buffers 60s-900s) | "True real-time per-record" → Kinesis Data Streams |
| Step Functions | Standard workflows: up to 1 year execution | Long-running workflow → Standard. High-volume short → Express |
| Step Functions Express | Exactly-once option, but max 5 minutes | Short high-volume event processing alternative |
| Amazon MQ | For EXISTING broker protocol migration (AMQP, MQTT, STOMP) | New greenfield app → SQS/SNS, not MQ |
| API Gateway | 29-second timeout | Backend longer than 29s → need async (Step Functions, SQS) |

### Resilience Plane Traps

| Service/Feature | Trap Fact | How Exam Exploits It |
| --- | --- | --- |
| Multi-AZ | HA within Region, NOT disaster recovery | "Regional outage protection" → Multi-AZ alone won't help |
| Pilot light | Core RUNNING (DB replicating) but app not scaled | Confused with backup (nothing running) or warm standby (app running) |
| Warm standby | FULL SYSTEM running at reduced capacity | Confused with pilot light (minimal) or active-active (full) |
| Route 53 failover | Depends on TTL — not instant | DNS caching means failover takes TTL time |
| Route 53 health checks | Check endpoints, not whole architecture | Healthy endpoint ≠ healthy system |
| S3 replication | Does NOT replicate retroactively — only new objects | "Existing objects in S3" → need to copy manually/Batch |
| RDS automated backup | Retention max 35 days | Longer retention → manual snapshots or AWS Backup |
| DynamoDB PITR | 35-day rolling window | Older recovery → need exports or streams |
| AWS Backup | Cross-Region and cross-account possible | "Centralized backup across accounts/Regions" → Backup |

### Edge Plane Traps

| Service/Feature | Trap Fact | How Exam Exploits It |
| --- | --- | --- |
| CloudFront | Caches, HTTP/HTTPS focused | "TCP gaming application" → not CloudFront |
| CloudFront | Origin can be S3, ALB, custom HTTP — NOT NLB directly | "NLB behind CloudFront" → needs custom origin or different path |
| Global Accelerator | No caching, no content processing | "Cache content globally" → CloudFront, not GA |
| Global Accelerator | Provides 2 static anycast IPs | "Static IP for global app" → GA |
| Route 53 latency routing | Based on AWS measurements, not real user latency | Picks Region with lowest latency from DNS resolver location |
| CloudFront signed URLs/cookies | Restrict access to content | "Paid content only for subscribers" → signed URLs |

### Cost Plane Traps

| Service/Feature | Trap Fact | How Exam Exploits It |
| --- | --- | --- |
| NAT gateway | Charges per hour ($0.045) + per GB ($0.045) | High-volume S3 traffic → gateway endpoint kills this cost |
| Cross-AZ data transfer | ~$0.01/GB each way | Chatty multi-AZ app → cost adds up |
| CloudFront to origin | Lower transfer than direct internet egress | CF as cost saver for heavy egress |
| S3 retrieval fees | IA classes charge per-GB retrieval | Frequent access on IA → costs more than Standard |
| Reserved Instance | Use it or lose it, 1 or 3 year lock | Workload might change → Savings Plans more flexible |
| Interface endpoint | $0.01/GB + hourly per AZ | Many AZs + high traffic → can be expensive too |
| Intelligent-Tiering | Small monthly monitoring fee per object | Millions of tiny objects → monitoring fee adds up |

### Governance Plane Traps

| Service/Feature | Trap Fact | How Exam Exploits It |
| --- | --- | --- |
| CloudTrail | Records API calls (who did what) | "What is the current configuration?" → Config, not Trail |
| CloudTrail | Default 90-day event history, longer needs S3 | "Retain audit logs for 7 years" → send to S3 + lifecycle |
| Config | Evaluates compliance of resource STATE | "Who changed it?" → CloudTrail. "Is it compliant now?" → Config |
| Config | Can auto-remediate with SSM Automation | "Automatically fix non-compliant resources" → Config rule + remediation |
| CloudWatch | Metrics, logs, alarms — operational | "Compliance history" → not CloudWatch |
| GuardDuty | Detects threats, does NOT prevent/block | "Block malicious IPs" → NACL/WAF, not GuardDuty |
| Inspector | Scans workloads for CVEs | "Malicious API calls" → GuardDuty, not Inspector |
| Macie | S3 only — PII/sensitive data | "Sensitive data in RDS" → not Macie |
| Security Hub | Aggregates findings, doesn't generate its own detections | "Detect threats" → GuardDuty. "Central dashboard of findings" → Security Hub |

---

## PART 3: HOW THESE MAP TO QUESTION GENERATION

Every question we generate must:

1. **Sit at a specific layer** in the flow
2. **Exploit at least one trap fact** from Part 2
3. **Build intuitively on the previous layer's understanding**
4. **Make the trap option wrong BECAUSE of a specific trap fact** — not randomly wrong

### Example of how this works:

Layer 4 (Database), exploiting "RDS Multi-AZ standby cannot serve reads":

> A company has a read-heavy web application backed by an Amazon RDS MySQL database. The database experiences high CPU during peak hours due to reporting queries. The solutions architect needs to reduce the read load on the primary database while maintaining high availability in case of an AZ failure.
>
> Which combination of actions meets these requirements?
>
> A. Create a read replica for reporting queries AND configure Multi-AZ for the primary instance
> B. Configure Multi-AZ deployment — the standby will serve read traffic during peaks
> C. Migrate to DynamoDB with on-demand capacity
> D. Add Amazon CloudFront in front of the database

- **Trap fact exploited:** Multi-AZ standby cannot serve reads
- **Term:** "reduce read load" + "maintaining high availability"
- **Trap (B):** sounds like Multi-AZ handles both — it doesn't
- **Correct (A):** needs both features separately
- **Wrong problem (C):** different database engine entirely
- **Noise (D):** CloudFront doesn't cache database queries directly

---

## GENERATION READINESS CHECKLIST

Before generating questions for a layer:

- [ ] I know which trap facts from Part 2 apply to this layer
- [ ] I know the flow from the previous layer (what knowledge is assumed)
- [ ] I know the 30/50/20 difficulty split for this layer
- [ ] Each question exploits a SPECIFIC trap fact, not general confusion
- [ ] The trap option fails BECAUSE of one documented trap fact

---
