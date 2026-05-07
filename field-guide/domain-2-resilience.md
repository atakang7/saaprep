# Domain 2: Design Resilient Architectures

Weight: 26% of scored content.

Official task topics:

- 2.1 Design scalable and loosely coupled architectures
- 2.2 Design highly available and/or fault-tolerant architectures

## Domain Story: Build A City That Bends Instead Of Snaps

Resilience is the art of making failure boring. One building can lose power, one queue can fill up, one database node can fail, and the whole city should not panic. The SAA exam does not expect magic. It expects you to remove single points of failure, buffer stress, and choose a recovery plan that matches the business requirement.

Simple framework: SPREAD -> BUFFER -> RECOVER.

- Spread across AZs or Regions.
- Buffer with queues, events, and caches.
- Recover with failover, backups, replication, and automation.

## Topic 2.1: Design Scalable And Loosely Coupled Architectures

Mini-story: A busy restaurant fails when the cashier, cook, and delivery team all have to move in perfect sync. A resilient restaurant gives each station its own work queue. If orders spike, the kitchen catches up without the cashier melting down.

Framework: DECOUPLE.

- D: Divide tiers and responsibilities.
- E: Events over direct dependency when possible.
- C: Cache repeated reads.
- O: Offload managed work to purpose-built services.
- U: Use horizontal scaling.
- P: Pick serverless or containers when they fit.
- L: Let queues absorb uneven traffic.
- E: Examine state carefully.

### 10 Important Things

1. Multi-tier architecture creates clean blast-radius boundaries.

   A common SAA pattern is presentation tier, application tier, and data tier. The web tier can scale differently from the app tier, and the app tier can fail without directly exposing the database. Load balancers, private subnets, security groups, and separate Auto Scaling groups all help keep tiers independent. If a question describes one large server doing everything, the exam usually wants you to separate responsibilities.

2. Stateless components are easier to scale.

   Stateless services do not keep irreplaceable session data on one machine. That means any healthy instance can handle the next request. Store state in external systems such as DynamoDB, ElastiCache, RDS, S3, or a session store instead of local instance memory. The exam signal is "instances are losing session data" or "need to scale horizontally".

3. Horizontal scaling usually beats vertical scaling for elastic workloads.

   Vertical scaling means using a bigger machine. Horizontal scaling means adding more machines or tasks. Vertical scaling has limits and often requires interruption; horizontal scaling works naturally with load balancers and Auto Scaling. If the workload is stateless and traffic varies, scale out.

4. Load balancers are traffic directors, not just front doors.

   ALB works at Layer 7 and understands HTTP features such as paths, hosts, and headers. NLB works at Layer 4 and is built for very high performance, static IP needs, and TCP/UDP/TLS traffic. Gateway Load Balancer helps insert network appliances. The exam often gives the answer away with "path-based routing" for ALB or "millions of TCP connections" for NLB.

5. SQS is the pressure tank for uneven work.

   SQS decouples producers from consumers. Producers can send messages quickly, while workers process at their own pace. Visibility timeout, dead-letter queues, and scaling workers based on queue depth are high-yield ideas. If the question says "spikes overwhelm processing", SQS is probably the quiet hero.

6. SNS and EventBridge fan out events differently.

   SNS is straightforward pub/sub fanout to subscribers such as SQS, Lambda, HTTP endpoints, and email. EventBridge is an event bus with routing rules, event patterns, SaaS integrations, and application event design. For simple notification fanout, SNS is often enough. For event-driven application integration across services and accounts, EventBridge is often the better design.

7. Step Functions orchestrates workflows when order matters.

   Some workloads are not just "do this later"; they are "do step A, wait, branch, retry, then do step B". Step Functions manages state, retries, branching, and orchestration for multi-step processes. It pairs well with Lambda, ECS, Batch, and many AWS service integrations. If the scenario talks about coordinating a business workflow, avoid inventing glue code and think Step Functions.

8. Serverless reduces infrastructure coordination.

   Lambda, Fargate, API Gateway, SQS, SNS, EventBridge, Step Functions, and DynamoDB often appear together in low-operations architectures. Serverless does not mean no limits; you still care about concurrency, timeouts, payload limits, and service quotas. But for event-driven or bursty workloads, it can provide resilience without managing servers. Exam phrase: "least operational overhead" often points toward serverless managed services.

9. Containers help package and move applications consistently.

   ECS is AWS-native container orchestration. EKS is Kubernetes on AWS. Fargate runs containers without managing EC2 capacity. Containers are a good fit when an app already runs in containers, needs consistent packaging, or has microservices with independent deployment. The exam usually does not ask you to love Kubernetes; it asks whether containers reduce friction for that scenario.

10. Caching protects databases and users from repeated work.

   CloudFront caches content near users. ElastiCache caches database or application data in memory. DAX is a DynamoDB-focused cache. Caching improves performance and resilience by reducing load on origin systems. The framework is simple: if many users ask the same question repeatedly, do not make the database answer from scratch every time.

## Topic 2.2: Design Highly Available And Fault-Tolerant Architectures

Mini-story: Imagine a concert venue. If one entrance closes, people use another. If one stage light fails, the show continues. If the entire neighborhood loses power, the event needs a bigger emergency plan. That is HA and fault tolerance: keep serving despite local failure, and know the plan for regional failure.

Framework: AZ FIRST, REGION WHEN REQUIRED.

- Use multiple AZs for ordinary high availability.
- Use multiple Regions for disaster recovery, global latency, sovereignty, or regional isolation.
- Let RTO/RPO decide the DR strategy.

### 10 Important Things

1. Availability Zones are the default HA unit.

   Most SAA highly available designs start with multiple AZs inside one Region. Use load balancers across AZs, Auto Scaling across subnets, and managed databases with Multi-AZ options. This protects against an AZ-level issue without the complexity of multi-Region architecture. If the question only says "highly available", do not jump to active-active multi-Region unless the requirements demand it.

2. Regions are for disaster recovery and global design.

   Multi-Region designs help with regional disasters, data residency, and latency for global users. They add complexity: routing, replication, failover testing, data consistency, and cost. Route 53, CloudFront, Global Accelerator, Aurora Global Database, DynamoDB global tables, S3 replication, and backup copy strategies all show up in this world. The exam clue is usually "regional outage" or strict RTO/RPO.

3. Remove single points of failure from every tier.

   One EC2 instance, one NAT gateway for a critical multi-AZ app, one database node, one manually configured server, or one AZ can become a single point of failure. The exam often describes an architecture and asks what to improve. Look tier by tier: edge, web, app, data, network egress, identity, and deployment. If one part can fail and stop the whole system, design around it.

4. ELB plus Auto Scaling is the classic web-tier pattern.

   Elastic Load Balancing sends traffic to healthy targets across AZs. Auto Scaling replaces unhealthy instances and changes capacity based on demand. Health checks matter because they decide what receives traffic. If the question says "web app must survive instance failure and traffic changes", ALB or NLB plus Auto Scaling is likely the base design.

5. RDS Multi-AZ is for database availability, not read scaling.

   RDS Multi-AZ creates a standby for failover. It does not make the standby a normal read target for classic RDS Multi-AZ deployments. Read replicas are for read scaling and can also help with some DR patterns, but they are not the same as Multi-AZ failover. The exam loves this distinction because both choices sound database-ish and responsible.

6. Choose DR strategy by RTO and RPO.

   RTO is how long the business can wait for recovery. RPO is how much data the business can lose. Backup and restore is cheapest and slowest. Pilot light keeps core pieces ready. Warm standby keeps a scaled-down working environment. Active-active runs production in multiple Regions and is fastest, most complex, and usually most expensive.

7. Backups and replication solve different failure stories.

   Backups help recover from deletion, corruption, and old mistakes. Replication helps keep another location current for availability or disaster recovery. A replicated bad delete can still be a bad delete in two places, so backups remain important. The best resilient designs often combine replication for low RPO with versioned backups for "oops" recovery.

8. Route 53 health checks and routing policies can steer failover.

   Route 53 supports routing policies such as simple, weighted, latency-based, geolocation, and failover. Health checks can remove unhealthy endpoints from DNS responses. DNS failover is not always instant because of TTL and client caching, but it is a common SAA pattern. If the scenario asks for routing users away from a failed Region, Route 53 is a usual suspect.

9. Automation makes recovery repeatable.

   CloudFormation, launch templates, Auto Scaling, AMIs, Systems Manager, and infrastructure as code reduce manual repair. Immutable infrastructure means replacing broken things with known-good versions instead of hand-fixing them. The exam may phrase this as "ensure infrastructure integrity" or "avoid configuration drift". A manual runbook is useful; an automated recovery path is better for resilient architecture.

10. Visibility lets you notice failure before customers write the report.

   CloudWatch provides metrics, alarms, logs, and dashboards. X-Ray traces requests through distributed applications. Health checks, queue depth, latency, throttling, error rate, and saturation metrics are all useful. The exam sometimes asks which metric should drive scaling or alerting. Pick the metric that reflects the bottleneck, not the metric that is merely easy to graph.
