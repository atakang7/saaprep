# Domain 3: Design High-Performing Architectures

Official weight: 24% of scored content.

Source: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain3.html

## What To Master

- Storage performance and scalability
- Elastic compute
- Database performance
- Network performance
- Data ingestion and transformation

## Storage

- S3: object storage, massive scale, web assets, data lakes, backups.
- EBS: block storage for EC2, good for boot volumes and low-latency workloads.
- EFS: shared Linux file system across multiple instances.
- FSx: managed file systems for Windows, Lustre, NetApp ONTAP, and OpenZFS use cases.
- Storage Gateway: hybrid storage between on-premises and AWS.
- DataSync: online transfer between storage systems.

Decision patterns:

- Need shared POSIX file system for Linux instances: EFS.
- Need block storage attached to one EC2 instance: EBS.
- Need static assets or data lake: S3.
- Need high-performance file system for HPC: FSx for Lustre.

## Compute

- EC2: full control over instances.
- Auto Scaling group: elasticity for EC2 fleets.
- Lambda: event-driven serverless compute.
- ECS/EKS: container orchestration.
- Fargate: serverless containers.
- Batch: managed batch processing.

Decision patterns:

- Need no server management and event-driven execution: Lambda.
- Need containers without managing instances: Fargate.
- Need custom OS or specialized instance type: EC2.
- Need to scale workers independently: decouple with SQS and scale consumers.

## Databases

- RDS: managed relational database.
- Aurora: AWS-optimized relational database with high performance and availability.
- DynamoDB: key-value and document NoSQL with massive scale.
- ElastiCache: Redis or Memcached caching.
- Redshift: data warehouse analytics.
- OpenSearch: search and log analytics.

Decision patterns:

- Strong relational constraints and SQL: RDS or Aurora.
- Serverless key-value access at very high scale: DynamoDB.
- Microsecond in-memory reads: ElastiCache.
- Analytics over large structured data: Redshift or Athena depending on storage and query pattern.
- Read-heavy relational app: read replicas or cache.

## Networking And Edge

- CloudFront: CDN for caching content close to users.
- Global Accelerator: static anycast IPs and optimized routing to regional endpoints.
- Route 53 latency routing: DNS-based routing to lower-latency Regions.
- Direct Connect: private dedicated connectivity.
- Site-to-Site VPN: encrypted connection over the internet.
- Transit Gateway: hub for many VPCs and networks.
- PrivateLink: private access to services across VPCs/accounts.

Decision patterns:

- Cache static and dynamic content globally: CloudFront.
- Improve global TCP/UDP app performance with static IPs: Global Accelerator.
- Connect many VPCs and on-prem networks: Transit Gateway.
- Private service exposure without peering: PrivateLink.

## Data Ingestion

- Kinesis Data Streams: custom real-time stream processing.
- Data Firehose: managed delivery to destinations like S3, Redshift, and OpenSearch.
- Glue: ETL and data catalog.
- Athena: query data in S3 using SQL.
- Lake Formation: data lake governance.

Decision patterns:

- Need managed streaming delivery with minimal code: Firehose.
- Need custom consumers and replay over stream shards: Kinesis Data Streams.
- Need transform/catalog data for analytics: Glue.
- Need ad hoc SQL over S3: Athena.

## Drill Prompts

- Pick storage for 10 EC2 instances needing shared file access.
- Improve read latency for a relational database.
- Choose between CloudFront and Global Accelerator.
- Design a near real-time clickstream ingestion pipeline.
