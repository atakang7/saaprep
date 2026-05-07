# Domain 3: Design High-Performing Architectures

Weight: 24% of scored content.

Official task topics:

- 3.1 Determine high-performing and/or scalable storage solutions
- 3.2 Design high-performing and elastic compute solutions
- 3.3 Determine high-performing database solutions
- 3.4 Determine high-performing and/or scalable network architectures
- 3.5 Determine high-performing data ingestion and transformation solutions

## Domain Story: Make The City Move Fast Without Wasting Motion

Performance questions are not just "make it bigger". They are usually "make the right part faster". A slow website may need CloudFront, not a bigger database. A slow database may need better indexes, read replicas, caching, or a different service. A slow upload pipeline may need multipart uploads, Firehose, Kinesis, DataSync, or a format change.

Simple framework: FIND THE BOTTLENECK.

- Storage bottleneck: choose object, file, or block correctly.
- Compute bottleneck: scale, size, or decouple.
- Database bottleneck: match access pattern and add caching or replicas.
- Network bottleneck: move closer, route better, or choose better connectivity.
- Data bottleneck: batch, stream, transform, and store in the right shape.

## Topic 3.1: Determine High-Performing And/Or Scalable Storage Solutions

Mini-story: The city has warehouses, filing rooms, personal workbenches, and shared workshops. You would not store a video archive on a tiny desk, and you would not mount a desk to ten buildings at once. Storage performance starts by choosing the correct kind of storage.

Framework: OBJECT, FILE, BLOCK.

- Object: S3 for durable objects, static assets, data lakes, backups.
- File: EFS and FSx for shared file systems.
- Block: EBS for low-latency volumes attached to EC2.

### 10 Important Things

1. Match storage type to access pattern.

   Object storage stores whole objects and metadata, not a mounted disk. File storage gives a shared hierarchical file system. Block storage gives raw low-latency blocks to an instance. The exam often becomes easy once you identify whether the app needs object, file, or block semantics.

2. S3 is the default for scalable object storage.

   S3 is designed for massive durability, high scalability, static assets, backups, logs, and data lakes. It does not require capacity planning like a disk. S3 is also the home base for many analytics and archival patterns. If the workload stores independent files or objects and needs scale, S3 is usually in the conversation.

3. S3 performance improves with parallelism and the right transfer method.

   Multipart upload helps with large objects. Transfer Acceleration can improve long-distance uploads by using AWS edge locations. CloudFront can cache downloads close to users. For many small objects, request patterns and prefixes matter less than they used to, but request rate, object size, and client parallelism still affect design.

4. EBS is block storage for one primary EC2 attachment.

   EBS volumes are used for boot volumes, databases on EC2, and low-latency block workloads. General purpose SSD gp3 is a common default because performance can be configured separately from size. io2 fits high-IOPS, high-durability workloads. HDD volume types fit throughput-heavy sequential workloads, not random IOPS-heavy databases.

5. EFS is shared Linux file storage.

   EFS can be mounted by many Linux instances across AZs. It is useful for shared content, home directories, and lift-and-shift apps that expect a shared file system. Performance and throughput modes matter when workloads have many files or high throughput. If many EC2 instances need the same POSIX file system, EFS is usually the exam answer.

6. FSx is for specialized managed file systems.

   FSx for Windows File Server fits SMB and Windows workloads. FSx for Lustre fits high-performance computing and fast processing of file data, often integrated with S3. FSx for NetApp ONTAP and OpenZFS fit specific enterprise file system needs. On the exam, FSx is often chosen when EFS is too generic and the workload names a specific file system requirement.

7. Hybrid storage has purpose-built transfer tools.

   DataSync moves data online between on-premises storage, AWS storage, and supported locations. Storage Gateway connects on-premises apps to AWS-backed storage through file, volume, or tape gateway patterns. Transfer Family supports managed SFTP, FTPS, and FTP into AWS storage. Snow Family handles very large or disconnected transfers.

8. Durability and availability are not the same metric.

   Durability means data is unlikely to be lost. Availability means the service can be accessed when needed. S3 Standard is highly durable and highly available across multiple AZs, while some lower-cost classes trade availability or retrieval speed. EBS snapshots improve durability, but an unattached snapshot is not a running workload. Read the question carefully: is it asking "do not lose data" or "keep serving now"?

9. Lifecycle and replication can support performance goals too.

   Lifecycle policies are usually cost tools, but they can also keep hot data in fast classes and archive cold data out of the active path. Replication can put data closer to users or another Region. S3 Cross-Region Replication supports regional access and DR patterns. Do not overuse replication; use it when locality or recovery requirements justify it.

10. Future scale should influence the storage service, not just the size.

   A larger EBS volume is not the same as S3's object-scale model. A bigger file server is not the same as EFS elasticity. If the question says storage will grow unpredictably, prefer services that scale without constant capacity management. The exam often rewards managed, elastic storage when the requirement includes future growth and low operational overhead.

## Topic 3.2: Design High-Performing And Elastic Compute Solutions

Mini-story: Compute is the city's workforce. Some workers are permanent specialists, some are temporary event staff, some arrive in containers, and some only show up for a single task. Performance comes from assigning the job to the right workforce and scaling them by the right signal.

Framework: RUN, SCALE, DECOUPLE.

- Run on the compute model that fits control and operations needs.
- Scale based on the bottleneck metric.
- Decouple so each part can scale independently.

### 10 Important Things

1. EC2 gives the most control.

   EC2 is the right answer when you need OS-level control, custom agents, special networking, GPUs, licensed software, or specific instance families. Instance families matter: compute optimized for CPU, memory optimized for RAM-heavy workloads, storage optimized for local disk, accelerated computing for GPU or specialized hardware. The exam may ask for a workload clue such as "in-memory cache" or "high CPU batch processing"; map it to the instance family.

2. Auto Scaling makes EC2 elastic.

   EC2 Auto Scaling can add, remove, and replace instances based on health checks, schedules, or metrics. Target tracking policies are common for keeping a metric near a desired value. Step scaling handles more custom thresholds. Good scaling metrics reflect demand: CPU for CPU-bound workloads, request count for web fleets, queue depth for workers.

3. Lambda is event-driven compute with important limits.

   Lambda scales automatically for event-driven workloads and removes server management. Memory setting also affects CPU allocation, so tuning memory can improve performance. Watch timeouts, package size, concurrency, cold starts, and integration limits. If the question requires long-running processes or deep OS control, Lambda may not fit.

4. Fargate runs containers without EC2 management.

   Fargate works with ECS and EKS to run containers without managing worker nodes. It is a strong answer for containerized apps when the requirement says less operational overhead. ECS is simpler and AWS-native; EKS is Kubernetes-compatible. The exam often asks whether you need orchestration, portability, or minimal infrastructure management.

5. Batch and EMR handle specialized compute patterns.

   AWS Batch manages batch jobs and compute environments. EMR runs big data frameworks such as Spark and Hadoop-style processing. These are not generic web-app answers. They appear when the scenario says batch processing, large-scale data processing, or analytics jobs.

6. Decoupling lets compute scale independently.

   A producer should not have to wait for every downstream worker if the work can happen asynchronously. SQS, SNS, EventBridge, and Kinesis can create breathing room. Workers can scale based on queue depth or stream pressure instead of web request volume. This is performance and resilience at the same time.

7. Load balancer choice affects performance.

   ALB supports HTTP routing features such as path and host routing. NLB is built for very high throughput, low latency, TCP/UDP, and static IP needs. Gateway Load Balancer supports appliance insertion. Choosing the wrong load balancer can add missing features or unnecessary complexity.

8. Compute should be sized by resource shape.

   Do not choose a bigger instance only because it sounds serious. CPU-bound workloads need CPU, memory-bound workloads need RAM, network-heavy workloads need bandwidth, and storage-heavy workloads need IOPS or throughput. Lambda memory, ECS task CPU and memory, and EC2 instance type all express this idea. Performance tuning starts by knowing which resource is actually tight.

9. Edge compute and edge delivery reduce distance.

   CloudFront can run lightweight functions at the edge and cache content near users. Some workloads benefit more from moving the response closer than from scaling origin compute. Wavelength and Outposts address special low-latency or hybrid requirements, but they are more specialized. Exam signal: "global users" and "low latency content delivery" often points to edge services.

10. Quotas and throttling are part of architecture.

   Every service has quotas. Lambda concurrency, API Gateway throttling, Auto Scaling limits, Kinesis shard capacity, and database connection limits can become performance walls. The exam may describe a standby environment that cannot scale during failover because quotas were not raised. Performance planning includes making sure the emergency lane is actually wide enough.

## Topic 3.3: Determine High-Performing Database Solutions

Mini-story: Databases are the city's memory. Some memories are ledgers, some are shopping carts, some are graph relationships, some are search indexes, and some are warehouse shelves for analytics. The fastest database is the one whose shape matches the question.

Framework: PATTERN BEFORE PRODUCT.

- Is the data relational?
- What are the read and write patterns?
- Is latency, scale, consistency, or analytics the main requirement?
- Can caching remove repeated reads?

### 10 Important Things

1. Choose relational when relationships and transactions matter.

   RDS and Aurora fit SQL workloads with joins, transactions, and relational constraints. Aurora is AWS-optimized and commonly chosen for performance, availability, and managed relational scale. RDS fits familiar engines such as MySQL, PostgreSQL, MariaDB, Oracle, and SQL Server. If the app needs complex relational queries, DynamoDB is usually not the first answer.

2. Choose DynamoDB when access patterns are known and scale is massive.

   DynamoDB is a serverless NoSQL key-value and document database. It shines when access patterns are predictable, latency requirements are low, and scale is high. Partition key design matters because hot partitions can hurt performance. The exam often clues DynamoDB with "millions of requests", "single-digit millisecond latency", "serverless", or "key-value".

3. Read replicas improve read scale.

   Read replicas offload read traffic from a primary relational database. They can reduce read pressure and improve read latency for read-heavy workloads. They are not the same as Multi-AZ failover. If the question says "read-heavy application is overloading the database", read replicas or caching are likely answers.

4. Multi-AZ improves availability.

   Multi-AZ database deployments protect against infrastructure failure in an AZ. This is an HA design, not a performance booster for normal reads in many RDS patterns. Aurora has a cluster architecture with replicas that can serve reads and fail over, so read the exact service and wording. The exam trap is choosing Multi-AZ when the problem is simply too many reads.

5. Caching is often the cheapest performance leap.

   ElastiCache for Redis or Memcached can store hot data in memory. DAX is a DynamoDB-compatible cache for read-heavy DynamoDB workloads. Caching reduces repeated database work and lowers latency. If the data is read often and changes less often, caching may beat scaling the database.

6. RDS Proxy helps with connection storms.

   Many short-lived connections, especially from Lambda, can exhaust database connection capacity. RDS Proxy pools and manages connections to supported RDS and Aurora databases. It improves application resilience and scalability without rewriting all database logic. Exam signal: "serverless app opens too many database connections".

7. Analytics databases are not OLTP databases.

   Redshift is for data warehousing and analytics. Athena queries data in S3 using SQL. OpenSearch supports search and log analytics. Neptune is graph, DocumentDB is document-oriented, and Keyspaces is Cassandra-compatible. If the question is about transactions for a live app, do not jump to Redshift just because the data is large.

8. Capacity planning changes by database type.

   RDS and Aurora involve instance classes, storage, IOPS, replicas, and connection limits. DynamoDB involves read/write capacity modes, partition design, indexes, and item size. Redshift involves nodes, distribution, sort keys, and workload management at a high level. Good SAA answers match capacity knobs to the chosen database, not to a generic "make it bigger" instinct.

9. Global data patterns need global tools.

   DynamoDB global tables provide multi-Region, active-active table replication. Aurora Global Database supports low-latency global reads and DR-oriented relational patterns. S3 replication can support data locality for object data. Multi-Region data design requires thinking about consistency, conflict, latency, and failover.

10. Migrations depend on source and target.

   AWS DMS helps migrate databases with minimal downtime. Homogeneous migrations keep the same engine family, while heterogeneous migrations change engines and may require schema conversion. The exam may ask for migration with low downtime or a move from on-premises to managed AWS databases. Pick DMS when database replication and migration are the story.

## Topic 3.4: Determine High-Performing And/Or Scalable Network Architectures

Mini-story: Network architecture is the city map. Fast cars still arrive late if the roads are wrong. The exam asks you to choose highways, private roads, intersections, and edge entrances that match traffic shape.

Framework: PLACE, PATH, POLICY.

- Place resources close to users and dependencies.
- Pick the right path: internet, VPN, Direct Connect, endpoint, peering, transit.
- Apply policy with routes, security controls, and load balancers.

### 10 Important Things

1. VPC design starts with CIDR, subnets, and route tables.

   CIDR ranges must leave room for growth and avoid overlap with connected networks. Subnets usually map to AZs and tiers such as public, private app, and private data. Route tables define where traffic goes. Performance and scalability suffer when IP space is too small or routing is tangled.

2. ALB, NLB, and Gateway Load Balancer solve different traffic problems.

   ALB is best for HTTP and HTTPS routing by host, path, or headers. NLB is best for extreme performance, TCP/UDP/TLS, static IPs, and preserving source IP in many patterns. Gateway Load Balancer helps deploy and scale virtual network appliances. Exam trick: "Layer 7" means ALB; "Layer 4" means NLB.

3. CloudFront is a cache and global front door.

   CloudFront caches content at edge locations and can accelerate dynamic content paths too. It pairs with S3, ALB, API Gateway, and custom origins. It improves latency by reducing distance and origin load. If users around the world download web content, CloudFront is a strong answer.

4. Global Accelerator improves global routing for non-cacheable apps.

   Global Accelerator gives static anycast IPs and routes traffic over the AWS global network to healthy regional endpoints. It does not cache content like CloudFront. It is useful for TCP/UDP workloads, static IP requirements, and latency-sensitive global applications. The exam distinction is cacheable web content -> CloudFront; global network acceleration without caching -> Global Accelerator.

5. Route 53 routing policies steer users at DNS level.

   Latency-based routing sends users to low-latency endpoints. Weighted routing supports traffic shifting. Failover routing supports active-passive designs. Geolocation and geoproximity support location-aware routing. Route 53 is powerful, but DNS behavior depends on TTL and client caching.

6. VPN and Direct Connect are different hybrid roads.

   Site-to-Site VPN is encrypted over the internet and can be quick to set up. Direct Connect is a dedicated private connection and is often used for consistent bandwidth, lower latency, or private connectivity at scale. Many production hybrid designs use both: Direct Connect as primary and VPN as backup. Exam signal: "dedicated connection" points to Direct Connect.

7. Transit Gateway is the hub for many networks.

   VPC peering is simple for one-to-one connectivity but becomes hard to manage at scale and is non-transitive. Transit Gateway acts like a central router for many VPCs and on-premises networks. It simplifies large network topologies. If the scenario says "many VPCs across accounts need connectivity", Transit Gateway is usually cleaner than a peering mesh.

8. PrivateLink exposes services privately without full network sharing.

   PrivateLink lets consumers access a service through interface endpoints without opening broad network connectivity. It is useful across VPCs, accounts, and supported SaaS/provider patterns. VPC peering connects networks; PrivateLink exposes a service. On the exam, choose PrivateLink when the requirement is private service access with minimal network exposure.

9. NAT, endpoints, and egress design affect performance and reliability.

   NAT gateways provide outbound internet for private subnets, but they are AZ-scoped resources. VPC endpoints keep traffic to supported AWS services private and can avoid unnecessary internet paths. Centralized egress can simplify controls but may introduce cross-AZ or dependency concerns. The exam wants you to notice where traffic actually flows.

10. Resource placement can beat raw bandwidth.

   Put compute near its database, cache near its app, and content near users. Cross-AZ, cross-Region, and internet paths add latency and sometimes cost. Multi-AZ design is important, but chatty systems should avoid unnecessary cross-AZ dependency loops. Performance architecture is often about reducing distance and unnecessary hops.

## Topic 3.5: Determine High-Performing Data Ingestion And Transformation Solutions

Mini-story: Data is a river. Sometimes you collect it in buckets once a day, sometimes it rushes past in real time, and sometimes you need to clean it before anyone drinks from it. The exam asks whether you need batch, stream, transfer, transform, store, or visualize.

Framework: BATCH, STREAM, SHAPE.

- Batch: move chunks on a schedule.
- Stream: process records continuously.
- Shape: transform, partition, compress, catalog, and query.

### 10 Important Things

1. Start with ingestion frequency.

   Batch ingestion is fine for daily reports, large scheduled transfers, and offline analytics. Streaming ingestion is needed for near-real-time dashboards, fraud detection, clickstreams, and event processing. Do not build a streaming system for a monthly file transfer. The exam often includes time words like "near real-time", "daily", "continuous", or "periodic".

2. Kinesis Data Streams is for custom streaming consumers.

   Kinesis Data Streams stores streaming records in shards and lets consumers process them. You control shard capacity and consumer applications. It fits real-time processing where multiple consumers, replay, or custom stream logic matters. If the question mentions custom applications reading a stream, think Data Streams.

3. Data Firehose is for managed delivery.

   Data Firehose delivers streaming data to destinations such as S3, Redshift, OpenSearch, and other supported endpoints. It can buffer, transform, compress, and deliver with less code than managing consumers. It is the "send this stream into storage or analytics" tool. If the requirement says minimal administration for delivery, Firehose is attractive.

4. MSK fits Apache Kafka compatibility.

   Amazon MSK is managed Apache Kafka. It is useful when an organization already uses Kafka APIs, Kafka ecosystem tools, or needs Kafka-compatible workloads. It is not the simplest answer for every stream. The exam clue is usually explicit Kafka compatibility or migration.

5. Glue transforms and catalogs data.

   AWS Glue supports ETL jobs and the Glue Data Catalog. It is often used to transform raw data into query-friendly formats and maintain metadata for analytics. Glue can convert CSV to Parquet, crawl datasets, and prepare data lakes. If the question says "transform data before analytics" or "catalog S3 data", Glue is likely.

6. EMR is for big data frameworks.

   EMR runs frameworks such as Spark, Hive, and Presto-style processing. It is useful for large-scale distributed data processing when managed ETL alone is not enough or existing big data jobs must run. EMR is more specialized than Glue. Exam signal: Spark, Hadoop ecosystem, massive data transformation jobs.

7. S3 plus Athena is the lightweight data lake query pattern.

   Athena queries data in S3 using SQL without managing servers. It works best when data is well-partitioned, compressed, and stored in efficient columnar formats like Parquet. S3 stores the lake, Glue catalogs the lake, Athena queries the lake. This trio appears often in low-operations analytics designs.

8. Format and partitioning are performance features.

   CSV is easy but inefficient for many analytics queries. Parquet and ORC are columnar formats that reduce scanned data for many queries. Partitioning by date, region, tenant, or another common filter helps query engines skip irrelevant data. The exam may frame this as reducing query time or scanned data.

9. Transfer services match source constraints.

   DataSync handles online data movement between storage systems. Transfer Family supports SFTP, FTPS, and FTP access to S3 or EFS. Storage Gateway helps on-premises apps use AWS-backed storage. Snow Family handles huge, slow, or disconnected migrations. Match the tool to the source, protocol, data size, and connectivity.

10. Secure ingestion is part of performance architecture.

   Fast pipelines still need IAM, KMS encryption, VPC endpoints, bucket policies, and least-privilege roles. A public ingestion endpoint might need API Gateway throttling, WAF, authentication, and CloudWatch alarms. Streaming services have throughput controls and failure handling. The best answer keeps data moving quickly without turning the intake door into a security hole.
