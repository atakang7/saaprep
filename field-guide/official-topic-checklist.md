# Official SAA-C03 Topic Checklist

Last checked against the AWS exam guide: 2026-05-07.

Use this as the scope checklist. Use the domain field guides for the story-style explanations and the top 10 important ideas per topic.

Official source: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html

## Technologies And Concepts That Might Appear

- Compute
- Cost management
- Database
- Disaster recovery
- High performance
- Management and governance
- Microservices and component delivery
- Migration and data transfer
- Networking, connectivity, and content delivery
- Resiliency
- Security
- Serverless and event-driven design principles
- Storage

## Domain 1: Design Secure Architectures

Weight: 30%.

### Task 1.1: Design Secure Access To AWS Resources

Study checklist:

- Access controls across multiple AWS accounts
- IAM, IAM Identity Center, federation, and directory integration
- AWS Regions, Availability Zones, and global infrastructure security implications
- Least privilege and AWS security best practices
- Shared responsibility model
- Root user protection and MFA
- IAM users, groups, roles, and policies
- Role-based access control, STS, role switching, and cross-account access
- Multi-account strategy with Organizations, Control Tower, and SCPs
- Resource-based policies for services such as S3, KMS, SQS, SNS, and Lambda

Deep guide: [domain-1-security.md](domain-1-security.md#topic-11-design-secure-access-to-aws-resources)

### Task 1.2: Design Secure Workloads And Applications

Study checklist:

- Secure application configuration and credentials
- AWS service endpoints and private access patterns
- Ports, protocols, and traffic control
- Secure application access patterns
- Cognito, GuardDuty, Macie, WAF, Shield, Secrets Manager, and related security services
- External threat vectors such as DDoS and SQL injection
- VPC security architecture with subnets, route tables, security groups, NACLs, and NAT gateways
- Network segmentation with public and private subnets
- Secure integration between AWS services
- Secure external connectivity with VPN and Direct Connect

Deep guide: [domain-1-security.md](domain-1-security.md#topic-12-design-secure-workloads-and-applications)

### Task 1.3: Determine Appropriate Data Security Controls

Study checklist:

- Data access and governance
- Data recovery
- Data retention and classification
- Encryption and key management
- Compliance-aligned AWS technology choices
- Encryption at rest with KMS and service-native encryption
- Encryption in transit with TLS and ACM
- KMS key policies, grants, and access policy design
- Backups, replication, lifecycle, and protection policies
- Key rotation, secret rotation, and certificate renewal

Deep guide: [domain-1-security.md](domain-1-security.md#topic-13-determine-appropriate-data-security-controls)

## Domain 2: Design Resilient Architectures

Weight: 26%.

### Task 2.1: Design Scalable And Loosely Coupled Architectures

Study checklist:

- API creation and management with API Gateway and REST-style APIs
- Managed services and their use cases, including SQS, Transfer Family, and Secrets Manager
- Caching strategies
- Microservice design, stateless workloads, and stateful workloads
- Event-driven architectures
- Horizontal scaling and vertical scaling
- Edge accelerators and CDN patterns
- Container migration and container orchestration with ECS and EKS
- Load balancing concepts, especially ALB
- Multi-tier architecture
- Queuing, messaging, pub/sub, and workflow orchestration
- Serverless technologies such as Lambda and Fargate
- Storage type characteristics: object, file, and block
- Read replicas and purpose-built service choices

Deep guide: [domain-2-resilience.md](domain-2-resilience.md#topic-21-design-scalable-and-loosely-coupled-architectures)

### Task 2.2: Design Highly Available And/Or Fault-Tolerant Architectures

Study checklist:

- AWS Regions, Availability Zones, Route 53, and global infrastructure
- Managed services and their use cases
- Basic networking concepts, including route tables
- DR strategies: backup and restore, pilot light, warm standby, active-active
- RTO and RPO
- Distributed design patterns
- Failover strategies
- Immutable infrastructure
- Load balancing and proxy concepts such as RDS Proxy
- Service quotas and throttling
- Storage durability, availability, and replication
- Workload visibility with tools such as X-Ray
- Automation strategies and single point of failure mitigation

Deep guide: [domain-2-resilience.md](domain-2-resilience.md#topic-22-design-highly-available-and-fault-tolerant-architectures)

## Domain 3: Design High-Performing Architectures

Weight: 24%.

### Task 3.1: Determine High-Performing And/Or Scalable Storage Solutions

Study checklist:

- Hybrid storage solutions
- Storage services and use cases: S3, EFS, EBS, FSx, Storage Gateway, DataSync
- Object, file, and block storage characteristics
- Storage configurations that meet performance needs
- Storage services that scale for future growth

Deep guide: [domain-3-performance.md](domain-3-performance.md#topic-31-determine-high-performing-andor-scalable-storage-solutions)

### Task 3.2: Design High-Performing And Elastic Compute Solutions

Study checklist:

- Compute service use cases: Batch, EMR, Fargate, Lambda, EC2, ECS, EKS
- Distributed computing with AWS global infrastructure and edge services
- Queuing and pub/sub concepts
- Auto Scaling and scaling capabilities
- Serverless technologies and patterns
- Container orchestration
- Independent scaling through decoupling
- Scaling metrics and scaling conditions
- EC2 instance type and family selection
- Lambda memory and resource sizing

Deep guide: [domain-3-performance.md](domain-3-performance.md#topic-32-design-high-performing-and-elastic-compute-solutions)

### Task 3.3: Determine High-Performing Database Solutions

Study checklist:

- Regions and AZs for database architecture
- Caching services such as ElastiCache
- Read-intensive and write-intensive data access patterns
- Capacity planning, capacity units, instance types, and provisioned IOPS
- Database connections and proxies
- Database engines and migration patterns
- Read replicas and database replication
- Relational, non-relational, in-memory, and serverless database types
- Aurora, RDS, DynamoDB, Redshift, OpenSearch, DocumentDB, Neptune, Keyspaces
- Caching integration and database architecture design

Deep guide: [domain-3-performance.md](domain-3-performance.md#topic-33-determine-high-performing-database-solutions)

### Task 3.4: Determine High-Performing And/Or Scalable Network Architectures

Study checklist:

- Edge networking services: CloudFront and Global Accelerator
- Subnet tiers, routing, and IP addressing
- Load balancing concepts
- VPN, Direct Connect, PrivateLink, Transit Gateway, VPC peering, and VPC endpoints
- Global, hybrid, and multi-tier network topologies
- Scalable network configurations
- Resource placement to meet business requirements
- Load balancing strategy selection

Deep guide: [domain-3-performance.md](domain-3-performance.md#topic-34-determine-high-performing-andor-scalable-network-architectures)

### Task 3.5: Determine High-Performing Data Ingestion And Transformation Solutions

Study checklist:

- Analytics and visualization services: Athena, Lake Formation, QuickSuite, Redshift, OpenSearch
- Data ingestion frequency and pattern selection
- Data transfer services: DataSync, Storage Gateway, Transfer Family, Snow Family
- Data transformation with Glue and EMR
- Secure access to ingestion endpoints
- Sizing and speed requirements
- Streaming services such as Kinesis and MSK
- Data lake design and security
- Streaming architecture design
- Format transformation such as CSV to Parquet

Deep guide: [domain-3-performance.md](domain-3-performance.md#topic-35-determine-high-performing-data-ingestion-and-transformation-solutions)

## Domain 4: Design Cost-Optimized Architectures

Weight: 20%.

### Task 4.1: Design Cost-Optimized Storage Solutions

Study checklist:

- Storage access options such as Requester Pays
- Cost allocation tags and multi-account billing
- Cost Explorer, Budgets, and Cost and Usage Report
- Storage service use cases: S3, S3 Glacier, EBS, EFS, FSx
- Backup strategies
- EBS HDD and SSD volume types
- Data lifecycles and storage tiering
- Hybrid storage options: DataSync, Transfer Family, Storage Gateway
- Storage access patterns
- Cost-effective storage selection, migration, lifecycle, archival, and backup design

Deep guide: [domain-4-cost.md](domain-4-cost.md#topic-41-design-cost-optimized-storage-solutions)

### Task 4.2: Design Cost-Optimized Compute Solutions

Study checklist:

- Cost allocation tags and multi-account billing
- Cost Explorer, Budgets, and Cost and Usage Report
- Regions, AZs, and infrastructure placement
- Spot Instances, Reserved Instances, and Savings Plans
- Edge processing and distributed compute
- Hybrid compute options such as Outposts
- Instance types, families, sizes, and virtualization
- Compute utilization with containers, serverless, and microservices
- Scaling strategies, including Auto Scaling and hibernation
- ALB vs NLB vs Gateway Load Balancer cost and feature fit

Deep guide: [domain-4-cost.md](domain-4-cost.md#topic-42-design-cost-optimized-compute-solutions)

### Task 4.3: Design Cost-Optimized Database Solutions

Study checklist:

- Cost allocation tags and multi-account billing
- Cost Explorer, Budgets, and Cost and Usage Report
- Caching strategies
- Data retention policies
- Database capacity planning
- Database connections and proxies
- Database engines and migration patterns
- Database replication and read replicas
- Relational vs non-relational database services
- Aurora, DynamoDB, RDS, Redshift, ElastiCache, and serverless database options

Deep guide: [domain-4-cost.md](domain-4-cost.md#topic-43-design-cost-optimized-database-solutions)

### Task 4.4: Design Cost-Optimized Network Architectures

Study checklist:

- Cost allocation tags and multi-account billing
- Cost Explorer, Budgets, and Cost and Usage Report
- Load balancing concepts and cost fit
- NAT gateway and NAT instance tradeoffs
- Private lines, dedicated lines, VPNs, and internet connectivity
- Transit Gateway, VPC peering, routing, and topology
- DNS and network services
- NAT gateway placement choices
- Network routes that minimize transfer costs
- CDN, edge caching, throttling, and bandwidth allocation strategies

Deep guide: [domain-4-cost.md](domain-4-cost.md#topic-44-design-cost-optimized-network-architectures)
