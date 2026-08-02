<div align="center">
  <img src="./public/og-image.svg" alt="SAA Prep Platform Banner" width="100%" />
  <br/><br/>
  
  <h1>🛡️ AWS Certified Solutions Architect – Associate (SAA-C03)</h1>
  <p><strong>A high-signal, distraction-free technical reference and tactical drill platform.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Astro-Static_Site-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
    <img src="https://img.shields.io/badge/AWS-SAA--C03-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="AWS SAA-C03" />
    <img src="https://img.shields.io/badge/License-MIT-10B981?style=for-the-badge" alt="License MIT" />
  </p>

  <p>
    <a href="https://atakang7.github.io/saaprep/"><b>Live Platform</b></a> •
    <a href="#the-approach"><b>The Approach</b></a> •
    <a href="#tech-stack"><b>Tech Stack</b></a> •
    <a href="#local-development"><b>Local Dev</b></a>
  </p>
  
  <br/>
</div>

## 🎯 The Approach

This platform is engineered to build your "exam reflex" by focusing strictly on:

1. **Interactive Practice Arena**: Test your knowledge against hundreds of realistic scenario questions with immediate AI-driven explanations.
2. **Service Routing**: Fast, factual breakdowns of AWS core services, highlighting exactly when to choose them, when to avoid them, and common exam trap words.
3. **Architecture Taxonomy**: A curated visual index classifying all SAA-C03 domains, clusters, and services for high-speed concept mapping.

<br/>

<!-- TREE_START -->

### 🗺️ Architecture Taxonomy Tree

- **Guard (Access and Data)**
  - Identity and permissions
    - IAM
    - IAM Identity Center
    - Organizations SCPs
    - Cognito
  - Encryption and secrets
    - KMS
    - CloudHSM
    - Secrets Manager
    - Parameter Store
    - Macie
    - S3 Server-Side Encryption (SSE)
  - Network/application protection
    - WAF
    - Shield
    - Security Groups
    - NACLs
    - Network Firewall
  - Audit, detection, compliance
    - CloudTrail
    - GuardDuty
    - Security Hub
    - Inspector
    - Config
    - AWS X-Ray
    - CloudWatch Logs Insights
- **Connect (Traffic)**
  - VPC foundations
    - VPCs
    - Subnets
    - Route Tables
    - Internet Gateways
    - NAT Gateways
    - NAT Instance
    - Elastic IP (EIP)
  - Private AWS access
    - VPC Endpoints (Gateway, Interface)
    - PrivateLink
  - Load balancing, DNS, edge
    - Route 53
    - CloudFront
    - Global Accelerator
    - ALB
    - NLB
    - GLB
  - Hybrid and multi-VPC networking
    - Site-to-Site VPN
    - Direct Connect
    - Transit Gateway
    - VPC peering
    - AWS VPN CloudHub
    - AWS Resource Access Manager (RAM)
- **Run (Compute)**
  - Compute choice
    - EC2
    - Elastic Beanstalk
    - EC2 Spot Instances
    - EC2 Reserved Instances
    - EC2 Placement Groups
    - AWS CloudFormation
  - Scaling
    - Auto Scaling Groups (ASG)
    - Launch Templates
    - Amazon CloudWatch
    - Elastic Load Balancing (ELB)
  - Serverless
    - Lambda
    - Lambda reserved concurrency
    - Compute Savings Plans
  - Containers and APIs
    - ECS
    - EKS
    - Fargate
    - API Gateway
- **Store (Data)**
  - Storage shape
    - EBS
    - EFS
    - FSx
    - EC2 instance store
  - S3 lifecycle/archive/protection
    - S3 Storage Classes
    - Lifecycle Rules
    - Object Lock
    - S3 Versioning
    - S3 Multipart Upload
    - S3 Reduced Redundancy Storage (RRS)
  - Backup and migration
    - AWS Backup
    - DataSync
    - Snow Family
    - Amazon EBS snapshots
    - AWS Storage Gateway
  - Hybrid storage
    - Storage Gateway
    - AWS Storage Gateway File Gateway
    - AWS Storage Gateway Volume Gateway (cached)
    - AWS Storage Gateway Volume Gateway (stored)
- **Remember and query data (Databases & Analytics)**
  - Relational databases
    - RDS
    - Aurora
    - RDS Multi-AZ
    - RDS Read Replicas
    - RDS Proxy
    - AWS DMS
  - NoSQL
    - DynamoDB
  - Cache
    - ElastiCache
    - DAX
    - Amazon ElastiCache for Memcached
  - Search
    - OpenSearch
  - Analytics and streaming
    - Redshift
    - Athena
    - EMR
    - Kinesis
    - Glue
    - Amazon Data Firehose
- **Decouple and operate (Architecture & Management)**
  - Messaging
    - SQS
    - SNS
    - Amazon SES (Simple Email Service)
  - Events & Workflows
    - EventBridge
    - Step Functions
    - Amazon SWF (Simple Workflow Service)
  - DR and availability
    - Route 53 routing
    - Multi-Region setups
    - Amazon EC2 AMIs (Amazon Machine Images)
    - Elastic Load Balancing (ELB)
    - Amazon RDS
    - Amazon S3
  - Cost and governance
    - Cost Explorer
    - AWS Budgets
    - Organizations
    - AWS Control Tower
    - Compute Savings Plans
    - Consolidated billing (AWS Organizations)

<!-- TREE_END -->

<br/>

## ⚡ Tech Stack

- **[Astro](https://astro.build/)**: Static site generation for extreme performance.
- **Vanilla CSS**: Global theme tokens, scoped styling, and responsive fluid layout.

<br/>

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/atakang7/saaprep.git
   cd saaprep
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

<br/>

##  Design Philosophy

- 🚫 **No generic fluff:** Only verified facts linked directly to official AWS documentation.
- 🚀 **Zero latency:** Static rendering and minimalist payload.
- 🕶️ **Dark-mode native:** Designed for deep work and minimal eye strain.

<br/>

<div align="center">
  <hr>
  <sub>Built for the command-line native. Train the AWS decision reflex.</sub>
</div>
