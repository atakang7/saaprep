# Domain 4: Design Cost-Optimized Architectures

Weight: 20% of scored content.

Official task topics:

- 4.1 Design cost-optimized storage solutions
- 4.2 Design cost-optimized compute solutions
- 4.3 Design cost-optimized database solutions
- 4.4 Design cost-optimized network architectures

## Domain Story: Spend Like An Architect, Not Like A Tourist

Cost questions are not about being cheap at all costs. They are about meeting the requirement with the least waste. If the business needs minutes of recovery, you cannot choose a design that takes days. If data must be retrieved instantly, you cannot archive it into a slow retrieval class. Good cost design is disciplined, not stingy.

Simple framework: REQUIREMENT FIRST, DISCOUNT SECOND.

- Meet security, durability, availability, and performance requirements.
- Remove idle capacity and wrong-size resources.
- Use pricing models, lifecycle policies, and managed elasticity.
- Watch hidden network and data-transfer charges.

## Topic 4.1: Design Cost-Optimized Storage Solutions

Mini-story: Storage is a giant closet. Some things are used every hour, some once a month, some must be kept for seven years, and some should have been thrown away last quarter. Cost optimization is labeling shelves and moving boxes before the closet eats the budget.

Framework: HOT, WARM, COLD, GONE.

- Hot data needs fast frequent access.
- Warm data is accessed sometimes.
- Cold data is rarely retrieved.
- Gone data should expire when policy allows.

### 10 Important Things

1. S3 lifecycle policies are cost levers.

   Lifecycle policies can transition objects between storage classes and expire them when retention allows. This is one of the most common SAA cost answers for logs, backups, and archives. The best lifecycle design follows access pattern and compliance requirements. If the question says "retain logs for years but rarely access them", lifecycle to Glacier classes is probably waiting.

2. S3 Intelligent-Tiering fits unknown access patterns.

   Intelligent-Tiering automatically moves objects between access tiers based on usage. It is useful when you do not know whether data will be hot or cold. It avoids guessing wrong between Standard and infrequent access classes. The exam clue is "unpredictable access pattern".

3. Retrieval requirements decide the archive class.

   Glacier storage classes differ by retrieval time and cost. Some archives need minutes, some can wait hours, and deep archive patterns can wait longer. Do not choose the coldest class if the business requires immediate access. The cost answer must still meet the restore-time requirement.

4. EBS gp3 is the common general-purpose cost-performance choice.

   gp3 lets you configure performance independently from size, which often reduces cost compared with older patterns. io2 is for high-performance, high-IOPS, high-durability workloads that justify the price. HDD-backed volumes fit throughput-heavy sequential workloads. For SAA, know that not every workload needs provisioned IOPS.

5. Shared file storage cost depends on behavior.

   EFS can use lifecycle management to move cold files to lower-cost classes. Throughput mode and performance mode can affect cost and fit. FSx should be chosen when the workload needs that specific file system capability, not as a generic file answer. If a simpler service meets the requirement, simpler is often cheaper.

6. Backup frequency and retention are business decisions.

   More frequent backups and longer retention increase cost. Too few backups increase recovery risk. AWS Backup can centralize policies so teams do not invent different schedules everywhere. The exam often asks for "cost-effective while meeting recovery requirements"; match backup frequency to RPO and retention to compliance.

7. Data migration has different cost shapes.

   DataSync is good for online transfers and repeated syncs. Snow Family is useful when network transfer would be too slow or impractical. Transfer Family is protocol-driven for SFTP, FTPS, and FTP workflows. Choose the migration service that reduces time, network strain, and operations for the given source.

8. Request patterns can cost money.

   S3 charges can include storage, requests, retrieval, data transfer, and optional features. Batching uploads or using fewer small inefficient requests can reduce request overhead in some designs. Requester Pays can shift data transfer and request costs to the requester for shared datasets. Cost questions sometimes hide in the behavior, not the storage size.

9. Right-size storage instead of over-provisioning.

   EBS volumes, provisioned IOPS, file system throughput, backup retention, and database storage can all be oversized. Managed services can reduce capacity planning, but configuration still matters. Monitor actual usage before buying expensive headroom. The exam likes "review existing workload" scenarios where the right answer is to right-size.

10. Cost tools turn guessing into evidence.

   Cost Explorer analyzes spend, Budgets alerts on thresholds, Cost and Usage Report provides detailed data, and cost allocation tags map cost to teams or apps. These tools do not optimize by themselves, but they show where to act. If the question asks for tracking, chargeback, or forecasting, cost tools and tags are the answer family.

## Topic 4.2: Design Cost-Optimized Compute Solutions

Mini-story: Compute is staffing. You can hire full-time staff, temporary staff, on-call specialists, or a managed service that handles the shift schedule. Waste happens when you pay a full room of people to wait for work.

Framework: STEADY, SPIKY, INTERRUPTIBLE, SPECIAL.

- Steady workloads like commitments.
- Spiky workloads like elasticity.
- Interruptible workloads like Spot.
- Special workloads need the right instance family or service.

### 10 Important Things

1. Match purchasing option to workload predictability.

   On-Demand is flexible but usually more expensive for steady usage. Reserved Instances and Savings Plans reward commitment. Spot Instances are deeply discounted but interruptible. The exam signal is simple: steady 24/7 workload -> commitment; fault-tolerant batch -> Spot; unknown or short-term -> On-Demand.

2. Savings Plans and Reserved Instances are not the same shape.

   Savings Plans are spend commitments that can apply across eligible compute usage depending on plan type. Reserved Instances are tied more directly to instance attributes and services. Both reduce cost for predictable usage. At SAA level, know when commitment makes sense and avoid applying it to unstable workloads.

3. Spot is for work that can survive interruption.

   Spot Instances can be interrupted, so they fit batch processing, CI workers, stateless fleets with mixed capacity, and flexible background jobs. They do not fit a single critical stateful database. Auto Scaling mixed instance policies can combine On-Demand and Spot for balanced cost and availability. If the workload can checkpoint or retry, Spot becomes attractive.

4. Right-size instance families before buying discounts.

   A discount on the wrong instance is still waste. Compute optimized, memory optimized, storage optimized, and accelerated instances exist for different resource shapes. AWS Compute Optimizer can recommend changes based on utilization. The exam may say CPU is low and memory is high; that suggests changing family or size, not only scaling out.

5. Auto Scaling reduces idle capacity.

   Auto Scaling lets fleets grow and shrink with demand. It is cost optimization because you stop paying for peak capacity all day. Scheduled scaling helps predictable patterns, while target tracking helps variable demand. The best scaling metric should match the actual bottleneck or business signal.

6. Serverless can reduce idle cost and operations.

   Lambda charges based on requests and duration, which can be excellent for intermittent workloads. Fargate avoids managing EC2 hosts for containers. API Gateway, SQS, EventBridge, and DynamoDB can build elastic architectures with less idle capacity. But serverless is not always cheapest at very high steady volume, so match it to the workload.

7. Non-production workloads do not need production posture.

   Dev and test systems can often run on schedules, smaller sizes, fewer AZs, or lower retention. Production workloads may need Multi-AZ, stronger backups, and more capacity. The exam may ask how to reduce cost for non-production resources; stopping instances outside business hours is a classic move. Do not apply dev shortcuts to production unless the question allows it.

8. Load balancer choice can affect cost and fit.

   ALB, NLB, and Gateway Load Balancer have different pricing dimensions and capabilities. Use ALB for HTTP routing features, NLB for high-performance Layer 4 needs, and Gateway Load Balancer for appliances. Do not pay for complexity you do not need. Cost optimization starts with selecting the service that actually matches traffic.

9. Hibernation and scheduling help intermittent EC2 workloads.

   EC2 hibernation preserves in-memory state for supported instances and can reduce startup friction. Stopping and starting instances on schedules can reduce cost for predictable non-24/7 workloads. This is especially relevant for development, testing, and occasional processing systems. The exam clue is "used only during business hours".

10. Hybrid and edge compute are requirement-driven.

   Outposts, Wavelength, and VMware Cloud on AWS solve specific locality, latency, or migration constraints. They are not generic cost savers. If the requirement does not mention on-premises dependency, ultra-low latency to a telecom edge, or VMware migration needs, simpler regional AWS services are usually better. Cost questions often reward avoiding specialized services when ordinary managed services fit.

## Topic 4.3: Design Cost-Optimized Database Solutions

Mini-story: Databases are restaurants with different menus. Ordering a warehouse buffet for a single shopping cart is expensive. Ordering a tiny snack stand for enterprise reporting is painful. Cost optimization starts by choosing the restaurant that serves the meal you actually need.

Framework: ENGINE, CAPACITY, RETENTION.

- Engine: relational, key-value, document, graph, warehouse, cache.
- Capacity: steady, spiky, read-heavy, write-heavy, connection-heavy.
- Retention: backup, archive, expire, or keep online.

### 10 Important Things

1. Choose the database type before tuning price.

   RDS and Aurora fit relational workloads. DynamoDB fits serverless key-value/document access at scale. ElastiCache fits in-memory caching. Redshift fits data warehousing. Picking the wrong database type creates cost through workarounds, over-provisioning, and operational complexity.

2. DynamoDB capacity mode matters.

   On-demand capacity fits unpredictable traffic because it removes capacity planning. Provisioned capacity with auto scaling can be cheaper for predictable traffic. Poor partition key design can waste capacity and hurt performance. If the traffic pattern is unknown or spiky, on-demand is a common SAA answer.

3. Aurora Serverless can fit variable relational demand.

   Aurora Serverless can scale capacity for compatible relational workloads with variable or intermittent usage. It is useful when always-on database capacity would be wasteful. It is not a magic replacement for every relational workload, especially if requirements demand exact features or predictable high throughput. The exam clue is "infrequent", "variable", or "unpredictable relational workload".

4. Read replicas cost money, so use them for real read pressure.

   Read replicas improve read scale and can help latency, but each replica adds cost. If the problem is repeated identical reads, caching might be cheaper. If the problem is analytics queries hurting production, a replica or analytics service may be appropriate. The best answer addresses the real read pattern.

5. Caching can reduce database spend.

   ElastiCache can absorb hot reads, session data, and repeated expensive queries. DAX can reduce read load for DynamoDB. Caching lets you avoid scaling the database for repeated work. The cache must fit data freshness requirements; stale data may be unacceptable for some workloads.

6. Backups and retention should match recovery needs.

   Long backup retention increases storage cost, but short retention may fail compliance or recovery requirements. Snapshot frequency should match RPO. Automated backups, manual snapshots, PITR, and AWS Backup policies all have different management patterns. The exam asks for lowest cost that still meets retention and recovery needs.

7. Database storage and IOPS are easy to overbuy.

   Provisioned IOPS, large instances, and oversized storage can quietly burn money. gp3-style thinking applies in database storage too: provision what the workload needs, then monitor. Some managed databases auto scale storage, which helps growth but still requires cost awareness. If the question shows low utilization, right-sizing is likely.

8. Connection management can avoid over-scaling.

   Too many connections can make a database look underpowered. RDS Proxy pools connections and helps spiky serverless or application traffic use the database efficiently. This can avoid scaling up the database just to handle connection churn. Exam clue: "Lambda functions open many database connections".

9. Move old analytical data out of expensive online systems.

   Operational databases should not always hold every historical record forever if old data is rarely needed. Exporting data to S3 for Athena, Glue, or Redshift analytics can reduce pressure and cost. Retention policies can archive or expire old data. The best architecture separates hot operational data from cold analytical history.

10. Migrations are a chance to reduce cost.

   Moving from self-managed databases to RDS or Aurora can reduce operations. Moving from overbuilt relational patterns to DynamoDB can reduce cost if access patterns fit. DMS can support migrations with reduced downtime. Do not migrate blindly; use the move to choose the right engine and capacity model.

## Topic 4.4: Design Cost-Optimized Network Architectures

Mini-story: Network cost is the toll system. Some roads are free-ish, some charge by distance, some charge by booth, and some are expensive because traffic crosses neighborhoods unnecessarily. The bill often rises from invisible routes.

Framework: KEEP TRAFFIC CLOSE.

- Avoid unnecessary cross-AZ and cross-Region paths.
- Use endpoints for heavy AWS service access.
- Cache at the edge.
- Choose private connectivity only when it pays for its requirement.

### 10 Important Things

1. NAT gateways are useful but can become toll booths.

   NAT gateways charge for hours and data processing. They are excellent managed services for outbound internet from private subnets, but not always the cheapest path for AWS service traffic. Gateway VPC endpoints for S3 and DynamoDB can keep supported traffic private and avoid NAT processing. Exam clue: "private instances access S3 heavily" points to an S3 gateway endpoint.

2. Cross-AZ and cross-Region traffic can surprise you.

   Moving data between AZs or Regions can add cost and latency. Multi-AZ is important for availability, but chatty systems should not constantly bounce between AZs without reason. Cross-Region replication should match DR, compliance, or latency requirements. Cost optimization includes understanding the path data travels.

3. CloudFront can lower origin load and data transfer cost.

   CloudFront caches content close to users, which improves latency and reduces repeated origin fetches. It can reduce load on S3, ALB, or custom origins. This is both a performance and cost lever. Exam signal: many global users repeatedly downloading the same content.

4. Direct Connect and VPN serve different cost and reliability profiles.

   VPN is usually faster to set up and uses the internet. Direct Connect has dedicated connectivity and can be cost-effective at high, steady bandwidth or when consistent performance is required. Many architectures use VPN backup for Direct Connect. The cheapest answer depends on bandwidth, duration, reliability, and setup requirements.

5. Transit Gateway simplifies many-network connectivity but is not free.

   Transit Gateway reduces complexity for many VPCs and hybrid networks. It has attachment and data processing costs. VPC peering can be cheaper and simpler for a small number of VPCs, but it does not scale cleanly into a big mesh. Choose Transit Gateway when management and topology justify it.

6. VPC endpoints can reduce cost and improve security.

   Gateway endpoints for S3 and DynamoDB have a different cost model from interface endpoints. Interface endpoints have hourly and data processing charges, so use them where private access, security, or traffic patterns justify them. The exam often expects the security benefit even when cost is not the main focus. For cost, compare endpoint charges with NAT and data transfer patterns.

7. Pick the load balancer that matches the protocol.

   ALB is a strong fit for HTTP and HTTPS applications with Layer 7 routing. NLB fits high-throughput Layer 4 workloads. Gateway Load Balancer fits network appliances. Choosing the right load balancer avoids paying for unused features or missing required ones.

8. DNS and routing can reduce unnecessary work.

   Route 53 latency routing, weighted routing, and failover routing can send users to appropriate endpoints. Good routing can reduce latency, avoid unhealthy systems, and support controlled deployments. It is not usually the biggest line item, but it can prevent expensive bad traffic flows. Cost optimization sometimes starts by sending traffic to the right place.

9. Bandwidth allocation should match the business need.

   A single VPN tunnel, multiple VPN tunnels, Direct Connect speed, or multiple Direct Connect connections all have different capacity and cost profiles. Overbuilding private connectivity wastes money; underbuilding creates performance and reliability pain. The exam may ask for "most cost-effective while meeting bandwidth requirements". Read the bandwidth number and availability requirement before picking the road.

10. Throttling protects systems and budgets.

   API Gateway throttling, WAF rate-based rules, SQS buffering, and application-level quotas can prevent traffic spikes from becoming runaway cost. Throttling is not only security; it is controlled demand. If a workload receives unpredictable public traffic, rate controls can protect downstream services. The best design keeps the system useful instead of letting one spike dominate the bill.
