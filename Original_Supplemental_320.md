# 320 Supplemental AWS SAA-C03 Practice Questions

> Original supplemental questions generated for this study pack. They are not actual AWS exam questions. Validate time-sensitive service details against current AWS documentation.


## Question 1

A retail company is designing a workload on AWS. The solutions architect must serve static website content globally with low latency with the least operational overhead. Which solution should be selected?

A. Amazon EFS mounted in one Availability Zone

B. Amazon CloudFront with an Amazon S3 origin

C. AWS Direct Connect

D. An internet-facing Network Load Balancer


**Answer: B — Amazon CloudFront with an Amazon S3 origin**

**Explanation:** CloudFront caches static objects at edge locations close to users.


## Question 2

A media startup is designing a workload on AWS. The architecture needs to serve static website content globally with low latency while following AWS best practices. Which solution should be selected?

A. Amazon EFS mounted in one Availability Zone

B. AWS Direct Connect

C. An internet-facing Network Load Balancer

D. Amazon CloudFront with an Amazon S3 origin


**Answer: D — Amazon CloudFront with an Amazon S3 origin**

**Explanation:** CloudFront caches static objects at edge locations close to users.


## Question 3

A financial services company is designing a workload on AWS. A new workload must serve static website content globally with low latency in the most appropriate managed way. Which solution should be selected?

A. AWS Direct Connect

B. Amazon EFS mounted in one Availability Zone

C. Amazon CloudFront with an Amazon S3 origin

D. An internet-facing Network Load Balancer


**Answer: C — Amazon CloudFront with an Amazon S3 origin**

**Explanation:** CloudFront caches static objects at edge locations close to users.


## Question 4

A healthcare organization is designing a workload on AWS. The design must serve static website content globally with low latency while meeting the stated requirement. Which solution should be selected?

A. Amazon EFS mounted in one Availability Zone

B. AWS Direct Connect

C. An internet-facing Network Load Balancer

D. Amazon CloudFront with an Amazon S3 origin


**Answer: D — Amazon CloudFront with an Amazon S3 origin**

**Explanation:** CloudFront caches static objects at edge locations close to users.


## Question 5

A media startup is designing a workload on AWS. The architecture needs to store objects that are accessed unpredictably while automatically optimizing storage cost with the least operational overhead. Which solution should be selected?

A. Amazon S3 Intelligent-Tiering

B. Amazon EFS Standard

C. Amazon EBS gp3

D. S3 One Zone-IA


**Answer: A — Amazon S3 Intelligent-Tiering**

**Explanation:** S3 Intelligent-Tiering moves objects between access tiers based on observed access patterns.


## Question 6

A financial services company is designing a workload on AWS. A new workload must store objects that are accessed unpredictably while automatically optimizing storage cost while following AWS best practices. Which solution should be selected?

A. Amazon S3 Intelligent-Tiering

B. Amazon EFS Standard

C. Amazon EBS gp3

D. S3 One Zone-IA


**Answer: A — Amazon S3 Intelligent-Tiering**

**Explanation:** S3 Intelligent-Tiering moves objects between access tiers based on observed access patterns.


## Question 7

A healthcare organization is designing a workload on AWS. The design must store objects that are accessed unpredictably while automatically optimizing storage cost in the most appropriate managed way. Which solution should be selected?

A. S3 One Zone-IA

B. Amazon EFS Standard

C. Amazon S3 Intelligent-Tiering

D. Amazon EBS gp3


**Answer: C — Amazon S3 Intelligent-Tiering**

**Explanation:** S3 Intelligent-Tiering moves objects between access tiers based on observed access patterns.


## Question 8

A global SaaS provider is designing a workload on AWS. The platform team needs to store objects that are accessed unpredictably while automatically optimizing storage cost while meeting the stated requirement. Which solution should be selected?

A. Amazon EBS gp3

B. Amazon EFS Standard

C. Amazon S3 Intelligent-Tiering

D. S3 One Zone-IA


**Answer: C — Amazon S3 Intelligent-Tiering**

**Explanation:** S3 Intelligent-Tiering moves objects between access tiers based on observed access patterns.


## Question 9

A financial services company is designing a workload on AWS. A new workload must retain compliance records so that even administrators cannot delete them during a fixed retention period with the least operational overhead. Which solution should be selected?

A. S3 Object Lock in governance mode without bypass restrictions

B. S3 Object Lock in compliance mode

C. S3 versioning alone

D. S3 lifecycle expiration


**Answer: B — S3 Object Lock in compliance mode**

**Explanation:** Compliance mode prevents deletion or shortening retention even by the root user.


## Question 10

A healthcare organization is designing a workload on AWS. The design must retain compliance records so that even administrators cannot delete them during a fixed retention period while following AWS best practices. Which solution should be selected?

A. S3 Object Lock in governance mode without bypass restrictions

B. S3 versioning alone

C. S3 lifecycle expiration

D. S3 Object Lock in compliance mode


**Answer: D — S3 Object Lock in compliance mode**

**Explanation:** Compliance mode prevents deletion or shortening retention even by the root user.


## Question 11

A global SaaS provider is designing a workload on AWS. The platform team needs to retain compliance records so that even administrators cannot delete them during a fixed retention period in the most appropriate managed way. Which solution should be selected?

A. S3 lifecycle expiration

B. S3 versioning alone

C. S3 Object Lock in governance mode without bypass restrictions

D. S3 Object Lock in compliance mode


**Answer: D — S3 Object Lock in compliance mode**

**Explanation:** Compliance mode prevents deletion or shortening retention even by the root user.


## Question 12

A retail company is designing a workload on AWS. The solutions architect must retain compliance records so that even administrators cannot delete them during a fixed retention period while meeting the stated requirement. Which solution should be selected?

A. S3 versioning alone

B. S3 Object Lock in compliance mode

C. S3 lifecycle expiration

D. S3 Object Lock in governance mode without bypass restrictions


**Answer: B — S3 Object Lock in compliance mode**

**Explanation:** Compliance mode prevents deletion or shortening retention even by the root user.


## Question 13

A healthcare organization is designing a workload on AWS. The design must provide shared POSIX file storage to Linux EC2 instances across multiple Availability Zones with the least operational overhead. Which solution should be selected?

A. Amazon EFS

B. Instance store volumes

C. Amazon EBS

D. Amazon S3 Glacier


**Answer: A — Amazon EFS**

**Explanation:** EFS is a regional managed NFS file system that can be mounted by many instances.


## Question 14

A global SaaS provider is designing a workload on AWS. The platform team needs to provide shared POSIX file storage to Linux EC2 instances across multiple Availability Zones while following AWS best practices. Which solution should be selected?

A. Amazon S3 Glacier

B. Amazon EFS

C. Amazon EBS

D. Instance store volumes


**Answer: B — Amazon EFS**

**Explanation:** EFS is a regional managed NFS file system that can be mounted by many instances.


## Question 15

A retail company is designing a workload on AWS. The solutions architect must provide shared POSIX file storage to Linux EC2 instances across multiple Availability Zones in the most appropriate managed way. Which solution should be selected?

A. Amazon EFS

B. Amazon EBS

C. Amazon S3 Glacier

D. Instance store volumes


**Answer: A — Amazon EFS**

**Explanation:** EFS is a regional managed NFS file system that can be mounted by many instances.


## Question 16

A media startup is designing a workload on AWS. The architecture needs to provide shared POSIX file storage to Linux EC2 instances across multiple Availability Zones while meeting the stated requirement. Which solution should be selected?

A. Amazon S3 Glacier

B. Amazon EBS

C. Instance store volumes

D. Amazon EFS


**Answer: D — Amazon EFS**

**Explanation:** EFS is a regional managed NFS file system that can be mounted by many instances.


## Question 17

A global SaaS provider is designing a workload on AWS. The platform team needs to provide managed Windows file shares while preserving SMB and Active Directory integration with the least operational overhead. Which solution should be selected?

A. Amazon EFS

B. Amazon S3

C. Amazon FSx for Windows File Server

D. Amazon DynamoDB


**Answer: C — Amazon FSx for Windows File Server**

**Explanation:** FSx for Windows provides native SMB and Windows features.


## Question 18

A retail company is designing a workload on AWS. The solutions architect must provide managed Windows file shares while preserving SMB and Active Directory integration while following AWS best practices. Which solution should be selected?

A. Amazon EFS

B. Amazon S3

C. Amazon DynamoDB

D. Amazon FSx for Windows File Server


**Answer: D — Amazon FSx for Windows File Server**

**Explanation:** FSx for Windows provides native SMB and Windows features.


## Question 19

A media startup is designing a workload on AWS. The architecture needs to provide managed Windows file shares while preserving SMB and Active Directory integration in the most appropriate managed way. Which solution should be selected?

A. Amazon EFS

B. Amazon DynamoDB

C. Amazon FSx for Windows File Server

D. Amazon S3


**Answer: C — Amazon FSx for Windows File Server**

**Explanation:** FSx for Windows provides native SMB and Windows features.


## Question 20

A financial services company is designing a workload on AWS. A new workload must provide managed Windows file shares while preserving SMB and Active Directory integration while meeting the stated requirement. Which solution should be selected?

A. Amazon S3

B. Amazon FSx for Windows File Server

C. Amazon EFS

D. Amazon DynamoDB


**Answer: B — Amazon FSx for Windows File Server**

**Explanation:** FSx for Windows provides native SMB and Windows features.


## Question 21

A retail company is designing a workload on AWS. The solutions architect must give a single EC2 instance durable block storage with independently provisioned performance with the least operational overhead. Which solution should be selected?

A. Amazon SQS

B. Amazon EFS

C. Amazon EBS

D. Amazon S3


**Answer: C — Amazon EBS**

**Explanation:** EBS provides persistent block volumes for EC2.


## Question 22

A media startup is designing a workload on AWS. The architecture needs to give a single EC2 instance durable block storage with independently provisioned performance while following AWS best practices. Which solution should be selected?

A. Amazon EBS

B. Amazon EFS

C. Amazon SQS

D. Amazon S3


**Answer: A — Amazon EBS**

**Explanation:** EBS provides persistent block volumes for EC2.


## Question 23

A financial services company is designing a workload on AWS. A new workload must give a single EC2 instance durable block storage with independently provisioned performance in the most appropriate managed way. Which solution should be selected?

A. Amazon S3

B. Amazon EFS

C. Amazon EBS

D. Amazon SQS


**Answer: C — Amazon EBS**

**Explanation:** EBS provides persistent block volumes for EC2.


## Question 24

A healthcare organization is designing a workload on AWS. The design must give a single EC2 instance durable block storage with independently provisioned performance while meeting the stated requirement. Which solution should be selected?

A. Amazon EFS

B. Amazon EBS

C. Amazon SQS

D. Amazon S3


**Answer: B — Amazon EBS**

**Explanation:** EBS provides persistent block volumes for EC2.


## Question 25

A media startup is designing a workload on AWS. The architecture needs to run a stateless web tier that scales automatically across Availability Zones with the least operational overhead. Which solution should be selected?

A. EC2 Auto Scaling behind an Application Load Balancer

B. A single NAT gateway

C. Amazon Route 53 Resolver only

D. One large EC2 instance with an Elastic IP


**Answer: A — EC2 Auto Scaling behind an Application Load Balancer**

**Explanation:** An ALB distributes HTTP traffic while Auto Scaling adjusts instance capacity.


## Question 26

A financial services company is designing a workload on AWS. A new workload must run a stateless web tier that scales automatically across Availability Zones while following AWS best practices. Which solution should be selected?

A. One large EC2 instance with an Elastic IP

B. Amazon Route 53 Resolver only

C. EC2 Auto Scaling behind an Application Load Balancer

D. A single NAT gateway


**Answer: C — EC2 Auto Scaling behind an Application Load Balancer**

**Explanation:** An ALB distributes HTTP traffic while Auto Scaling adjusts instance capacity.


## Question 27

A healthcare organization is designing a workload on AWS. The design must run a stateless web tier that scales automatically across Availability Zones in the most appropriate managed way. Which solution should be selected?

A. A single NAT gateway

B. EC2 Auto Scaling behind an Application Load Balancer

C. Amazon Route 53 Resolver only

D. One large EC2 instance with an Elastic IP


**Answer: B — EC2 Auto Scaling behind an Application Load Balancer**

**Explanation:** An ALB distributes HTTP traffic while Auto Scaling adjusts instance capacity.


## Question 28

A global SaaS provider is designing a workload on AWS. The platform team needs to run a stateless web tier that scales automatically across Availability Zones while meeting the stated requirement. Which solution should be selected?

A. Amazon Route 53 Resolver only

B. EC2 Auto Scaling behind an Application Load Balancer

C. A single NAT gateway

D. One large EC2 instance with an Elastic IP


**Answer: B — EC2 Auto Scaling behind an Application Load Balancer**

**Explanation:** An ALB distributes HTTP traffic while Auto Scaling adjusts instance capacity.


## Question 29

A financial services company is designing a workload on AWS. A new workload must route HTTP requests to different microservices based on URL path with the least operational overhead. Which solution should be selected?

A. Gateway Load Balancer

B. AWS Direct Connect gateway

C. Network Load Balancer

D. Application Load Balancer


**Answer: D — Application Load Balancer**

**Explanation:** ALB supports Layer 7 path- and host-based routing.


## Question 30

A healthcare organization is designing a workload on AWS. The design must route HTTP requests to different microservices based on URL path while following AWS best practices. Which solution should be selected?

A. Application Load Balancer

B. Network Load Balancer

C. AWS Direct Connect gateway

D. Gateway Load Balancer


**Answer: A — Application Load Balancer**

**Explanation:** ALB supports Layer 7 path- and host-based routing.


## Question 31

A global SaaS provider is designing a workload on AWS. The platform team needs to route HTTP requests to different microservices based on URL path in the most appropriate managed way. Which solution should be selected?

A. Network Load Balancer

B. Gateway Load Balancer

C. Application Load Balancer

D. AWS Direct Connect gateway


**Answer: C — Application Load Balancer**

**Explanation:** ALB supports Layer 7 path- and host-based routing.


## Question 32

A retail company is designing a workload on AWS. The solutions architect must route HTTP requests to different microservices based on URL path while meeting the stated requirement. Which solution should be selected?

A. Application Load Balancer

B. Gateway Load Balancer

C. AWS Direct Connect gateway

D. Network Load Balancer


**Answer: A — Application Load Balancer**

**Explanation:** ALB supports Layer 7 path- and host-based routing.


## Question 33

A healthcare organization is designing a workload on AWS. The design must support millions of TCP connections with ultra-low latency and static IP addresses with the least operational overhead. Which solution should be selected?

A. Network Load Balancer

B. Amazon API Gateway REST API

C. Classic Load Balancer

D. Application Load Balancer


**Answer: A — Network Load Balancer**

**Explanation:** NLB operates at Layer 4 and supports high-throughput TCP/UDP traffic and static IPs.


## Question 34

A global SaaS provider is designing a workload on AWS. The platform team needs to support millions of TCP connections with ultra-low latency and static IP addresses while following AWS best practices. Which solution should be selected?

A. Network Load Balancer

B. Classic Load Balancer

C. Amazon API Gateway REST API

D. Application Load Balancer


**Answer: A — Network Load Balancer**

**Explanation:** NLB operates at Layer 4 and supports high-throughput TCP/UDP traffic and static IPs.


## Question 35

A retail company is designing a workload on AWS. The solutions architect must support millions of TCP connections with ultra-low latency and static IP addresses in the most appropriate managed way. Which solution should be selected?

A. Network Load Balancer

B. Application Load Balancer

C. Amazon API Gateway REST API

D. Classic Load Balancer


**Answer: A — Network Load Balancer**

**Explanation:** NLB operates at Layer 4 and supports high-throughput TCP/UDP traffic and static IPs.


## Question 36

A media startup is designing a workload on AWS. The architecture needs to support millions of TCP connections with ultra-low latency and static IP addresses while meeting the stated requirement. Which solution should be selected?

A. Classic Load Balancer

B. Application Load Balancer

C. Amazon API Gateway REST API

D. Network Load Balancer


**Answer: D — Network Load Balancer**

**Explanation:** NLB operates at Layer 4 and supports high-throughput TCP/UDP traffic and static IPs.


## Question 37

A global SaaS provider is designing a workload on AWS. The platform team needs to insert third-party virtual firewalls transparently into network traffic flows with the least operational overhead. Which solution should be selected?

A. Gateway Load Balancer

B. Application Load Balancer

C. Amazon CloudFront

D. AWS Global Accelerator only


**Answer: A — Gateway Load Balancer**

**Explanation:** GWLB is designed to deploy and scale virtual network appliances.


## Question 38

A retail company is designing a workload on AWS. The solutions architect must insert third-party virtual firewalls transparently into network traffic flows while following AWS best practices. Which solution should be selected?

A. Gateway Load Balancer

B. AWS Global Accelerator only

C. Application Load Balancer

D. Amazon CloudFront


**Answer: A — Gateway Load Balancer**

**Explanation:** GWLB is designed to deploy and scale virtual network appliances.


## Question 39

A media startup is designing a workload on AWS. The architecture needs to insert third-party virtual firewalls transparently into network traffic flows in the most appropriate managed way. Which solution should be selected?

A. Application Load Balancer

B. Gateway Load Balancer

C. Amazon CloudFront

D. AWS Global Accelerator only


**Answer: B — Gateway Load Balancer**

**Explanation:** GWLB is designed to deploy and scale virtual network appliances.


## Question 40

A financial services company is designing a workload on AWS. A new workload must insert third-party virtual firewalls transparently into network traffic flows while meeting the stated requirement. Which solution should be selected?

A. Application Load Balancer

B. Amazon CloudFront

C. AWS Global Accelerator only

D. Gateway Load Balancer


**Answer: D — Gateway Load Balancer**

**Explanation:** GWLB is designed to deploy and scale virtual network appliances.


## Question 41

A retail company is designing a workload on AWS. The solutions architect must run short event-driven code without managing servers with the least operational overhead. Which solution should be selected?

A. AWS Storage Gateway

B. Amazon RDS

C. Amazon EC2 Dedicated Hosts

D. AWS Lambda


**Answer: D — AWS Lambda**

**Explanation:** Lambda runs functions on demand and manages the underlying compute infrastructure.


## Question 42

A media startup is designing a workload on AWS. The architecture needs to run short event-driven code without managing servers while following AWS best practices. Which solution should be selected?

A. AWS Lambda

B. Amazon EC2 Dedicated Hosts

C. AWS Storage Gateway

D. Amazon RDS


**Answer: A — AWS Lambda**

**Explanation:** Lambda runs functions on demand and manages the underlying compute infrastructure.


## Question 43

A financial services company is designing a workload on AWS. A new workload must run short event-driven code without managing servers in the most appropriate managed way. Which solution should be selected?

A. AWS Lambda

B. Amazon RDS

C. Amazon EC2 Dedicated Hosts

D. AWS Storage Gateway


**Answer: A — AWS Lambda**

**Explanation:** Lambda runs functions on demand and manages the underlying compute infrastructure.


## Question 44

A healthcare organization is designing a workload on AWS. The design must run short event-driven code without managing servers while meeting the stated requirement. Which solution should be selected?

A. AWS Storage Gateway

B. Amazon RDS

C. AWS Lambda

D. Amazon EC2 Dedicated Hosts


**Answer: C — AWS Lambda**

**Explanation:** Lambda runs functions on demand and manages the underlying compute infrastructure.


## Question 45

A media startup is designing a workload on AWS. The architecture needs to prevent a Lambda function from overwhelming a downstream database with the least operational overhead. Which solution should be selected?

A. Configure reserved concurrency for the function

B. Increase the function timeout

C. Enable Route 53 latency routing

D. Use S3 Transfer Acceleration


**Answer: A — Configure reserved concurrency for the function**

**Explanation:** Reserved concurrency caps simultaneous executions and protects downstream systems.


## Question 46

A financial services company is designing a workload on AWS. A new workload must prevent a Lambda function from overwhelming a downstream database while following AWS best practices. Which solution should be selected?

A. Use S3 Transfer Acceleration

B. Increase the function timeout

C. Configure reserved concurrency for the function

D. Enable Route 53 latency routing


**Answer: C — Configure reserved concurrency for the function**

**Explanation:** Reserved concurrency caps simultaneous executions and protects downstream systems.


## Question 47

A healthcare organization is designing a workload on AWS. The design must prevent a Lambda function from overwhelming a downstream database in the most appropriate managed way. Which solution should be selected?

A. Configure reserved concurrency for the function

B. Enable Route 53 latency routing

C. Use S3 Transfer Acceleration

D. Increase the function timeout


**Answer: A — Configure reserved concurrency for the function**

**Explanation:** Reserved concurrency caps simultaneous executions and protects downstream systems.


## Question 48

A global SaaS provider is designing a workload on AWS. The platform team needs to prevent a Lambda function from overwhelming a downstream database while meeting the stated requirement. Which solution should be selected?

A. Configure reserved concurrency for the function

B. Increase the function timeout

C. Enable Route 53 latency routing

D. Use S3 Transfer Acceleration


**Answer: A — Configure reserved concurrency for the function**

**Explanation:** Reserved concurrency caps simultaneous executions and protects downstream systems.


## Question 49

A financial services company is designing a workload on AWS. A new workload must eliminate repeated database connections from highly concurrent Lambda functions with the least operational overhead. Which solution should be selected?

A. Amazon RDS Proxy

B. Amazon Route 53 Resolver

C. AWS WAF

D. Amazon ElastiCache for Memcached only


**Answer: A — Amazon RDS Proxy**

**Explanation:** RDS Proxy pools and reuses database connections.


## Question 50

A healthcare organization is designing a workload on AWS. The design must eliminate repeated database connections from highly concurrent Lambda functions while following AWS best practices. Which solution should be selected?

A. Amazon Route 53 Resolver

B. Amazon RDS Proxy

C. AWS WAF

D. Amazon ElastiCache for Memcached only


**Answer: B — Amazon RDS Proxy**

**Explanation:** RDS Proxy pools and reuses database connections.


## Question 51

A global SaaS provider is designing a workload on AWS. The platform team needs to eliminate repeated database connections from highly concurrent Lambda functions in the most appropriate managed way. Which solution should be selected?

A. Amazon Route 53 Resolver

B. Amazon ElastiCache for Memcached only

C. Amazon RDS Proxy

D. AWS WAF


**Answer: C — Amazon RDS Proxy**

**Explanation:** RDS Proxy pools and reuses database connections.


## Question 52

A retail company is designing a workload on AWS. The solutions architect must eliminate repeated database connections from highly concurrent Lambda functions while meeting the stated requirement. Which solution should be selected?

A. Amazon Route 53 Resolver

B. Amazon RDS Proxy

C. AWS WAF

D. Amazon ElastiCache for Memcached only


**Answer: B — Amazon RDS Proxy**

**Explanation:** RDS Proxy pools and reuses database connections.


## Question 53

A healthcare organization is designing a workload on AWS. The design must run containers without provisioning or managing EC2 worker nodes with the least operational overhead. Which solution should be selected?

A. Amazon Lightsail distributions

B. EC2 Dedicated Hosts

C. AWS Fargate

D. AWS Lambda layers


**Answer: C — AWS Fargate**

**Explanation:** Fargate provides serverless compute for ECS and EKS tasks.


## Question 54

A global SaaS provider is designing a workload on AWS. The platform team needs to run containers without provisioning or managing EC2 worker nodes while following AWS best practices. Which solution should be selected?

A. AWS Fargate

B. EC2 Dedicated Hosts

C. Amazon Lightsail distributions

D. AWS Lambda layers


**Answer: A — AWS Fargate**

**Explanation:** Fargate provides serverless compute for ECS and EKS tasks.


## Question 55

A retail company is designing a workload on AWS. The solutions architect must run containers without provisioning or managing EC2 worker nodes in the most appropriate managed way. Which solution should be selected?

A. AWS Fargate

B. EC2 Dedicated Hosts

C. Amazon Lightsail distributions

D. AWS Lambda layers


**Answer: A — AWS Fargate**

**Explanation:** Fargate provides serverless compute for ECS and EKS tasks.


## Question 56

A media startup is designing a workload on AWS. The architecture needs to run containers without provisioning or managing EC2 worker nodes while meeting the stated requirement. Which solution should be selected?

A. Amazon Lightsail distributions

B. AWS Fargate

C. AWS Lambda layers

D. EC2 Dedicated Hosts


**Answer: B — AWS Fargate**

**Explanation:** Fargate provides serverless compute for ECS and EKS tasks.


## Question 57

A global SaaS provider is designing a workload on AWS. The platform team needs to run Kubernetes with an AWS-managed control plane with the least operational overhead. Which solution should be selected?

A. AWS Batch

B. Amazon EKS

C. Amazon Elastic Beanstalk only

D. Amazon ECS


**Answer: B — Amazon EKS**

**Explanation:** EKS provides a managed Kubernetes control plane.


## Question 58

A retail company is designing a workload on AWS. The solutions architect must run Kubernetes with an AWS-managed control plane while following AWS best practices. Which solution should be selected?

A. Amazon EKS

B. Amazon Elastic Beanstalk only

C. Amazon ECS

D. AWS Batch


**Answer: A — Amazon EKS**

**Explanation:** EKS provides a managed Kubernetes control plane.


## Question 59

A media startup is designing a workload on AWS. The architecture needs to run Kubernetes with an AWS-managed control plane in the most appropriate managed way. Which solution should be selected?

A. Amazon Elastic Beanstalk only

B. Amazon ECS

C. Amazon EKS

D. AWS Batch


**Answer: C — Amazon EKS**

**Explanation:** EKS provides a managed Kubernetes control plane.


## Question 60

A financial services company is designing a workload on AWS. A new workload must run Kubernetes with an AWS-managed control plane while meeting the stated requirement. Which solution should be selected?

A. Amazon Elastic Beanstalk only

B. Amazon ECS

C. AWS Batch

D. Amazon EKS


**Answer: D — Amazon EKS**

**Explanation:** EKS provides a managed Kubernetes control plane.


## Question 61

A retail company is designing a workload on AWS. The solutions architect must run a managed AWS-native container orchestrator without requiring Kubernetes with the least operational overhead. Which solution should be selected?

A. Amazon EKS

B. AWS Glue

C. Amazon ECS

D. Amazon EMR


**Answer: C — Amazon ECS**

**Explanation:** ECS is AWS's native container orchestration service.


## Question 62

A media startup is designing a workload on AWS. The architecture needs to run a managed AWS-native container orchestrator without requiring Kubernetes while following AWS best practices. Which solution should be selected?

A. AWS Glue

B. Amazon ECS

C. Amazon EKS

D. Amazon EMR


**Answer: B — Amazon ECS**

**Explanation:** ECS is AWS's native container orchestration service.


## Question 63

A financial services company is designing a workload on AWS. A new workload must run a managed AWS-native container orchestrator without requiring Kubernetes in the most appropriate managed way. Which solution should be selected?

A. AWS Glue

B. Amazon EMR

C. Amazon EKS

D. Amazon ECS


**Answer: D — Amazon ECS**

**Explanation:** ECS is AWS's native container orchestration service.


## Question 64

A healthcare organization is designing a workload on AWS. The design must run a managed AWS-native container orchestrator without requiring Kubernetes while meeting the stated requirement. Which solution should be selected?

A. Amazon EKS

B. Amazon ECS

C. AWS Glue

D. Amazon EMR


**Answer: B — Amazon ECS**

**Explanation:** ECS is AWS's native container orchestration service.


## Question 65

A media startup is designing a workload on AWS. The architecture needs to decouple application components with durable message buffering with the least operational overhead. Which solution should be selected?

A. Amazon SNS

B. AWS CloudFormation

C. Amazon Route 53

D. Amazon SQS


**Answer: D — Amazon SQS**

**Explanation:** SQS stores messages durably until consumers process them.


## Question 66

A financial services company is designing a workload on AWS. A new workload must decouple application components with durable message buffering while following AWS best practices. Which solution should be selected?

A. Amazon SQS

B. AWS CloudFormation

C. Amazon Route 53

D. Amazon SNS


**Answer: A — Amazon SQS**

**Explanation:** SQS stores messages durably until consumers process them.


## Question 67

A healthcare organization is designing a workload on AWS. The design must decouple application components with durable message buffering in the most appropriate managed way. Which solution should be selected?

A. Amazon SNS

B. AWS CloudFormation

C. Amazon Route 53

D. Amazon SQS


**Answer: D — Amazon SQS**

**Explanation:** SQS stores messages durably until consumers process them.


## Question 68

A global SaaS provider is designing a workload on AWS. The platform team needs to decouple application components with durable message buffering while meeting the stated requirement. Which solution should be selected?

A. Amazon SQS

B. AWS CloudFormation

C. Amazon SNS

D. Amazon Route 53


**Answer: A — Amazon SQS**

**Explanation:** SQS stores messages durably until consumers process them.


## Question 69

A financial services company is designing a workload on AWS. A new workload must send each published event to multiple independent subscribers with the least operational overhead. Which solution should be selected?

A. Amazon SNS

B. Amazon EBS

C. Amazon SQS standard queue only

D. AWS Direct Connect


**Answer: A — Amazon SNS**

**Explanation:** SNS implements publish/subscribe fanout to multiple endpoints.


## Question 70

A healthcare organization is designing a workload on AWS. The design must send each published event to multiple independent subscribers while following AWS best practices. Which solution should be selected?

A. Amazon SNS

B. Amazon SQS standard queue only

C. Amazon EBS

D. AWS Direct Connect


**Answer: A — Amazon SNS**

**Explanation:** SNS implements publish/subscribe fanout to multiple endpoints.


## Question 71

A global SaaS provider is designing a workload on AWS. The platform team needs to send each published event to multiple independent subscribers in the most appropriate managed way. Which solution should be selected?

A. Amazon SNS

B. AWS Direct Connect

C. Amazon EBS

D. Amazon SQS standard queue only


**Answer: A — Amazon SNS**

**Explanation:** SNS implements publish/subscribe fanout to multiple endpoints.


## Question 72

A retail company is designing a workload on AWS. The solutions architect must send each published event to multiple independent subscribers while meeting the stated requirement. Which solution should be selected?

A. AWS Direct Connect

B. Amazon SNS

C. Amazon EBS

D. Amazon SQS standard queue only


**Answer: B — Amazon SNS**

**Explanation:** SNS implements publish/subscribe fanout to multiple endpoints.


## Question 73

A healthcare organization is designing a workload on AWS. The design must preserve message order and prevent duplicate processing in a queue with the least operational overhead. Which solution should be selected?

A. Amazon SNS standard topic

B. Amazon SQS standard queue

C. Amazon Kinesis Data Firehose

D. Amazon SQS FIFO queue


**Answer: D — Amazon SQS FIFO queue**

**Explanation:** FIFO queues provide ordered processing and exactly-once processing semantics within supported constraints.


## Question 74

A global SaaS provider is designing a workload on AWS. The platform team needs to preserve message order and prevent duplicate processing in a queue while following AWS best practices. Which solution should be selected?

A. Amazon SQS FIFO queue

B. Amazon SQS standard queue

C. Amazon Kinesis Data Firehose

D. Amazon SNS standard topic


**Answer: A — Amazon SQS FIFO queue**

**Explanation:** FIFO queues provide ordered processing and exactly-once processing semantics within supported constraints.


## Question 75

A retail company is designing a workload on AWS. The solutions architect must preserve message order and prevent duplicate processing in a queue in the most appropriate managed way. Which solution should be selected?

A. Amazon SNS standard topic

B. Amazon Kinesis Data Firehose

C. Amazon SQS standard queue

D. Amazon SQS FIFO queue


**Answer: D — Amazon SQS FIFO queue**

**Explanation:** FIFO queues provide ordered processing and exactly-once processing semantics within supported constraints.


## Question 76

A media startup is designing a workload on AWS. The architecture needs to preserve message order and prevent duplicate processing in a queue while meeting the stated requirement. Which solution should be selected?

A. Amazon SQS standard queue

B. Amazon SNS standard topic

C. Amazon SQS FIFO queue

D. Amazon Kinesis Data Firehose


**Answer: C — Amazon SQS FIFO queue**

**Explanation:** FIFO queues provide ordered processing and exactly-once processing semantics within supported constraints.


## Question 77

A global SaaS provider is designing a workload on AWS. The platform team needs to route events from many AWS services and SaaS applications using content-based rules with the least operational overhead. Which solution should be selected?

A. Amazon EventBridge

B. Amazon Route 53 health checks

C. Amazon EBS

D. AWS Storage Gateway


**Answer: A — Amazon EventBridge**

**Explanation:** EventBridge is a managed event bus with rule-based routing.


## Question 78

A retail company is designing a workload on AWS. The solutions architect must route events from many AWS services and SaaS applications using content-based rules while following AWS best practices. Which solution should be selected?

A. Amazon Route 53 health checks

B. Amazon EBS

C. AWS Storage Gateway

D. Amazon EventBridge


**Answer: D — Amazon EventBridge**

**Explanation:** EventBridge is a managed event bus with rule-based routing.


## Question 79

A media startup is designing a workload on AWS. The architecture needs to route events from many AWS services and SaaS applications using content-based rules in the most appropriate managed way. Which solution should be selected?

A. Amazon EBS

B. Amazon EventBridge

C. Amazon Route 53 health checks

D. AWS Storage Gateway


**Answer: B — Amazon EventBridge**

**Explanation:** EventBridge is a managed event bus with rule-based routing.


## Question 80

A financial services company is designing a workload on AWS. A new workload must route events from many AWS services and SaaS applications using content-based rules while meeting the stated requirement. Which solution should be selected?

A. Amazon EventBridge

B. Amazon Route 53 health checks

C. AWS Storage Gateway

D. Amazon EBS


**Answer: A — Amazon EventBridge**

**Explanation:** EventBridge is a managed event bus with rule-based routing.


## Question 81

A retail company is designing a workload on AWS. The solutions architect must coordinate a multi-step serverless workflow with retries and branching with the least operational overhead. Which solution should be selected?

A. Amazon CloudFront

B. AWS Step Functions

C. Amazon S3 Batch Operations

D. AWS Artifact


**Answer: B — AWS Step Functions**

**Explanation:** Step Functions orchestrates distributed workflows and provides state, retries, and branching.


## Question 82

A media startup is designing a workload on AWS. The architecture needs to coordinate a multi-step serverless workflow with retries and branching while following AWS best practices. Which solution should be selected?

A. AWS Artifact

B. Amazon CloudFront

C. Amazon S3 Batch Operations

D. AWS Step Functions


**Answer: D — AWS Step Functions**

**Explanation:** Step Functions orchestrates distributed workflows and provides state, retries, and branching.


## Question 83

A financial services company is designing a workload on AWS. A new workload must coordinate a multi-step serverless workflow with retries and branching in the most appropriate managed way. Which solution should be selected?

A. AWS Artifact

B. AWS Step Functions

C. Amazon S3 Batch Operations

D. Amazon CloudFront


**Answer: B — AWS Step Functions**

**Explanation:** Step Functions orchestrates distributed workflows and provides state, retries, and branching.


## Question 84

A healthcare organization is designing a workload on AWS. The design must coordinate a multi-step serverless workflow with retries and branching while meeting the stated requirement. Which solution should be selected?

A. AWS Artifact

B. Amazon CloudFront

C. Amazon S3 Batch Operations

D. AWS Step Functions


**Answer: D — AWS Step Functions**

**Explanation:** Step Functions orchestrates distributed workflows and provides state, retries, and branching.


## Question 85

A media startup is designing a workload on AWS. The architecture needs to ingest a high-volume ordered stream that multiple consumers can read independently with the least operational overhead. Which solution should be selected?

A. Amazon SNS

B. Amazon Kinesis Data Streams

C. Amazon EFS

D. Amazon SQS FIFO


**Answer: B — Amazon Kinesis Data Streams**

**Explanation:** Kinesis Data Streams retains ordered records in shards for multiple consumers.


## Question 86

A financial services company is designing a workload on AWS. A new workload must ingest a high-volume ordered stream that multiple consumers can read independently while following AWS best practices. Which solution should be selected?

A. Amazon SQS FIFO

B. Amazon Kinesis Data Streams

C. Amazon SNS

D. Amazon EFS


**Answer: B — Amazon Kinesis Data Streams**

**Explanation:** Kinesis Data Streams retains ordered records in shards for multiple consumers.


## Question 87

A healthcare organization is designing a workload on AWS. The design must ingest a high-volume ordered stream that multiple consumers can read independently in the most appropriate managed way. Which solution should be selected?

A. Amazon SQS FIFO

B. Amazon Kinesis Data Streams

C. Amazon SNS

D. Amazon EFS


**Answer: B — Amazon Kinesis Data Streams**

**Explanation:** Kinesis Data Streams retains ordered records in shards for multiple consumers.


## Question 88

A global SaaS provider is designing a workload on AWS. The platform team needs to ingest a high-volume ordered stream that multiple consumers can read independently while meeting the stated requirement. Which solution should be selected?

A. Amazon Kinesis Data Streams

B. Amazon SQS FIFO

C. Amazon EFS

D. Amazon SNS


**Answer: A — Amazon Kinesis Data Streams**

**Explanation:** Kinesis Data Streams retains ordered records in shards for multiple consumers.


## Question 89

A financial services company is designing a workload on AWS. A new workload must deliver streaming data directly to S3 with minimal administration with the least operational overhead. Which solution should be selected?

A. Amazon EC2 Auto Scaling

B. AWS CloudTrail

C. Amazon Data Firehose

D. Amazon Route 53


**Answer: C — Amazon Data Firehose**

**Explanation:** Data Firehose buffers, transforms optionally, and delivers streaming records to destinations such as S3.


## Question 90

A healthcare organization is designing a workload on AWS. The design must deliver streaming data directly to S3 with minimal administration while following AWS best practices. Which solution should be selected?

A. Amazon Route 53

B. AWS CloudTrail

C. Amazon Data Firehose

D. Amazon EC2 Auto Scaling


**Answer: C — Amazon Data Firehose**

**Explanation:** Data Firehose buffers, transforms optionally, and delivers streaming records to destinations such as S3.


## Question 91

A global SaaS provider is designing a workload on AWS. The platform team needs to deliver streaming data directly to S3 with minimal administration in the most appropriate managed way. Which solution should be selected?

A. AWS CloudTrail

B. Amazon Data Firehose

C. Amazon EC2 Auto Scaling

D. Amazon Route 53


**Answer: B — Amazon Data Firehose**

**Explanation:** Data Firehose buffers, transforms optionally, and delivers streaming records to destinations such as S3.


## Question 92

A retail company is designing a workload on AWS. The solutions architect must deliver streaming data directly to S3 with minimal administration while meeting the stated requirement. Which solution should be selected?

A. Amazon Route 53

B. Amazon Data Firehose

C. Amazon EC2 Auto Scaling

D. AWS CloudTrail


**Answer: B — Amazon Data Firehose**

**Explanation:** Data Firehose buffers, transforms optionally, and delivers streaming records to destinations such as S3.


## Question 93

A healthcare organization is designing a workload on AWS. The design must allow an EC2 workload to access S3 without storing long-term credentials with the least operational overhead. Which solution should be selected?

A. Store an IAM user's access key in user data

B. Use the root access key

C. Attach an IAM role to the EC2 instance

D. Make the bucket public


**Answer: C — Attach an IAM role to the EC2 instance**

**Explanation:** Instance roles provide automatically rotated temporary credentials.


## Question 94

A global SaaS provider is designing a workload on AWS. The platform team needs to allow an EC2 workload to access S3 without storing long-term credentials while following AWS best practices. Which solution should be selected?

A. Make the bucket public

B. Store an IAM user's access key in user data

C. Use the root access key

D. Attach an IAM role to the EC2 instance


**Answer: D — Attach an IAM role to the EC2 instance**

**Explanation:** Instance roles provide automatically rotated temporary credentials.


## Question 95

A retail company is designing a workload on AWS. The solutions architect must allow an EC2 workload to access S3 without storing long-term credentials in the most appropriate managed way. Which solution should be selected?

A. Make the bucket public

B. Attach an IAM role to the EC2 instance

C. Use the root access key

D. Store an IAM user's access key in user data


**Answer: B — Attach an IAM role to the EC2 instance**

**Explanation:** Instance roles provide automatically rotated temporary credentials.


## Question 96

A media startup is designing a workload on AWS. The architecture needs to allow an EC2 workload to access S3 without storing long-term credentials while meeting the stated requirement. Which solution should be selected?

A. Store an IAM user's access key in user data

B. Attach an IAM role to the EC2 instance

C. Use the root access key

D. Make the bucket public


**Answer: B — Attach an IAM role to the EC2 instance**

**Explanation:** Instance roles provide automatically rotated temporary credentials.


## Question 97

A global SaaS provider is designing a workload on AWS. The platform team needs to grant temporary cross-account access to a workload with the least operational overhead. Which solution should be selected?

A. Use an IAM role and AWS STS AssumeRole

B. Place credentials in an AMI

C. Share the root password

D. Create identical IAM users in every account


**Answer: A — Use an IAM role and AWS STS AssumeRole**

**Explanation:** STS issues temporary credentials when a trusted principal assumes a role.


## Question 98

A retail company is designing a workload on AWS. The solutions architect must grant temporary cross-account access to a workload while following AWS best practices. Which solution should be selected?

A. Use an IAM role and AWS STS AssumeRole

B. Place credentials in an AMI

C. Share the root password

D. Create identical IAM users in every account


**Answer: A — Use an IAM role and AWS STS AssumeRole**

**Explanation:** STS issues temporary credentials when a trusted principal assumes a role.


## Question 99

A media startup is designing a workload on AWS. The architecture needs to grant temporary cross-account access to a workload in the most appropriate managed way. Which solution should be selected?

A. Share the root password

B. Create identical IAM users in every account

C. Use an IAM role and AWS STS AssumeRole

D. Place credentials in an AMI


**Answer: C — Use an IAM role and AWS STS AssumeRole**

**Explanation:** STS issues temporary credentials when a trusted principal assumes a role.


## Question 100

A financial services company is designing a workload on AWS. A new workload must grant temporary cross-account access to a workload while meeting the stated requirement. Which solution should be selected?

A. Create identical IAM users in every account

B. Share the root password

C. Use an IAM role and AWS STS AssumeRole

D. Place credentials in an AMI


**Answer: C — Use an IAM role and AWS STS AssumeRole**

**Explanation:** STS issues temporary credentials when a trusted principal assumes a role.


## Question 101

A retail company is designing a workload on AWS. The solutions architect must set maximum permission boundaries across accounts in an AWS Organization with the least operational overhead. Which solution should be selected?

A. Service control policies (SCPs)

B. Route 53 resolver rules

C. S3 lifecycle policies

D. Security groups


**Answer: A — Service control policies (SCPs)**

**Explanation:** SCPs define the maximum permissions available to principals in member accounts.


## Question 102

A media startup is designing a workload on AWS. The architecture needs to set maximum permission boundaries across accounts in an AWS Organization while following AWS best practices. Which solution should be selected?

A. S3 lifecycle policies

B. Security groups

C. Service control policies (SCPs)

D. Route 53 resolver rules


**Answer: C — Service control policies (SCPs)**

**Explanation:** SCPs define the maximum permissions available to principals in member accounts.


## Question 103

A financial services company is designing a workload on AWS. A new workload must set maximum permission boundaries across accounts in an AWS Organization in the most appropriate managed way. Which solution should be selected?

A. S3 lifecycle policies

B. Route 53 resolver rules

C. Service control policies (SCPs)

D. Security groups


**Answer: C — Service control policies (SCPs)**

**Explanation:** SCPs define the maximum permissions available to principals in member accounts.


## Question 104

A healthcare organization is designing a workload on AWS. The design must set maximum permission boundaries across accounts in an AWS Organization while meeting the stated requirement. Which solution should be selected?

A. Route 53 resolver rules

B. S3 lifecycle policies

C. Service control policies (SCPs)

D. Security groups


**Answer: C — Service control policies (SCPs)**

**Explanation:** SCPs define the maximum permissions available to principals in member accounts.


## Question 105

A media startup is designing a workload on AWS. The architecture needs to centrally provision and govern a multi-account AWS environment using landing-zone best practices with the least operational overhead. Which solution should be selected?

A. AWS Control Tower

B. Amazon Inspector

C. AWS Systems Manager Patch Manager

D. AWS App Runner


**Answer: A — AWS Control Tower**

**Explanation:** Control Tower automates account setup, guardrails, and governance.


## Question 106

A financial services company is designing a workload on AWS. A new workload must centrally provision and govern a multi-account AWS environment using landing-zone best practices while following AWS best practices. Which solution should be selected?

A. AWS App Runner

B. Amazon Inspector

C. AWS Systems Manager Patch Manager

D. AWS Control Tower


**Answer: D — AWS Control Tower**

**Explanation:** Control Tower automates account setup, guardrails, and governance.


## Question 107

A healthcare organization is designing a workload on AWS. The design must centrally provision and govern a multi-account AWS environment using landing-zone best practices in the most appropriate managed way. Which solution should be selected?

A. AWS Control Tower

B. AWS App Runner

C. AWS Systems Manager Patch Manager

D. Amazon Inspector


**Answer: A — AWS Control Tower**

**Explanation:** Control Tower automates account setup, guardrails, and governance.


## Question 108

A global SaaS provider is designing a workload on AWS. The platform team needs to centrally provision and govern a multi-account AWS environment using landing-zone best practices while meeting the stated requirement. Which solution should be selected?

A. AWS Systems Manager Patch Manager

B. Amazon Inspector

C. AWS App Runner

D. AWS Control Tower


**Answer: D — AWS Control Tower**

**Explanation:** Control Tower automates account setup, guardrails, and governance.


## Question 109

A financial services company is designing a workload on AWS. A new workload must encrypt data with customer-controlled keys and audit key usage with the least operational overhead. Which solution should be selected?

A. AWS Key Management Service (AWS KMS)

B. AWS Shield Standard

C. Amazon Cognito

D. AWS Budgets


**Answer: A — AWS Key Management Service (AWS KMS)**

**Explanation:** KMS creates and controls encryption keys and integrates with CloudTrail.


## Question 110

A healthcare organization is designing a workload on AWS. The design must encrypt data with customer-controlled keys and audit key usage while following AWS best practices. Which solution should be selected?

A. AWS Shield Standard

B. Amazon Cognito

C. AWS Budgets

D. AWS Key Management Service (AWS KMS)


**Answer: D — AWS Key Management Service (AWS KMS)**

**Explanation:** KMS creates and controls encryption keys and integrates with CloudTrail.


## Question 111

A global SaaS provider is designing a workload on AWS. The platform team needs to encrypt data with customer-controlled keys and audit key usage in the most appropriate managed way. Which solution should be selected?

A. AWS Shield Standard

B. AWS Budgets

C. AWS Key Management Service (AWS KMS)

D. Amazon Cognito


**Answer: C — AWS Key Management Service (AWS KMS)**

**Explanation:** KMS creates and controls encryption keys and integrates with CloudTrail.


## Question 112

A retail company is designing a workload on AWS. The solutions architect must encrypt data with customer-controlled keys and audit key usage while meeting the stated requirement. Which solution should be selected?

A. AWS Shield Standard

B. AWS Key Management Service (AWS KMS)

C. Amazon Cognito

D. AWS Budgets


**Answer: B — AWS Key Management Service (AWS KMS)**

**Explanation:** KMS creates and controls encryption keys and integrates with CloudTrail.


## Question 113

A healthcare organization is designing a workload on AWS. The design must store a database password and rotate it automatically with the least operational overhead. Which solution should be selected?

A. AWS Secrets Manager

B. Amazon S3 website hosting

C. AWS Certificate Manager

D. AWS Systems Manager Parameter Store standard string without automation


**Answer: A — AWS Secrets Manager**

**Explanation:** Secrets Manager is designed for secret storage and managed rotation.


## Question 114

A global SaaS provider is designing a workload on AWS. The platform team needs to store a database password and rotate it automatically while following AWS best practices. Which solution should be selected?

A. Amazon S3 website hosting

B. AWS Certificate Manager

C. AWS Secrets Manager

D. AWS Systems Manager Parameter Store standard string without automation


**Answer: C — AWS Secrets Manager**

**Explanation:** Secrets Manager is designed for secret storage and managed rotation.


## Question 115

A retail company is designing a workload on AWS. The solutions architect must store a database password and rotate it automatically in the most appropriate managed way. Which solution should be selected?

A. AWS Systems Manager Parameter Store standard string without automation

B. AWS Certificate Manager

C. Amazon S3 website hosting

D. AWS Secrets Manager


**Answer: D — AWS Secrets Manager**

**Explanation:** Secrets Manager is designed for secret storage and managed rotation.


## Question 116

A media startup is designing a workload on AWS. The architecture needs to store a database password and rotate it automatically while meeting the stated requirement. Which solution should be selected?

A. AWS Secrets Manager

B. AWS Systems Manager Parameter Store standard string without automation

C. Amazon S3 website hosting

D. AWS Certificate Manager


**Answer: A — AWS Secrets Manager**

**Explanation:** Secrets Manager is designed for secret storage and managed rotation.


## Question 117

A global SaaS provider is designing a workload on AWS. The platform team needs to store non-secret configuration values hierarchically at low cost with the least operational overhead. Which solution should be selected?

A. Amazon CloudFront

B. AWS Shield Advanced

C. Amazon Macie

D. AWS Systems Manager Parameter Store


**Answer: D — AWS Systems Manager Parameter Store**

**Explanation:** Parameter Store stores hierarchical configuration and can also hold encrypted parameters.


## Question 118

A retail company is designing a workload on AWS. The solutions architect must store non-secret configuration values hierarchically at low cost while following AWS best practices. Which solution should be selected?

A. Amazon Macie

B. Amazon CloudFront

C. AWS Shield Advanced

D. AWS Systems Manager Parameter Store


**Answer: D — AWS Systems Manager Parameter Store**

**Explanation:** Parameter Store stores hierarchical configuration and can also hold encrypted parameters.


## Question 119

A media startup is designing a workload on AWS. The architecture needs to store non-secret configuration values hierarchically at low cost in the most appropriate managed way. Which solution should be selected?

A. Amazon CloudFront

B. Amazon Macie

C. AWS Systems Manager Parameter Store

D. AWS Shield Advanced


**Answer: C — AWS Systems Manager Parameter Store**

**Explanation:** Parameter Store stores hierarchical configuration and can also hold encrypted parameters.


## Question 120

A financial services company is designing a workload on AWS. A new workload must store non-secret configuration values hierarchically at low cost while meeting the stated requirement. Which solution should be selected?

A. Amazon CloudFront

B. AWS Systems Manager Parameter Store

C. AWS Shield Advanced

D. Amazon Macie


**Answer: B — AWS Systems Manager Parameter Store**

**Explanation:** Parameter Store stores hierarchical configuration and can also hold encrypted parameters.


## Question 121

A retail company is designing a workload on AWS. The solutions architect must protect a public web application from SQL injection and cross-site scripting with the least operational overhead. Which solution should be selected?

A. Amazon GuardDuty

B. AWS Config

C. AWS WAF

D. AWS Shield Standard only


**Answer: C — AWS WAF**

**Explanation:** WAF filters HTTP(S) requests using web ACL rules.


## Question 122

A media startup is designing a workload on AWS. The architecture needs to protect a public web application from SQL injection and cross-site scripting while following AWS best practices. Which solution should be selected?

A. AWS Config

B. AWS WAF

C. AWS Shield Standard only

D. Amazon GuardDuty


**Answer: B — AWS WAF**

**Explanation:** WAF filters HTTP(S) requests using web ACL rules.


## Question 123

A financial services company is designing a workload on AWS. A new workload must protect a public web application from SQL injection and cross-site scripting in the most appropriate managed way. Which solution should be selected?

A. AWS Config

B. AWS Shield Standard only

C. AWS WAF

D. Amazon GuardDuty


**Answer: C — AWS WAF**

**Explanation:** WAF filters HTTP(S) requests using web ACL rules.


## Question 124

A healthcare organization is designing a workload on AWS. The design must protect a public web application from SQL injection and cross-site scripting while meeting the stated requirement. Which solution should be selected?

A. Amazon GuardDuty

B. AWS WAF

C. AWS Config

D. AWS Shield Standard only


**Answer: B — AWS WAF**

**Explanation:** WAF filters HTTP(S) requests using web ACL rules.


## Question 125

A media startup is designing a workload on AWS. The architecture needs to obtain enhanced DDoS protection and cost-protection support for critical resources with the least operational overhead. Which solution should be selected?

A. AWS WAF only

B. AWS IAM Access Analyzer

C. AWS Shield Advanced

D. Amazon Inspector


**Answer: C — AWS Shield Advanced**

**Explanation:** Shield Advanced adds enhanced detection, response support, and DDoS cost protection.


## Question 126

A financial services company is designing a workload on AWS. A new workload must obtain enhanced DDoS protection and cost-protection support for critical resources while following AWS best practices. Which solution should be selected?

A. AWS WAF only

B. AWS IAM Access Analyzer

C. AWS Shield Advanced

D. Amazon Inspector


**Answer: C — AWS Shield Advanced**

**Explanation:** Shield Advanced adds enhanced detection, response support, and DDoS cost protection.


## Question 127

A healthcare organization is designing a workload on AWS. The design must obtain enhanced DDoS protection and cost-protection support for critical resources in the most appropriate managed way. Which solution should be selected?

A. AWS WAF only

B. AWS IAM Access Analyzer

C. Amazon Inspector

D. AWS Shield Advanced


**Answer: D — AWS Shield Advanced**

**Explanation:** Shield Advanced adds enhanced detection, response support, and DDoS cost protection.


## Question 128

A global SaaS provider is designing a workload on AWS. The platform team needs to obtain enhanced DDoS protection and cost-protection support for critical resources while meeting the stated requirement. Which solution should be selected?

A. Amazon Inspector

B. AWS WAF only

C. AWS Shield Advanced

D. AWS IAM Access Analyzer


**Answer: C — AWS Shield Advanced**

**Explanation:** Shield Advanced adds enhanced detection, response support, and DDoS cost protection.


## Question 129

A financial services company is designing a workload on AWS. A new workload must detect suspicious API activity and potentially compromised credentials with the least operational overhead. Which solution should be selected?

A. Amazon Macie

B. Amazon CloudWatch Logs Insights only

C. AWS Artifact

D. Amazon GuardDuty


**Answer: D — Amazon GuardDuty**

**Explanation:** GuardDuty analyzes sources such as CloudTrail, VPC Flow Logs, and DNS logs for threats.


## Question 130

A healthcare organization is designing a workload on AWS. The design must detect suspicious API activity and potentially compromised credentials while following AWS best practices. Which solution should be selected?

A. Amazon CloudWatch Logs Insights only

B. AWS Artifact

C. Amazon Macie

D. Amazon GuardDuty


**Answer: D — Amazon GuardDuty**

**Explanation:** GuardDuty analyzes sources such as CloudTrail, VPC Flow Logs, and DNS logs for threats.


## Question 131

A global SaaS provider is designing a workload on AWS. The platform team needs to detect suspicious API activity and potentially compromised credentials in the most appropriate managed way. Which solution should be selected?

A. Amazon GuardDuty

B. AWS Artifact

C. Amazon CloudWatch Logs Insights only

D. Amazon Macie


**Answer: A — Amazon GuardDuty**

**Explanation:** GuardDuty analyzes sources such as CloudTrail, VPC Flow Logs, and DNS logs for threats.


## Question 132

A retail company is designing a workload on AWS. The solutions architect must detect suspicious API activity and potentially compromised credentials while meeting the stated requirement. Which solution should be selected?

A. Amazon CloudWatch Logs Insights only

B. Amazon Macie

C. Amazon GuardDuty

D. AWS Artifact


**Answer: C — Amazon GuardDuty**

**Explanation:** GuardDuty analyzes sources such as CloudTrail, VPC Flow Logs, and DNS logs for threats.


## Question 133

A healthcare organization is designing a workload on AWS. The design must discover sensitive data such as PII in S3 buckets with the least operational overhead. Which solution should be selected?

A. AWS Shield

B. Amazon Inspector

C. Amazon Macie

D. Amazon Route 53


**Answer: C — Amazon Macie**

**Explanation:** Macie uses pattern matching and machine learning to identify sensitive S3 data.


## Question 134

A global SaaS provider is designing a workload on AWS. The platform team needs to discover sensitive data such as PII in S3 buckets while following AWS best practices. Which solution should be selected?

A. Amazon Route 53

B. Amazon Inspector

C. AWS Shield

D. Amazon Macie


**Answer: D — Amazon Macie**

**Explanation:** Macie uses pattern matching and machine learning to identify sensitive S3 data.


## Question 135

A retail company is designing a workload on AWS. The solutions architect must discover sensitive data such as PII in S3 buckets in the most appropriate managed way. Which solution should be selected?

A. Amazon Route 53

B. Amazon Macie

C. AWS Shield

D. Amazon Inspector


**Answer: B — Amazon Macie**

**Explanation:** Macie uses pattern matching and machine learning to identify sensitive S3 data.


## Question 136

A media startup is designing a workload on AWS. The architecture needs to discover sensitive data such as PII in S3 buckets while meeting the stated requirement. Which solution should be selected?

A. Amazon Macie

B. Amazon Inspector

C. AWS Shield

D. Amazon Route 53


**Answer: A — Amazon Macie**

**Explanation:** Macie uses pattern matching and machine learning to identify sensitive S3 data.


## Question 137

A global SaaS provider is designing a workload on AWS. The platform team needs to scan EC2 instances and container images for software vulnerabilities with the least operational overhead. Which solution should be selected?

A. Amazon Inspector

B. Amazon Macie

C. Amazon GuardDuty

D. AWS Config only


**Answer: A — Amazon Inspector**

**Explanation:** Inspector performs automated vulnerability management for supported compute resources.


## Question 138

A retail company is designing a workload on AWS. The solutions architect must scan EC2 instances and container images for software vulnerabilities while following AWS best practices. Which solution should be selected?

A. Amazon Macie

B. Amazon GuardDuty

C. Amazon Inspector

D. AWS Config only


**Answer: C — Amazon Inspector**

**Explanation:** Inspector performs automated vulnerability management for supported compute resources.


## Question 139

A media startup is designing a workload on AWS. The architecture needs to scan EC2 instances and container images for software vulnerabilities in the most appropriate managed way. Which solution should be selected?

A. Amazon Macie

B. Amazon Inspector

C. Amazon GuardDuty

D. AWS Config only


**Answer: B — Amazon Inspector**

**Explanation:** Inspector performs automated vulnerability management for supported compute resources.


## Question 140

A financial services company is designing a workload on AWS. A new workload must scan EC2 instances and container images for software vulnerabilities while meeting the stated requirement. Which solution should be selected?

A. Amazon GuardDuty

B. Amazon Inspector

C. Amazon Macie

D. AWS Config only


**Answer: B — Amazon Inspector**

**Explanation:** Inspector performs automated vulnerability management for supported compute resources.


## Question 141

A retail company is designing a workload on AWS. The solutions architect must record AWS API calls for governance and forensic investigation with the least operational overhead. Which solution should be selected?

A. AWS CloudTrail

B. AWS X-Ray

C. Amazon QuickSight

D. Amazon CloudWatch metrics


**Answer: A — AWS CloudTrail**

**Explanation:** CloudTrail records account activity and API events.


## Question 142

A media startup is designing a workload on AWS. The architecture needs to record AWS API calls for governance and forensic investigation while following AWS best practices. Which solution should be selected?

A. Amazon QuickSight

B. AWS X-Ray

C. Amazon CloudWatch metrics

D. AWS CloudTrail


**Answer: D — AWS CloudTrail**

**Explanation:** CloudTrail records account activity and API events.


## Question 143

A financial services company is designing a workload on AWS. A new workload must record AWS API calls for governance and forensic investigation in the most appropriate managed way. Which solution should be selected?

A. Amazon QuickSight

B. AWS CloudTrail

C. Amazon CloudWatch metrics

D. AWS X-Ray


**Answer: B — AWS CloudTrail**

**Explanation:** CloudTrail records account activity and API events.


## Question 144

A healthcare organization is designing a workload on AWS. The design must record AWS API calls for governance and forensic investigation while meeting the stated requirement. Which solution should be selected?

A. AWS X-Ray

B. Amazon QuickSight

C. Amazon CloudWatch metrics

D. AWS CloudTrail


**Answer: D — AWS CloudTrail**

**Explanation:** CloudTrail records account activity and API events.


## Question 145

A media startup is designing a workload on AWS. The architecture needs to monitor resource metrics and trigger alarms with the least operational overhead. Which solution should be selected?

A. Amazon CloudWatch

B. AWS Organizations

C. AWS CloudTrail

D. AWS Artifact


**Answer: A — Amazon CloudWatch**

**Explanation:** CloudWatch collects metrics, logs, events, dashboards, and alarms.


## Question 146

A financial services company is designing a workload on AWS. A new workload must monitor resource metrics and trigger alarms while following AWS best practices. Which solution should be selected?

A. AWS CloudTrail

B. AWS Artifact

C. AWS Organizations

D. Amazon CloudWatch


**Answer: D — Amazon CloudWatch**

**Explanation:** CloudWatch collects metrics, logs, events, dashboards, and alarms.


## Question 147

A healthcare organization is designing a workload on AWS. The design must monitor resource metrics and trigger alarms in the most appropriate managed way. Which solution should be selected?

A. Amazon CloudWatch

B. AWS Artifact

C. AWS CloudTrail

D. AWS Organizations


**Answer: A — Amazon CloudWatch**

**Explanation:** CloudWatch collects metrics, logs, events, dashboards, and alarms.


## Question 148

A global SaaS provider is designing a workload on AWS. The platform team needs to monitor resource metrics and trigger alarms while meeting the stated requirement. Which solution should be selected?

A. Amazon CloudWatch

B. AWS CloudTrail

C. AWS Artifact

D. AWS Organizations


**Answer: A — Amazon CloudWatch**

**Explanation:** CloudWatch collects metrics, logs, events, dashboards, and alarms.


## Question 149

A financial services company is designing a workload on AWS. A new workload must evaluate whether resource configurations comply with defined rules over time with the least operational overhead. Which solution should be selected?

A. Amazon Inspector only

B. AWS CloudTrail only

C. AWS Config

D. Amazon EventBridge Scheduler


**Answer: C — AWS Config**

**Explanation:** Config records configuration changes and evaluates compliance against rules.


## Question 150

A healthcare organization is designing a workload on AWS. The design must evaluate whether resource configurations comply with defined rules over time while following AWS best practices. Which solution should be selected?

A. Amazon EventBridge Scheduler

B. Amazon Inspector only

C. AWS CloudTrail only

D. AWS Config


**Answer: D — AWS Config**

**Explanation:** Config records configuration changes and evaluates compliance against rules.


## Question 151

A global SaaS provider is designing a workload on AWS. The platform team needs to evaluate whether resource configurations comply with defined rules over time in the most appropriate managed way. Which solution should be selected?

A. Amazon EventBridge Scheduler

B. AWS CloudTrail only

C. Amazon Inspector only

D. AWS Config


**Answer: D — AWS Config**

**Explanation:** Config records configuration changes and evaluates compliance against rules.


## Question 152

A retail company is designing a workload on AWS. The solutions architect must evaluate whether resource configurations comply with defined rules over time while meeting the stated requirement. Which solution should be selected?

A. AWS Config

B. Amazon Inspector only

C. Amazon EventBridge Scheduler

D. AWS CloudTrail only


**Answer: A — AWS Config**

**Explanation:** Config records configuration changes and evaluates compliance against rules.


## Question 153

A healthcare organization is designing a workload on AWS. The design must trace requests across distributed microservices to find latency bottlenecks with the least operational overhead. Which solution should be selected?

A. S3 Inventory

B. AWS X-Ray

C. AWS Budgets

D. Amazon Macie


**Answer: B — AWS X-Ray**

**Explanation:** X-Ray provides distributed tracing and service maps.


## Question 154

A global SaaS provider is designing a workload on AWS. The platform team needs to trace requests across distributed microservices to find latency bottlenecks while following AWS best practices. Which solution should be selected?

A. AWS X-Ray

B. AWS Budgets

C. S3 Inventory

D. Amazon Macie


**Answer: A — AWS X-Ray**

**Explanation:** X-Ray provides distributed tracing and service maps.


## Question 155

A retail company is designing a workload on AWS. The solutions architect must trace requests across distributed microservices to find latency bottlenecks in the most appropriate managed way. Which solution should be selected?

A. AWS X-Ray

B. Amazon Macie

C. AWS Budgets

D. S3 Inventory


**Answer: A — AWS X-Ray**

**Explanation:** X-Ray provides distributed tracing and service maps.


## Question 156

A media startup is designing a workload on AWS. The architecture needs to trace requests across distributed microservices to find latency bottlenecks while meeting the stated requirement. Which solution should be selected?

A. AWS Budgets

B. AWS X-Ray

C. S3 Inventory

D. Amazon Macie


**Answer: B — AWS X-Ray**

**Explanation:** X-Ray provides distributed tracing and service maps.


## Question 157

A global SaaS provider is designing a workload on AWS. The platform team needs to query application and infrastructure logs interactively with the least operational overhead. Which solution should be selected?

A. CloudWatch Logs Insights

B. Amazon Route 53

C. AWS Snowball Edge

D. AWS Direct Connect


**Answer: A — CloudWatch Logs Insights**

**Explanation:** Logs Insights runs interactive queries over CloudWatch Logs data.


## Question 158

A retail company is designing a workload on AWS. The solutions architect must query application and infrastructure logs interactively while following AWS best practices. Which solution should be selected?

A. AWS Direct Connect

B. CloudWatch Logs Insights

C. AWS Snowball Edge

D. Amazon Route 53


**Answer: B — CloudWatch Logs Insights**

**Explanation:** Logs Insights runs interactive queries over CloudWatch Logs data.


## Question 159

A media startup is designing a workload on AWS. The architecture needs to query application and infrastructure logs interactively in the most appropriate managed way. Which solution should be selected?

A. AWS Direct Connect

B. Amazon Route 53

C. CloudWatch Logs Insights

D. AWS Snowball Edge


**Answer: C — CloudWatch Logs Insights**

**Explanation:** Logs Insights runs interactive queries over CloudWatch Logs data.


## Question 160

A financial services company is designing a workload on AWS. A new workload must query application and infrastructure logs interactively while meeting the stated requirement. Which solution should be selected?

A. CloudWatch Logs Insights

B. Amazon Route 53

C. AWS Direct Connect

D. AWS Snowball Edge


**Answer: A — CloudWatch Logs Insights**

**Explanation:** Logs Insights runs interactive queries over CloudWatch Logs data.


## Question 161

A retail company is designing a workload on AWS. The solutions architect must provide private connectivity from a VPC to S3 without using a NAT gateway with the least operational overhead. Which solution should be selected?

A. An internet gateway

B. An S3 gateway VPC endpoint

C. A public NAT gateway

D. A customer gateway


**Answer: B — An S3 gateway VPC endpoint**

**Explanation:** Gateway endpoints privately connect route tables to S3 and DynamoDB.


## Question 162

A media startup is designing a workload on AWS. The architecture needs to provide private connectivity from a VPC to S3 without using a NAT gateway while following AWS best practices. Which solution should be selected?

A. A public NAT gateway

B. An S3 gateway VPC endpoint

C. A customer gateway

D. An internet gateway


**Answer: B — An S3 gateway VPC endpoint**

**Explanation:** Gateway endpoints privately connect route tables to S3 and DynamoDB.


## Question 163

A financial services company is designing a workload on AWS. A new workload must provide private connectivity from a VPC to S3 without using a NAT gateway in the most appropriate managed way. Which solution should be selected?

A. A public NAT gateway

B. A customer gateway

C. An internet gateway

D. An S3 gateway VPC endpoint


**Answer: D — An S3 gateway VPC endpoint**

**Explanation:** Gateway endpoints privately connect route tables to S3 and DynamoDB.


## Question 164

A healthcare organization is designing a workload on AWS. The design must provide private connectivity from a VPC to S3 without using a NAT gateway while meeting the stated requirement. Which solution should be selected?

A. A customer gateway

B. A public NAT gateway

C. An S3 gateway VPC endpoint

D. An internet gateway


**Answer: C — An S3 gateway VPC endpoint**

**Explanation:** Gateway endpoints privately connect route tables to S3 and DynamoDB.


## Question 165

A media startup is designing a workload on AWS. The architecture needs to privately access an AWS service through private IP addresses in the VPC with the least operational overhead. Which solution should be selected?

A. An interface VPC endpoint powered by AWS PrivateLink

B. VPC peering to every AWS service

C. A public hosted zone

D. An internet gateway


**Answer: A — An interface VPC endpoint powered by AWS PrivateLink**

**Explanation:** Interface endpoints create elastic network interfaces with private IPs.


## Question 166

A financial services company is designing a workload on AWS. A new workload must privately access an AWS service through private IP addresses in the VPC while following AWS best practices. Which solution should be selected?

A. An internet gateway

B. A public hosted zone

C. VPC peering to every AWS service

D. An interface VPC endpoint powered by AWS PrivateLink


**Answer: D — An interface VPC endpoint powered by AWS PrivateLink**

**Explanation:** Interface endpoints create elastic network interfaces with private IPs.


## Question 167

A healthcare organization is designing a workload on AWS. The design must privately access an AWS service through private IP addresses in the VPC in the most appropriate managed way. Which solution should be selected?

A. A public hosted zone

B. VPC peering to every AWS service

C. An interface VPC endpoint powered by AWS PrivateLink

D. An internet gateway


**Answer: C — An interface VPC endpoint powered by AWS PrivateLink**

**Explanation:** Interface endpoints create elastic network interfaces with private IPs.


## Question 168

A global SaaS provider is designing a workload on AWS. The platform team needs to privately access an AWS service through private IP addresses in the VPC while meeting the stated requirement. Which solution should be selected?

A. An interface VPC endpoint powered by AWS PrivateLink

B. An internet gateway

C. A public hosted zone

D. VPC peering to every AWS service


**Answer: A — An interface VPC endpoint powered by AWS PrivateLink**

**Explanation:** Interface endpoints create elastic network interfaces with private IPs.


## Question 169

A financial services company is designing a workload on AWS. A new workload must allow instances in a private subnet to initiate IPv4 internet access with the least operational overhead. Which solution should be selected?

A. An internet gateway attached directly to the private instance

B. A gateway endpoint for all internet traffic

C. A NAT gateway in a public subnet

D. A virtual private gateway


**Answer: C — A NAT gateway in a public subnet**

**Explanation:** A NAT gateway permits outbound internet connections while blocking unsolicited inbound connections.


## Question 170

A healthcare organization is designing a workload on AWS. The design must allow instances in a private subnet to initiate IPv4 internet access while following AWS best practices. Which solution should be selected?

A. An internet gateway attached directly to the private instance

B. A virtual private gateway

C. A gateway endpoint for all internet traffic

D. A NAT gateway in a public subnet


**Answer: D — A NAT gateway in a public subnet**

**Explanation:** A NAT gateway permits outbound internet connections while blocking unsolicited inbound connections.


## Question 171

A global SaaS provider is designing a workload on AWS. The platform team needs to allow instances in a private subnet to initiate IPv4 internet access in the most appropriate managed way. Which solution should be selected?

A. A NAT gateway in a public subnet

B. An internet gateway attached directly to the private instance

C. A virtual private gateway

D. A gateway endpoint for all internet traffic


**Answer: A — A NAT gateway in a public subnet**

**Explanation:** A NAT gateway permits outbound internet connections while blocking unsolicited inbound connections.


## Question 172

A retail company is designing a workload on AWS. The solutions architect must allow instances in a private subnet to initiate IPv4 internet access while meeting the stated requirement. Which solution should be selected?

A. An internet gateway attached directly to the private instance

B. A gateway endpoint for all internet traffic

C. A NAT gateway in a public subnet

D. A virtual private gateway


**Answer: C — A NAT gateway in a public subnet**

**Explanation:** A NAT gateway permits outbound internet connections while blocking unsolicited inbound connections.


## Question 173

A healthcare organization is designing a workload on AWS. The design must connect many VPCs and on-premises networks through a central hub with the least operational overhead. Which solution should be selected?

A. Amazon CloudFront

B. VPC peering mesh

C. AWS WAF

D. AWS Transit Gateway


**Answer: D — AWS Transit Gateway**

**Explanation:** Transit Gateway provides transitive hub-and-spoke routing.


## Question 174

A global SaaS provider is designing a workload on AWS. The platform team needs to connect many VPCs and on-premises networks through a central hub while following AWS best practices. Which solution should be selected?

A. VPC peering mesh

B. Amazon CloudFront

C. AWS Transit Gateway

D. AWS WAF


**Answer: C — AWS Transit Gateway**

**Explanation:** Transit Gateway provides transitive hub-and-spoke routing.


## Question 175

A retail company is designing a workload on AWS. The solutions architect must connect many VPCs and on-premises networks through a central hub in the most appropriate managed way. Which solution should be selected?

A. Amazon CloudFront

B. AWS WAF

C. AWS Transit Gateway

D. VPC peering mesh


**Answer: C — AWS Transit Gateway**

**Explanation:** Transit Gateway provides transitive hub-and-spoke routing.


## Question 176

A media startup is designing a workload on AWS. The architecture needs to connect many VPCs and on-premises networks through a central hub while meeting the stated requirement. Which solution should be selected?

A. AWS WAF

B. AWS Transit Gateway

C. Amazon CloudFront

D. VPC peering mesh


**Answer: B — AWS Transit Gateway**

**Explanation:** Transit Gateway provides transitive hub-and-spoke routing.


## Question 177

A global SaaS provider is designing a workload on AWS. The platform team needs to connect two VPCs privately when transitive routing is not required with the least operational overhead. Which solution should be selected?

A. Amazon S3 replication

B. VPC peering

C. AWS Shield

D. Amazon Route 53 public hosted zone


**Answer: B — VPC peering**

**Explanation:** VPC peering creates private, non-transitive connectivity between two VPCs.


## Question 178

A retail company is designing a workload on AWS. The solutions architect must connect two VPCs privately when transitive routing is not required while following AWS best practices. Which solution should be selected?

A. VPC peering

B. AWS Shield

C. Amazon S3 replication

D. Amazon Route 53 public hosted zone


**Answer: A — VPC peering**

**Explanation:** VPC peering creates private, non-transitive connectivity between two VPCs.


## Question 179

A media startup is designing a workload on AWS. The architecture needs to connect two VPCs privately when transitive routing is not required in the most appropriate managed way. Which solution should be selected?

A. Amazon Route 53 public hosted zone

B. Amazon S3 replication

C. AWS Shield

D. VPC peering


**Answer: D — VPC peering**

**Explanation:** VPC peering creates private, non-transitive connectivity between two VPCs.


## Question 180

A financial services company is designing a workload on AWS. A new workload must connect two VPCs privately when transitive routing is not required while meeting the stated requirement. Which solution should be selected?

A. AWS Shield

B. Amazon S3 replication

C. VPC peering

D. Amazon Route 53 public hosted zone


**Answer: C — VPC peering**

**Explanation:** VPC peering creates private, non-transitive connectivity between two VPCs.


## Question 181

A retail company is designing a workload on AWS. The solutions architect must establish a dedicated private network connection from a data center to AWS with the least operational overhead. Which solution should be selected?

A. AWS Client VPN

B. An internet gateway

C. Amazon CloudFront

D. AWS Direct Connect


**Answer: D — AWS Direct Connect**

**Explanation:** Direct Connect provides a dedicated physical connection to AWS.


## Question 182

A media startup is designing a workload on AWS. The architecture needs to establish a dedicated private network connection from a data center to AWS while following AWS best practices. Which solution should be selected?

A. AWS Client VPN

B. AWS Direct Connect

C. Amazon CloudFront

D. An internet gateway


**Answer: B — AWS Direct Connect**

**Explanation:** Direct Connect provides a dedicated physical connection to AWS.


## Question 183

A financial services company is designing a workload on AWS. A new workload must establish a dedicated private network connection from a data center to AWS in the most appropriate managed way. Which solution should be selected?

A. Amazon CloudFront

B. An internet gateway

C. AWS Client VPN

D. AWS Direct Connect


**Answer: D — AWS Direct Connect**

**Explanation:** Direct Connect provides a dedicated physical connection to AWS.


## Question 184

A healthcare organization is designing a workload on AWS. The design must establish a dedicated private network connection from a data center to AWS while meeting the stated requirement. Which solution should be selected?

A. An internet gateway

B. AWS Client VPN

C. Amazon CloudFront

D. AWS Direct Connect


**Answer: D — AWS Direct Connect**

**Explanation:** Direct Connect provides a dedicated physical connection to AWS.


## Question 185

A media startup is designing a workload on AWS. The architecture needs to quickly establish encrypted connectivity between on-premises and a VPC over the internet with the least operational overhead. Which solution should be selected?

A. AWS Direct Connect only

B. AWS Global Accelerator

C. Amazon S3 Transfer Acceleration

D. AWS Site-to-Site VPN


**Answer: D — AWS Site-to-Site VPN**

**Explanation:** Site-to-Site VPN uses IPsec tunnels over the internet.


## Question 186

A financial services company is designing a workload on AWS. A new workload must quickly establish encrypted connectivity between on-premises and a VPC over the internet while following AWS best practices. Which solution should be selected?

A. Amazon S3 Transfer Acceleration

B. AWS Global Accelerator

C. AWS Site-to-Site VPN

D. AWS Direct Connect only


**Answer: C — AWS Site-to-Site VPN**

**Explanation:** Site-to-Site VPN uses IPsec tunnels over the internet.


## Question 187

A healthcare organization is designing a workload on AWS. The design must quickly establish encrypted connectivity between on-premises and a VPC over the internet in the most appropriate managed way. Which solution should be selected?

A. AWS Global Accelerator

B. AWS Site-to-Site VPN

C. Amazon S3 Transfer Acceleration

D. AWS Direct Connect only


**Answer: B — AWS Site-to-Site VPN**

**Explanation:** Site-to-Site VPN uses IPsec tunnels over the internet.


## Question 188

A global SaaS provider is designing a workload on AWS. The platform team needs to quickly establish encrypted connectivity between on-premises and a VPC over the internet while meeting the stated requirement. Which solution should be selected?

A. Amazon S3 Transfer Acceleration

B. AWS Global Accelerator

C. AWS Site-to-Site VPN

D. AWS Direct Connect only


**Answer: C — AWS Site-to-Site VPN**

**Explanation:** Site-to-Site VPN uses IPsec tunnels over the internet.


## Question 189

A financial services company is designing a workload on AWS. A new workload must improve availability of a VPN connection while keeping a dedicated circuit as primary with the least operational overhead. Which solution should be selected?

A. Use CloudFront as a backup path

B. Use one Direct Connect virtual interface only

C. Use Direct Connect with a Site-to-Site VPN backup

D. Use an S3 gateway endpoint


**Answer: C — Use Direct Connect with a Site-to-Site VPN backup**

**Explanation:** A VPN provides an independent backup path if Direct Connect fails.


## Question 190

A healthcare organization is designing a workload on AWS. The design must improve availability of a VPN connection while keeping a dedicated circuit as primary while following AWS best practices. Which solution should be selected?

A. Use Direct Connect with a Site-to-Site VPN backup

B. Use CloudFront as a backup path

C. Use an S3 gateway endpoint

D. Use one Direct Connect virtual interface only


**Answer: A — Use Direct Connect with a Site-to-Site VPN backup**

**Explanation:** A VPN provides an independent backup path if Direct Connect fails.


## Question 191

A global SaaS provider is designing a workload on AWS. The platform team needs to improve availability of a VPN connection while keeping a dedicated circuit as primary in the most appropriate managed way. Which solution should be selected?

A. Use an S3 gateway endpoint

B. Use one Direct Connect virtual interface only

C. Use Direct Connect with a Site-to-Site VPN backup

D. Use CloudFront as a backup path


**Answer: C — Use Direct Connect with a Site-to-Site VPN backup**

**Explanation:** A VPN provides an independent backup path if Direct Connect fails.


## Question 192

A retail company is designing a workload on AWS. The solutions architect must improve availability of a VPN connection while keeping a dedicated circuit as primary while meeting the stated requirement. Which solution should be selected?

A. Use one Direct Connect virtual interface only

B. Use Direct Connect with a Site-to-Site VPN backup

C. Use CloudFront as a backup path

D. Use an S3 gateway endpoint


**Answer: B — Use Direct Connect with a Site-to-Site VPN backup**

**Explanation:** A VPN provides an independent backup path if Direct Connect fails.


## Question 193

A healthcare organization is designing a workload on AWS. The design must route DNS traffic to the lowest-latency AWS Region with the least operational overhead. Which solution should be selected?

A. Route 53 weighted routing

B. Route 53 latency-based routing

C. Route 53 geolocation routing

D. Route 53 simple routing


**Answer: B — Route 53 latency-based routing**

**Explanation:** Latency routing selects the endpoint with the lowest measured latency for the requester.


## Question 194

A global SaaS provider is designing a workload on AWS. The platform team needs to route DNS traffic to the lowest-latency AWS Region while following AWS best practices. Which solution should be selected?

A. Route 53 latency-based routing

B. Route 53 weighted routing

C. Route 53 geolocation routing

D. Route 53 simple routing


**Answer: A — Route 53 latency-based routing**

**Explanation:** Latency routing selects the endpoint with the lowest measured latency for the requester.


## Question 195

A retail company is designing a workload on AWS. The solutions architect must route DNS traffic to the lowest-latency AWS Region in the most appropriate managed way. Which solution should be selected?

A. Route 53 simple routing

B. Route 53 weighted routing

C. Route 53 latency-based routing

D. Route 53 geolocation routing


**Answer: C — Route 53 latency-based routing**

**Explanation:** Latency routing selects the endpoint with the lowest measured latency for the requester.


## Question 196

A media startup is designing a workload on AWS. The architecture needs to route DNS traffic to the lowest-latency AWS Region while meeting the stated requirement. Which solution should be selected?

A. Route 53 simple routing

B. Route 53 geolocation routing

C. Route 53 latency-based routing

D. Route 53 weighted routing


**Answer: C — Route 53 latency-based routing**

**Explanation:** Latency routing selects the endpoint with the lowest measured latency for the requester.


## Question 197

A global SaaS provider is designing a workload on AWS. The platform team needs to split traffic between two application versions by percentage with the least operational overhead. Which solution should be selected?

A. Route 53 failover routing

B. Route 53 multivalue answer routing

C. Route 53 weighted routing

D. Route 53 geoproximity routing with no weights


**Answer: C — Route 53 weighted routing**

**Explanation:** Weighted records distribute DNS responses according to configured weights.


## Question 198

A retail company is designing a workload on AWS. The solutions architect must split traffic between two application versions by percentage while following AWS best practices. Which solution should be selected?

A. Route 53 multivalue answer routing

B. Route 53 geoproximity routing with no weights

C. Route 53 weighted routing

D. Route 53 failover routing


**Answer: C — Route 53 weighted routing**

**Explanation:** Weighted records distribute DNS responses according to configured weights.


## Question 199

A media startup is designing a workload on AWS. The architecture needs to split traffic between two application versions by percentage in the most appropriate managed way. Which solution should be selected?

A. Route 53 geoproximity routing with no weights

B. Route 53 failover routing

C. Route 53 weighted routing

D. Route 53 multivalue answer routing


**Answer: C — Route 53 weighted routing**

**Explanation:** Weighted records distribute DNS responses according to configured weights.


## Question 200

A financial services company is designing a workload on AWS. A new workload must split traffic between two application versions by percentage while meeting the stated requirement. Which solution should be selected?

A. Route 53 weighted routing

B. Route 53 geoproximity routing with no weights

C. Route 53 multivalue answer routing

D. Route 53 failover routing


**Answer: A — Route 53 weighted routing**

**Explanation:** Weighted records distribute DNS responses according to configured weights.


## Question 201

A retail company is designing a workload on AWS. The solutions architect must automatically direct DNS traffic to a standby endpoint when the primary is unhealthy with the least operational overhead. Which solution should be selected?

A. Route 53 failover routing with health checks

B. Route 53 simple routing

C. Route 53 weighted routing with equal weights

D. A private hosted zone only


**Answer: A — Route 53 failover routing with health checks**

**Explanation:** Failover routing uses health checks to return primary or secondary records.


## Question 202

A media startup is designing a workload on AWS. The architecture needs to automatically direct DNS traffic to a standby endpoint when the primary is unhealthy while following AWS best practices. Which solution should be selected?

A. Route 53 failover routing with health checks

B. A private hosted zone only

C. Route 53 weighted routing with equal weights

D. Route 53 simple routing


**Answer: A — Route 53 failover routing with health checks**

**Explanation:** Failover routing uses health checks to return primary or secondary records.


## Question 203

A financial services company is designing a workload on AWS. A new workload must automatically direct DNS traffic to a standby endpoint when the primary is unhealthy in the most appropriate managed way. Which solution should be selected?

A. Route 53 simple routing

B. A private hosted zone only

C. Route 53 failover routing with health checks

D. Route 53 weighted routing with equal weights


**Answer: C — Route 53 failover routing with health checks**

**Explanation:** Failover routing uses health checks to return primary or secondary records.


## Question 204

A healthcare organization is designing a workload on AWS. The design must automatically direct DNS traffic to a standby endpoint when the primary is unhealthy while meeting the stated requirement. Which solution should be selected?

A. Route 53 failover routing with health checks

B. A private hosted zone only

C. Route 53 weighted routing with equal weights

D. Route 53 simple routing


**Answer: A — Route 53 failover routing with health checks**

**Explanation:** Failover routing uses health checks to return primary or secondary records.


## Question 205

A media startup is designing a workload on AWS. The architecture needs to accelerate global TCP and UDP applications using static anycast IP addresses with the least operational overhead. Which solution should be selected?

A. Amazon CloudFront for every protocol

B. Amazon S3 Transfer Acceleration only

C. AWS Global Accelerator

D. AWS Storage Gateway


**Answer: C — AWS Global Accelerator**

**Explanation:** Global Accelerator routes traffic over the AWS global network to healthy regional endpoints.


## Question 206

A financial services company is designing a workload on AWS. A new workload must accelerate global TCP and UDP applications using static anycast IP addresses while following AWS best practices. Which solution should be selected?

A. AWS Storage Gateway

B. AWS Global Accelerator

C. Amazon S3 Transfer Acceleration only

D. Amazon CloudFront for every protocol


**Answer: B — AWS Global Accelerator**

**Explanation:** Global Accelerator routes traffic over the AWS global network to healthy regional endpoints.


## Question 207

A healthcare organization is designing a workload on AWS. The design must accelerate global TCP and UDP applications using static anycast IP addresses in the most appropriate managed way. Which solution should be selected?

A. Amazon S3 Transfer Acceleration only

B. Amazon CloudFront for every protocol

C. AWS Global Accelerator

D. AWS Storage Gateway


**Answer: C — AWS Global Accelerator**

**Explanation:** Global Accelerator routes traffic over the AWS global network to healthy regional endpoints.


## Question 208

A global SaaS provider is designing a workload on AWS. The platform team needs to accelerate global TCP and UDP applications using static anycast IP addresses while meeting the stated requirement. Which solution should be selected?

A. Amazon S3 Transfer Acceleration only

B. AWS Global Accelerator

C. Amazon CloudFront for every protocol

D. AWS Storage Gateway


**Answer: B — AWS Global Accelerator**

**Explanation:** Global Accelerator routes traffic over the AWS global network to healthy regional endpoints.


## Question 209

A financial services company is designing a workload on AWS. A new workload must provide a managed relational database with synchronous standby replication in another Availability Zone with the least operational overhead. Which solution should be selected?

A. An RDS read replica

B. Amazon Athena

C. Amazon ElastiCache

D. Amazon RDS Multi-AZ deployment


**Answer: D — Amazon RDS Multi-AZ deployment**

**Explanation:** Multi-AZ provides high availability and automatic failover using a synchronous standby.


## Question 210

A healthcare organization is designing a workload on AWS. The design must provide a managed relational database with synchronous standby replication in another Availability Zone while following AWS best practices. Which solution should be selected?

A. Amazon RDS Multi-AZ deployment

B. Amazon ElastiCache

C. Amazon Athena

D. An RDS read replica


**Answer: A — Amazon RDS Multi-AZ deployment**

**Explanation:** Multi-AZ provides high availability and automatic failover using a synchronous standby.


## Question 211

A global SaaS provider is designing a workload on AWS. The platform team needs to provide a managed relational database with synchronous standby replication in another Availability Zone in the most appropriate managed way. Which solution should be selected?

A. An RDS read replica

B. Amazon ElastiCache

C. Amazon RDS Multi-AZ deployment

D. Amazon Athena


**Answer: C — Amazon RDS Multi-AZ deployment**

**Explanation:** Multi-AZ provides high availability and automatic failover using a synchronous standby.


## Question 212

A retail company is designing a workload on AWS. The solutions architect must provide a managed relational database with synchronous standby replication in another Availability Zone while meeting the stated requirement. Which solution should be selected?

A. Amazon Athena

B. An RDS read replica

C. Amazon RDS Multi-AZ deployment

D. Amazon ElastiCache


**Answer: C — Amazon RDS Multi-AZ deployment**

**Explanation:** Multi-AZ provides high availability and automatic failover using a synchronous standby.


## Question 213

A healthcare organization is designing a workload on AWS. The design must scale read-heavy relational database traffic with the least operational overhead. Which solution should be selected?

A. Use AWS DMS continuously

B. Increase backup retention

C. Create Amazon RDS read replicas

D. Enable Multi-AZ only


**Answer: C — Create Amazon RDS read replicas**

**Explanation:** Read replicas serve read traffic and reduce load on the primary database.


## Question 214

A global SaaS provider is designing a workload on AWS. The platform team needs to scale read-heavy relational database traffic while following AWS best practices. Which solution should be selected?

A. Use AWS DMS continuously

B. Create Amazon RDS read replicas

C. Enable Multi-AZ only

D. Increase backup retention


**Answer: B — Create Amazon RDS read replicas**

**Explanation:** Read replicas serve read traffic and reduce load on the primary database.


## Question 215

A retail company is designing a workload on AWS. The solutions architect must scale read-heavy relational database traffic in the most appropriate managed way. Which solution should be selected?

A. Use AWS DMS continuously

B. Create Amazon RDS read replicas

C. Enable Multi-AZ only

D. Increase backup retention


**Answer: B — Create Amazon RDS read replicas**

**Explanation:** Read replicas serve read traffic and reduce load on the primary database.


## Question 216

A media startup is designing a workload on AWS. The architecture needs to scale read-heavy relational database traffic while meeting the stated requirement. Which solution should be selected?

A. Enable Multi-AZ only

B. Create Amazon RDS read replicas

C. Increase backup retention

D. Use AWS DMS continuously


**Answer: B — Create Amazon RDS read replicas**

**Explanation:** Read replicas serve read traffic and reduce load on the primary database.


## Question 217

A global SaaS provider is designing a workload on AWS. The platform team needs to use a MySQL-compatible relational database with distributed storage and fast failover with the least operational overhead. Which solution should be selected?

A. Amazon Redshift

B. Amazon Neptune

C. Amazon Aurora

D. Amazon DynamoDB


**Answer: C — Amazon Aurora**

**Explanation:** Aurora is a MySQL/PostgreSQL-compatible managed relational database with distributed storage.


## Question 218

A retail company is designing a workload on AWS. The solutions architect must use a MySQL-compatible relational database with distributed storage and fast failover while following AWS best practices. Which solution should be selected?

A. Amazon Neptune

B. Amazon DynamoDB

C. Amazon Aurora

D. Amazon Redshift


**Answer: C — Amazon Aurora**

**Explanation:** Aurora is a MySQL/PostgreSQL-compatible managed relational database with distributed storage.


## Question 219

A media startup is designing a workload on AWS. The architecture needs to use a MySQL-compatible relational database with distributed storage and fast failover in the most appropriate managed way. Which solution should be selected?

A. Amazon Neptune

B. Amazon Aurora

C. Amazon DynamoDB

D. Amazon Redshift


**Answer: B — Amazon Aurora**

**Explanation:** Aurora is a MySQL/PostgreSQL-compatible managed relational database with distributed storage.


## Question 220

A financial services company is designing a workload on AWS. A new workload must use a MySQL-compatible relational database with distributed storage and fast failover while meeting the stated requirement. Which solution should be selected?

A. Amazon Neptune

B. Amazon DynamoDB

C. Amazon Redshift

D. Amazon Aurora


**Answer: D — Amazon Aurora**

**Explanation:** Aurora is a MySQL/PostgreSQL-compatible managed relational database with distributed storage.


## Question 221

A retail company is designing a workload on AWS. The solutions architect must store key-value data with single-digit millisecond performance at virtually any scale with the least operational overhead. Which solution should be selected?

A. Amazon EFS

B. Amazon DynamoDB

C. Amazon RDS for Oracle

D. Amazon Redshift


**Answer: B — Amazon DynamoDB**

**Explanation:** DynamoDB is a serverless managed key-value and document database.


## Question 222

A media startup is designing a workload on AWS. The architecture needs to store key-value data with single-digit millisecond performance at virtually any scale while following AWS best practices. Which solution should be selected?

A. Amazon RDS for Oracle

B. Amazon DynamoDB

C. Amazon Redshift

D. Amazon EFS


**Answer: B — Amazon DynamoDB**

**Explanation:** DynamoDB is a serverless managed key-value and document database.


## Question 223

A financial services company is designing a workload on AWS. A new workload must store key-value data with single-digit millisecond performance at virtually any scale in the most appropriate managed way. Which solution should be selected?

A. Amazon Redshift

B. Amazon EFS

C. Amazon DynamoDB

D. Amazon RDS for Oracle


**Answer: C — Amazon DynamoDB**

**Explanation:** DynamoDB is a serverless managed key-value and document database.


## Question 224

A healthcare organization is designing a workload on AWS. The design must store key-value data with single-digit millisecond performance at virtually any scale while meeting the stated requirement. Which solution should be selected?

A. Amazon EFS

B. Amazon Redshift

C. Amazon RDS for Oracle

D. Amazon DynamoDB


**Answer: D — Amazon DynamoDB**

**Explanation:** DynamoDB is a serverless managed key-value and document database.


## Question 225

A media startup is designing a workload on AWS. The architecture needs to reduce DynamoDB read latency to microseconds for frequently accessed data with the least operational overhead. Which solution should be selected?

A. Amazon RDS Proxy

B. Amazon SQS

C. AWS Glue Data Catalog

D. DynamoDB Accelerator (DAX)


**Answer: D — DynamoDB Accelerator (DAX)**

**Explanation:** DAX is an in-memory cache purpose-built for DynamoDB.


## Question 226

A financial services company is designing a workload on AWS. A new workload must reduce DynamoDB read latency to microseconds for frequently accessed data while following AWS best practices. Which solution should be selected?

A. Amazon SQS

B. Amazon RDS Proxy

C. AWS Glue Data Catalog

D. DynamoDB Accelerator (DAX)


**Answer: D — DynamoDB Accelerator (DAX)**

**Explanation:** DAX is an in-memory cache purpose-built for DynamoDB.


## Question 227

A healthcare organization is designing a workload on AWS. The design must reduce DynamoDB read latency to microseconds for frequently accessed data in the most appropriate managed way. Which solution should be selected?

A. AWS Glue Data Catalog

B. Amazon RDS Proxy

C. Amazon SQS

D. DynamoDB Accelerator (DAX)


**Answer: D — DynamoDB Accelerator (DAX)**

**Explanation:** DAX is an in-memory cache purpose-built for DynamoDB.


## Question 228

A global SaaS provider is designing a workload on AWS. The platform team needs to reduce DynamoDB read latency to microseconds for frequently accessed data while meeting the stated requirement. Which solution should be selected?

A. Amazon SQS

B. AWS Glue Data Catalog

C. Amazon RDS Proxy

D. DynamoDB Accelerator (DAX)


**Answer: D — DynamoDB Accelerator (DAX)**

**Explanation:** DAX is an in-memory cache purpose-built for DynamoDB.


## Question 229

A financial services company is designing a workload on AWS. A new workload must cache session data and support complex data structures such as sorted sets with the least operational overhead. Which solution should be selected?

A. Amazon Athena

B. Amazon S3 Glacier

C. Amazon ElastiCache for Memcached when persistence is required

D. Amazon ElastiCache for Redis


**Answer: D — Amazon ElastiCache for Redis**

**Explanation:** Redis supports rich data structures, replication, and optional persistence.


## Question 230

A healthcare organization is designing a workload on AWS. The design must cache session data and support complex data structures such as sorted sets while following AWS best practices. Which solution should be selected?

A. Amazon S3 Glacier

B. Amazon Athena

C. Amazon ElastiCache for Memcached when persistence is required

D. Amazon ElastiCache for Redis


**Answer: D — Amazon ElastiCache for Redis**

**Explanation:** Redis supports rich data structures, replication, and optional persistence.


## Question 231

A global SaaS provider is designing a workload on AWS. The platform team needs to cache session data and support complex data structures such as sorted sets in the most appropriate managed way. Which solution should be selected?

A. Amazon ElastiCache for Redis

B. Amazon Athena

C. Amazon ElastiCache for Memcached when persistence is required

D. Amazon S3 Glacier


**Answer: A — Amazon ElastiCache for Redis**

**Explanation:** Redis supports rich data structures, replication, and optional persistence.


## Question 232

A retail company is designing a workload on AWS. The solutions architect must cache session data and support complex data structures such as sorted sets while meeting the stated requirement. Which solution should be selected?

A. Amazon S3 Glacier

B. Amazon ElastiCache for Memcached when persistence is required

C. Amazon Athena

D. Amazon ElastiCache for Redis


**Answer: D — Amazon ElastiCache for Redis**

**Explanation:** Redis supports rich data structures, replication, and optional persistence.


## Question 233

A healthcare organization is designing a workload on AWS. The design must cache simple objects across multiple nodes with easy horizontal scaling with the least operational overhead. Which solution should be selected?

A. Amazon DocumentDB

B. Amazon ElastiCache for Memcached

C. Amazon Neptune

D. Amazon Redshift


**Answer: B — Amazon ElastiCache for Memcached**

**Explanation:** Memcached is a simple distributed in-memory object cache.


## Question 234

A global SaaS provider is designing a workload on AWS. The platform team needs to cache simple objects across multiple nodes with easy horizontal scaling while following AWS best practices. Which solution should be selected?

A. Amazon Redshift

B. Amazon ElastiCache for Memcached

C. Amazon Neptune

D. Amazon DocumentDB


**Answer: B — Amazon ElastiCache for Memcached**

**Explanation:** Memcached is a simple distributed in-memory object cache.


## Question 235

A retail company is designing a workload on AWS. The solutions architect must cache simple objects across multiple nodes with easy horizontal scaling in the most appropriate managed way. Which solution should be selected?

A. Amazon ElastiCache for Memcached

B. Amazon DocumentDB

C. Amazon Neptune

D. Amazon Redshift


**Answer: A — Amazon ElastiCache for Memcached**

**Explanation:** Memcached is a simple distributed in-memory object cache.


## Question 236

A media startup is designing a workload on AWS. The architecture needs to cache simple objects across multiple nodes with easy horizontal scaling while meeting the stated requirement. Which solution should be selected?

A. Amazon DocumentDB

B. Amazon Redshift

C. Amazon Neptune

D. Amazon ElastiCache for Memcached


**Answer: D — Amazon ElastiCache for Memcached**

**Explanation:** Memcached is a simple distributed in-memory object cache.


## Question 237

A global SaaS provider is designing a workload on AWS. The platform team needs to run serverless SQL queries directly against data in Amazon S3 with the least operational overhead. Which solution should be selected?

A. Amazon EC2 Auto Scaling

B. Amazon SQS

C. Amazon RDS

D. Amazon Athena


**Answer: D — Amazon Athena**

**Explanation:** Athena queries S3 data using SQL without provisioning servers.


## Question 238

A retail company is designing a workload on AWS. The solutions architect must run serverless SQL queries directly against data in Amazon S3 while following AWS best practices. Which solution should be selected?

A. Amazon SQS

B. Amazon RDS

C. Amazon Athena

D. Amazon EC2 Auto Scaling


**Answer: C — Amazon Athena**

**Explanation:** Athena queries S3 data using SQL without provisioning servers.


## Question 239

A media startup is designing a workload on AWS. The architecture needs to run serverless SQL queries directly against data in Amazon S3 in the most appropriate managed way. Which solution should be selected?

A. Amazon RDS

B. Amazon EC2 Auto Scaling

C. Amazon SQS

D. Amazon Athena


**Answer: D — Amazon Athena**

**Explanation:** Athena queries S3 data using SQL without provisioning servers.


## Question 240

A financial services company is designing a workload on AWS. A new workload must run serverless SQL queries directly against data in Amazon S3 while meeting the stated requirement. Which solution should be selected?

A. Amazon EC2 Auto Scaling

B. Amazon Athena

C. Amazon RDS

D. Amazon SQS


**Answer: B — Amazon Athena**

**Explanation:** Athena queries S3 data using SQL without provisioning servers.


## Question 241

A retail company is designing a workload on AWS. The solutions architect must perform managed extract, transform, and load jobs and maintain a central data catalog with the least operational overhead. Which solution should be selected?

A. AWS Shield

B. Amazon Route 53

C. AWS Glue

D. Amazon EBS


**Answer: C — AWS Glue**

**Explanation:** Glue provides serverless ETL and the Glue Data Catalog.


## Question 242

A media startup is designing a workload on AWS. The architecture needs to perform managed extract, transform, and load jobs and maintain a central data catalog while following AWS best practices. Which solution should be selected?

A. Amazon Route 53

B. Amazon EBS

C. AWS Glue

D. AWS Shield


**Answer: C — AWS Glue**

**Explanation:** Glue provides serverless ETL and the Glue Data Catalog.


## Question 243

A financial services company is designing a workload on AWS. A new workload must perform managed extract, transform, and load jobs and maintain a central data catalog in the most appropriate managed way. Which solution should be selected?

A. Amazon Route 53

B. AWS Glue

C. Amazon EBS

D. AWS Shield


**Answer: B — AWS Glue**

**Explanation:** Glue provides serverless ETL and the Glue Data Catalog.


## Question 244

A healthcare organization is designing a workload on AWS. The design must perform managed extract, transform, and load jobs and maintain a central data catalog while meeting the stated requirement. Which solution should be selected?

A. AWS Shield

B. Amazon EBS

C. Amazon Route 53

D. AWS Glue


**Answer: D — AWS Glue**

**Explanation:** Glue provides serverless ETL and the Glue Data Catalog.


## Question 245

A media startup is designing a workload on AWS. The architecture needs to run petabyte-scale columnar analytics in a managed data warehouse with the least operational overhead. Which solution should be selected?

A. Amazon SQS FIFO

B. Amazon RDS Multi-AZ

C. Amazon EFS

D. Amazon Redshift


**Answer: D — Amazon Redshift**

**Explanation:** Redshift is a managed columnar data warehouse optimized for analytics.


## Question 246

A financial services company is designing a workload on AWS. A new workload must run petabyte-scale columnar analytics in a managed data warehouse while following AWS best practices. Which solution should be selected?

A. Amazon SQS FIFO

B. Amazon EFS

C. Amazon Redshift

D. Amazon RDS Multi-AZ


**Answer: C — Amazon Redshift**

**Explanation:** Redshift is a managed columnar data warehouse optimized for analytics.


## Question 247

A healthcare organization is designing a workload on AWS. The design must run petabyte-scale columnar analytics in a managed data warehouse in the most appropriate managed way. Which solution should be selected?

A. Amazon RDS Multi-AZ

B. Amazon Redshift

C. Amazon SQS FIFO

D. Amazon EFS


**Answer: B — Amazon Redshift**

**Explanation:** Redshift is a managed columnar data warehouse optimized for analytics.


## Question 248

A global SaaS provider is designing a workload on AWS. The platform team needs to run petabyte-scale columnar analytics in a managed data warehouse while meeting the stated requirement. Which solution should be selected?

A. Amazon SQS FIFO

B. Amazon Redshift

C. Amazon RDS Multi-AZ

D. Amazon EFS


**Answer: B — Amazon Redshift**

**Explanation:** Redshift is a managed columnar data warehouse optimized for analytics.


## Question 249

A financial services company is designing a workload on AWS. A new workload must process large datasets using managed Hadoop and Spark clusters with the least operational overhead. Which solution should be selected?

A. Amazon Lightsail

B. AWS WAF

C. Amazon EMR

D. Amazon Route 53


**Answer: C — Amazon EMR**

**Explanation:** EMR runs big-data frameworks such as Hadoop and Spark.


## Question 250

A healthcare organization is designing a workload on AWS. The design must process large datasets using managed Hadoop and Spark clusters while following AWS best practices. Which solution should be selected?

A. AWS WAF

B. Amazon EMR

C. Amazon Lightsail

D. Amazon Route 53


**Answer: B — Amazon EMR**

**Explanation:** EMR runs big-data frameworks such as Hadoop and Spark.


## Question 251

A global SaaS provider is designing a workload on AWS. The platform team needs to process large datasets using managed Hadoop and Spark clusters in the most appropriate managed way. Which solution should be selected?

A. Amazon EMR

B. Amazon Lightsail

C. Amazon Route 53

D. AWS WAF


**Answer: A — Amazon EMR**

**Explanation:** EMR runs big-data frameworks such as Hadoop and Spark.


## Question 252

A retail company is designing a workload on AWS. The solutions architect must process large datasets using managed Hadoop and Spark clusters while meeting the stated requirement. Which solution should be selected?

A. Amazon EMR

B. AWS WAF

C. Amazon Route 53

D. Amazon Lightsail


**Answer: A — Amazon EMR**

**Explanation:** EMR runs big-data frameworks such as Hadoop and Spark.


## Question 253

A healthcare organization is designing a workload on AWS. The design must migrate a relational database with minimal downtime using continuous replication with the least operational overhead. Which solution should be selected?

A. AWS Database Migration Service (AWS DMS)

B. AWS Snowcone only

C. Amazon CloudFront

D. AWS DataSync


**Answer: A — AWS Database Migration Service (AWS DMS)**

**Explanation:** DMS performs full load and ongoing change data capture.


## Question 254

A global SaaS provider is designing a workload on AWS. The platform team needs to migrate a relational database with minimal downtime using continuous replication while following AWS best practices. Which solution should be selected?

A. Amazon CloudFront

B. AWS Database Migration Service (AWS DMS)

C. AWS Snowcone only

D. AWS DataSync


**Answer: B — AWS Database Migration Service (AWS DMS)**

**Explanation:** DMS performs full load and ongoing change data capture.


## Question 255

A retail company is designing a workload on AWS. The solutions architect must migrate a relational database with minimal downtime using continuous replication in the most appropriate managed way. Which solution should be selected?

A. AWS DataSync

B. AWS Database Migration Service (AWS DMS)

C. Amazon CloudFront

D. AWS Snowcone only


**Answer: B — AWS Database Migration Service (AWS DMS)**

**Explanation:** DMS performs full load and ongoing change data capture.


## Question 256

A media startup is designing a workload on AWS. The architecture needs to migrate a relational database with minimal downtime using continuous replication while meeting the stated requirement. Which solution should be selected?

A. AWS Database Migration Service (AWS DMS)

B. Amazon CloudFront

C. AWS Snowcone only

D. AWS DataSync


**Answer: A — AWS Database Migration Service (AWS DMS)**

**Explanation:** DMS performs full load and ongoing change data capture.


## Question 257

A global SaaS provider is designing a workload on AWS. The platform team needs to convert database schemas between different database engines with the least operational overhead. Which solution should be selected?

A. AWS Systems Manager Session Manager

B. AWS Schema Conversion Tool

C. Amazon Macie

D. AWS Storage Gateway


**Answer: B — AWS Schema Conversion Tool**

**Explanation:** SCT converts schemas and code objects for heterogeneous migrations.


## Question 258

A retail company is designing a workload on AWS. The solutions architect must convert database schemas between different database engines while following AWS best practices. Which solution should be selected?

A. Amazon Macie

B. AWS Storage Gateway

C. AWS Schema Conversion Tool

D. AWS Systems Manager Session Manager


**Answer: C — AWS Schema Conversion Tool**

**Explanation:** SCT converts schemas and code objects for heterogeneous migrations.


## Question 259

A media startup is designing a workload on AWS. The architecture needs to convert database schemas between different database engines in the most appropriate managed way. Which solution should be selected?

A. AWS Schema Conversion Tool

B. AWS Systems Manager Session Manager

C. Amazon Macie

D. AWS Storage Gateway


**Answer: A — AWS Schema Conversion Tool**

**Explanation:** SCT converts schemas and code objects for heterogeneous migrations.


## Question 260

A financial services company is designing a workload on AWS. A new workload must convert database schemas between different database engines while meeting the stated requirement. Which solution should be selected?

A. AWS Systems Manager Session Manager

B. AWS Storage Gateway

C. Amazon Macie

D. AWS Schema Conversion Tool


**Answer: D — AWS Schema Conversion Tool**

**Explanation:** SCT converts schemas and code objects for heterogeneous migrations.


## Question 261

A retail company is designing a workload on AWS. The solutions architect must transfer tens of terabytes from on-premises storage to AWS over the network efficiently with the least operational overhead. Which solution should be selected?

A. AWS CloudFormation

B. AWS WAF

C. Amazon Route 53

D. AWS DataSync


**Answer: D — AWS DataSync**

**Explanation:** DataSync accelerates and automates online data transfers.


## Question 262

A media startup is designing a workload on AWS. The architecture needs to transfer tens of terabytes from on-premises storage to AWS over the network efficiently while following AWS best practices. Which solution should be selected?

A. Amazon Route 53

B. AWS WAF

C. AWS CloudFormation

D. AWS DataSync


**Answer: D — AWS DataSync**

**Explanation:** DataSync accelerates and automates online data transfers.


## Question 263

A financial services company is designing a workload on AWS. A new workload must transfer tens of terabytes from on-premises storage to AWS over the network efficiently in the most appropriate managed way. Which solution should be selected?

A. AWS CloudFormation

B. AWS DataSync

C. AWS WAF

D. Amazon Route 53


**Answer: B — AWS DataSync**

**Explanation:** DataSync accelerates and automates online data transfers.


## Question 264

A healthcare organization is designing a workload on AWS. The design must transfer tens of terabytes from on-premises storage to AWS over the network efficiently while meeting the stated requirement. Which solution should be selected?

A. AWS CloudFormation

B. AWS DataSync

C. Amazon Route 53

D. AWS WAF


**Answer: B — AWS DataSync**

**Explanation:** DataSync accelerates and automates online data transfers.


## Question 265

A media startup is designing a workload on AWS. The architecture needs to move hundreds of terabytes when network bandwidth is limited with the least operational overhead. Which solution should be selected?

A. Amazon CloudWatch

B. S3 Transfer Acceleration only

C. AWS Client VPN

D. AWS Snowball Edge


**Answer: D — AWS Snowball Edge**

**Explanation:** Snowball Edge is a physical device for offline bulk data transfer.


## Question 266

A financial services company is designing a workload on AWS. A new workload must move hundreds of terabytes when network bandwidth is limited while following AWS best practices. Which solution should be selected?

A. Amazon CloudWatch

B. S3 Transfer Acceleration only

C. AWS Client VPN

D. AWS Snowball Edge


**Answer: D — AWS Snowball Edge**

**Explanation:** Snowball Edge is a physical device for offline bulk data transfer.


## Question 267

A healthcare organization is designing a workload on AWS. The design must move hundreds of terabytes when network bandwidth is limited in the most appropriate managed way. Which solution should be selected?

A. AWS Snowball Edge

B. Amazon CloudWatch

C. S3 Transfer Acceleration only

D. AWS Client VPN


**Answer: A — AWS Snowball Edge**

**Explanation:** Snowball Edge is a physical device for offline bulk data transfer.


## Question 268

A global SaaS provider is designing a workload on AWS. The platform team needs to move hundreds of terabytes when network bandwidth is limited while meeting the stated requirement. Which solution should be selected?

A. Amazon CloudWatch

B. AWS Client VPN

C. AWS Snowball Edge

D. S3 Transfer Acceleration only


**Answer: C — AWS Snowball Edge**

**Explanation:** Snowball Edge is a physical device for offline bulk data transfer.


## Question 269

A financial services company is designing a workload on AWS. A new workload must provide on-premises applications low-latency file access backed by cloud storage with the least operational overhead. Which solution should be selected?

A. Amazon SQS

B. AWS Shield

C. AWS Storage Gateway File Gateway

D. Amazon Route 53


**Answer: C — AWS Storage Gateway File Gateway**

**Explanation:** File Gateway exposes file protocols locally and stores data in AWS.


## Question 270

A healthcare organization is designing a workload on AWS. The design must provide on-premises applications low-latency file access backed by cloud storage while following AWS best practices. Which solution should be selected?

A. AWS Shield

B. Amazon SQS

C. Amazon Route 53

D. AWS Storage Gateway File Gateway


**Answer: D — AWS Storage Gateway File Gateway**

**Explanation:** File Gateway exposes file protocols locally and stores data in AWS.


## Question 271

A global SaaS provider is designing a workload on AWS. The platform team needs to provide on-premises applications low-latency file access backed by cloud storage in the most appropriate managed way. Which solution should be selected?

A. AWS Storage Gateway File Gateway

B. Amazon SQS

C. AWS Shield

D. Amazon Route 53


**Answer: A — AWS Storage Gateway File Gateway**

**Explanation:** File Gateway exposes file protocols locally and stores data in AWS.


## Question 272

A retail company is designing a workload on AWS. The solutions architect must provide on-premises applications low-latency file access backed by cloud storage while meeting the stated requirement. Which solution should be selected?

A. Amazon SQS

B. AWS Storage Gateway File Gateway

C. AWS Shield

D. Amazon Route 53


**Answer: B — AWS Storage Gateway File Gateway**

**Explanation:** File Gateway exposes file protocols locally and stores data in AWS.


## Question 273

A healthcare organization is designing a workload on AWS. The design must centrally create cross-account and cross-Region backup policies with the least operational overhead. Which solution should be selected?

A. AWS Backup

B. Route 53 Resolver

C. AWS Artifact

D. Amazon Inspector


**Answer: A — AWS Backup**

**Explanation:** AWS Backup centralizes backup policies and supported service backups.


## Question 274

A global SaaS provider is designing a workload on AWS. The platform team needs to centrally create cross-account and cross-Region backup policies while following AWS best practices. Which solution should be selected?

A. Amazon Inspector

B. AWS Backup

C. AWS Artifact

D. Route 53 Resolver


**Answer: B — AWS Backup**

**Explanation:** AWS Backup centralizes backup policies and supported service backups.


## Question 275

A retail company is designing a workload on AWS. The solutions architect must centrally create cross-account and cross-Region backup policies in the most appropriate managed way. Which solution should be selected?

A. Route 53 Resolver

B. AWS Artifact

C. Amazon Inspector

D. AWS Backup


**Answer: D — AWS Backup**

**Explanation:** AWS Backup centralizes backup policies and supported service backups.


## Question 276

A media startup is designing a workload on AWS. The architecture needs to centrally create cross-account and cross-Region backup policies while meeting the stated requirement. Which solution should be selected?

A. AWS Backup

B. Route 53 Resolver

C. Amazon Inspector

D. AWS Artifact


**Answer: A — AWS Backup**

**Explanation:** AWS Backup centralizes backup policies and supported service backups.


## Question 277

A global SaaS provider is designing a workload on AWS. The platform team needs to deploy infrastructure repeatedly using declarative templates with the least operational overhead. Which solution should be selected?

A. Amazon Cognito

B. Amazon CloudWatch

C. AWS CloudFormation

D. AWS CloudTrail


**Answer: C — AWS CloudFormation**

**Explanation:** CloudFormation provisions and manages AWS resources from templates.


## Question 278

A retail company is designing a workload on AWS. The solutions architect must deploy infrastructure repeatedly using declarative templates while following AWS best practices. Which solution should be selected?

A. Amazon CloudWatch

B. AWS CloudTrail

C. Amazon Cognito

D. AWS CloudFormation


**Answer: D — AWS CloudFormation**

**Explanation:** CloudFormation provisions and manages AWS resources from templates.


## Question 279

A media startup is designing a workload on AWS. The architecture needs to deploy infrastructure repeatedly using declarative templates in the most appropriate managed way. Which solution should be selected?

A. Amazon CloudWatch

B. AWS CloudFormation

C. Amazon Cognito

D. AWS CloudTrail


**Answer: B — AWS CloudFormation**

**Explanation:** CloudFormation provisions and manages AWS resources from templates.


## Question 280

A financial services company is designing a workload on AWS. A new workload must deploy infrastructure repeatedly using declarative templates while meeting the stated requirement. Which solution should be selected?

A. Amazon CloudWatch

B. Amazon Cognito

C. AWS CloudTrail

D. AWS CloudFormation


**Answer: D — AWS CloudFormation**

**Explanation:** CloudFormation provisions and manages AWS resources from templates.


## Question 281

A retail company is designing a workload on AWS. The solutions architect must quickly deploy a web application while AWS manages capacity, load balancing, and health monitoring with the least operational overhead. Which solution should be selected?

A. AWS Elastic Beanstalk

B. AWS Direct Connect

C. AWS Artifact

D. Amazon Macie


**Answer: A — AWS Elastic Beanstalk**

**Explanation:** Elastic Beanstalk is a managed application platform that handles infrastructure operations.


## Question 282

A media startup is designing a workload on AWS. The architecture needs to quickly deploy a web application while AWS manages capacity, load balancing, and health monitoring while following AWS best practices. Which solution should be selected?

A. AWS Direct Connect

B. AWS Artifact

C. AWS Elastic Beanstalk

D. Amazon Macie


**Answer: C — AWS Elastic Beanstalk**

**Explanation:** Elastic Beanstalk is a managed application platform that handles infrastructure operations.


## Question 283

A financial services company is designing a workload on AWS. A new workload must quickly deploy a web application while AWS manages capacity, load balancing, and health monitoring in the most appropriate managed way. Which solution should be selected?

A. AWS Elastic Beanstalk

B. Amazon Macie

C. AWS Direct Connect

D. AWS Artifact


**Answer: A — AWS Elastic Beanstalk**

**Explanation:** Elastic Beanstalk is a managed application platform that handles infrastructure operations.


## Question 284

A healthcare organization is designing a workload on AWS. The design must quickly deploy a web application while AWS manages capacity, load balancing, and health monitoring while meeting the stated requirement. Which solution should be selected?

A. AWS Elastic Beanstalk

B. AWS Artifact

C. AWS Direct Connect

D. Amazon Macie


**Answer: A — AWS Elastic Beanstalk**

**Explanation:** Elastic Beanstalk is a managed application platform that handles infrastructure operations.


## Question 285

A media startup is designing a workload on AWS. The architecture needs to provide authentication and authorization for a consumer mobile application with the least operational overhead. Which solution should be selected?

A. Amazon Inspector

B. AWS Direct Connect

C. Amazon Cognito

D. AWS Organizations


**Answer: C — Amazon Cognito**

**Explanation:** Cognito supplies user pools and identity pools for application users.


## Question 286

A financial services company is designing a workload on AWS. A new workload must provide authentication and authorization for a consumer mobile application while following AWS best practices. Which solution should be selected?

A. Amazon Cognito

B. Amazon Inspector

C. AWS Organizations

D. AWS Direct Connect


**Answer: A — Amazon Cognito**

**Explanation:** Cognito supplies user pools and identity pools for application users.


## Question 287

A healthcare organization is designing a workload on AWS. The design must provide authentication and authorization for a consumer mobile application in the most appropriate managed way. Which solution should be selected?

A. Amazon Cognito

B. AWS Organizations

C. AWS Direct Connect

D. Amazon Inspector


**Answer: A — Amazon Cognito**

**Explanation:** Cognito supplies user pools and identity pools for application users.


## Question 288

A global SaaS provider is designing a workload on AWS. The platform team needs to provide authentication and authorization for a consumer mobile application while meeting the stated requirement. Which solution should be selected?

A. AWS Organizations

B. Amazon Cognito

C. Amazon Inspector

D. AWS Direct Connect


**Answer: B — Amazon Cognito**

**Explanation:** Cognito supplies user pools and identity pools for application users.


## Question 289

A financial services company is designing a workload on AWS. A new workload must publish, secure, throttle, and monitor REST APIs with the least operational overhead. Which solution should be selected?

A. Amazon EBS

B. Amazon Route 53 Resolver

C. AWS Storage Gateway

D. Amazon API Gateway


**Answer: D — Amazon API Gateway**

**Explanation:** API Gateway is a managed front door for APIs with authorization, throttling, and monitoring.


## Question 290

A healthcare organization is designing a workload on AWS. The design must publish, secure, throttle, and monitor REST APIs while following AWS best practices. Which solution should be selected?

A. Amazon Route 53 Resolver

B. Amazon API Gateway

C. Amazon EBS

D. AWS Storage Gateway


**Answer: B — Amazon API Gateway**

**Explanation:** API Gateway is a managed front door for APIs with authorization, throttling, and monitoring.


## Question 291

A global SaaS provider is designing a workload on AWS. The platform team needs to publish, secure, throttle, and monitor REST APIs in the most appropriate managed way. Which solution should be selected?

A. Amazon API Gateway

B. Amazon EBS

C. AWS Storage Gateway

D. Amazon Route 53 Resolver


**Answer: A — Amazon API Gateway**

**Explanation:** API Gateway is a managed front door for APIs with authorization, throttling, and monitoring.


## Question 292

A retail company is designing a workload on AWS. The solutions architect must publish, secure, throttle, and monitor REST APIs while meeting the stated requirement. Which solution should be selected?

A. AWS Storage Gateway

B. Amazon EBS

C. Amazon Route 53 Resolver

D. Amazon API Gateway


**Answer: D — Amazon API Gateway**

**Explanation:** API Gateway is a managed front door for APIs with authorization, throttling, and monitoring.


## Question 293

A healthcare organization is designing a workload on AWS. The design must control costs by committing to a consistent amount of compute usage across EC2, Fargate, and Lambda with the least operational overhead. Which solution should be selected?

A. S3 Intelligent-Tiering

B. EC2 Spot Instances only

C. AWS Budgets alerts only

D. Compute Savings Plans


**Answer: D — Compute Savings Plans**

**Explanation:** Compute Savings Plans apply flexible discounts across eligible compute services.


## Question 294

A global SaaS provider is designing a workload on AWS. The platform team needs to control costs by committing to a consistent amount of compute usage across EC2, Fargate, and Lambda while following AWS best practices. Which solution should be selected?

A. AWS Budgets alerts only

B. EC2 Spot Instances only

C. Compute Savings Plans

D. S3 Intelligent-Tiering


**Answer: C — Compute Savings Plans**

**Explanation:** Compute Savings Plans apply flexible discounts across eligible compute services.


## Question 295

A retail company is designing a workload on AWS. The solutions architect must control costs by committing to a consistent amount of compute usage across EC2, Fargate, and Lambda in the most appropriate managed way. Which solution should be selected?

A. S3 Intelligent-Tiering

B. EC2 Spot Instances only

C. Compute Savings Plans

D. AWS Budgets alerts only


**Answer: C — Compute Savings Plans**

**Explanation:** Compute Savings Plans apply flexible discounts across eligible compute services.


## Question 296

A media startup is designing a workload on AWS. The architecture needs to control costs by committing to a consistent amount of compute usage across EC2, Fargate, and Lambda while meeting the stated requirement. Which solution should be selected?

A. Compute Savings Plans

B. EC2 Spot Instances only

C. AWS Budgets alerts only

D. S3 Intelligent-Tiering


**Answer: A — Compute Savings Plans**

**Explanation:** Compute Savings Plans apply flexible discounts across eligible compute services.


## Question 297

A global SaaS provider is designing a workload on AWS. The platform team needs to run interruption-tolerant batch jobs at the lowest EC2 price with the least operational overhead. Which solution should be selected?

A. RDS Reserved Instances

B. EC2 Dedicated Hosts

C. On-Demand Capacity Reservations only

D. EC2 Spot Instances


**Answer: D — EC2 Spot Instances**

**Explanation:** Spot Instances use spare EC2 capacity at steep discounts but can be interrupted.


## Question 298

A retail company is designing a workload on AWS. The solutions architect must run interruption-tolerant batch jobs at the lowest EC2 price while following AWS best practices. Which solution should be selected?

A. EC2 Spot Instances

B. EC2 Dedicated Hosts

C. On-Demand Capacity Reservations only

D. RDS Reserved Instances


**Answer: A — EC2 Spot Instances**

**Explanation:** Spot Instances use spare EC2 capacity at steep discounts but can be interrupted.


## Question 299

A media startup is designing a workload on AWS. The architecture needs to run interruption-tolerant batch jobs at the lowest EC2 price in the most appropriate managed way. Which solution should be selected?

A. On-Demand Capacity Reservations only

B. RDS Reserved Instances

C. EC2 Dedicated Hosts

D. EC2 Spot Instances


**Answer: D — EC2 Spot Instances**

**Explanation:** Spot Instances use spare EC2 capacity at steep discounts but can be interrupted.


## Question 300

A financial services company is designing a workload on AWS. A new workload must run interruption-tolerant batch jobs at the lowest EC2 price while meeting the stated requirement. Which solution should be selected?

A. On-Demand Capacity Reservations only

B. EC2 Dedicated Hosts

C. EC2 Spot Instances

D. RDS Reserved Instances


**Answer: C — EC2 Spot Instances**

**Explanation:** Spot Instances use spare EC2 capacity at steep discounts but can be interrupted.


## Question 301

A retail company is designing a workload on AWS. The solutions architect must guarantee EC2 capacity in a specific Availability Zone for a planned event with the least operational overhead. Which solution should be selected?

A. Route 53 weighted routing

B. An S3 reservation

C. On-Demand Capacity Reservation

D. A Savings Plan only


**Answer: C — On-Demand Capacity Reservation**

**Explanation:** Capacity Reservations reserve compute capacity in a specified AZ.


## Question 302

A media startup is designing a workload on AWS. The architecture needs to guarantee EC2 capacity in a specific Availability Zone for a planned event while following AWS best practices. Which solution should be selected?

A. On-Demand Capacity Reservation

B. Route 53 weighted routing

C. A Savings Plan only

D. An S3 reservation


**Answer: A — On-Demand Capacity Reservation**

**Explanation:** Capacity Reservations reserve compute capacity in a specified AZ.


## Question 303

A financial services company is designing a workload on AWS. A new workload must guarantee EC2 capacity in a specific Availability Zone for a planned event in the most appropriate managed way. Which solution should be selected?

A. On-Demand Capacity Reservation

B. An S3 reservation

C. Route 53 weighted routing

D. A Savings Plan only


**Answer: A — On-Demand Capacity Reservation**

**Explanation:** Capacity Reservations reserve compute capacity in a specified AZ.


## Question 304

A healthcare organization is designing a workload on AWS. The design must guarantee EC2 capacity in a specific Availability Zone for a planned event while meeting the stated requirement. Which solution should be selected?

A. On-Demand Capacity Reservation

B. Route 53 weighted routing

C. An S3 reservation

D. A Savings Plan only


**Answer: A — On-Demand Capacity Reservation**

**Explanation:** Capacity Reservations reserve compute capacity in a specified AZ.


## Question 305

A media startup is designing a workload on AWS. The architecture needs to receive alerts when forecasted or actual AWS spending exceeds a threshold with the least operational overhead. Which solution should be selected?

A. AWS Artifact

B. AWS Cost Explorer only

C. AWS Budgets

D. Amazon CloudWatch Logs


**Answer: C — AWS Budgets**

**Explanation:** Budgets tracks cost or usage and sends alerts based on thresholds.


## Question 306

A financial services company is designing a workload on AWS. A new workload must receive alerts when forecasted or actual AWS spending exceeds a threshold while following AWS best practices. Which solution should be selected?

A. AWS Artifact

B. AWS Cost Explorer only

C. AWS Budgets

D. Amazon CloudWatch Logs


**Answer: C — AWS Budgets**

**Explanation:** Budgets tracks cost or usage and sends alerts based on thresholds.


## Question 307

A healthcare organization is designing a workload on AWS. The design must receive alerts when forecasted or actual AWS spending exceeds a threshold in the most appropriate managed way. Which solution should be selected?

A. AWS Cost Explorer only

B. AWS Artifact

C. AWS Budgets

D. Amazon CloudWatch Logs


**Answer: C — AWS Budgets**

**Explanation:** Budgets tracks cost or usage and sends alerts based on thresholds.


## Question 308

A global SaaS provider is designing a workload on AWS. The platform team needs to receive alerts when forecasted or actual AWS spending exceeds a threshold while meeting the stated requirement. Which solution should be selected?

A. AWS Artifact

B. Amazon CloudWatch Logs

C. AWS Cost Explorer only

D. AWS Budgets


**Answer: D — AWS Budgets**

**Explanation:** Budgets tracks cost or usage and sends alerts based on thresholds.


## Question 309

A financial services company is designing a workload on AWS. A new workload must analyze historical AWS spending and usage trends with the least operational overhead. Which solution should be selected?

A. AWS Shield

B. AWS Cost Explorer

C. Amazon Inspector

D. Amazon Route 53


**Answer: B — AWS Cost Explorer**

**Explanation:** Cost Explorer visualizes and analyzes historical cost and usage.


## Question 310

A healthcare organization is designing a workload on AWS. The design must analyze historical AWS spending and usage trends while following AWS best practices. Which solution should be selected?

A. Amazon Route 53

B. AWS Shield

C. AWS Cost Explorer

D. Amazon Inspector


**Answer: C — AWS Cost Explorer**

**Explanation:** Cost Explorer visualizes and analyzes historical cost and usage.


## Question 311

A global SaaS provider is designing a workload on AWS. The platform team needs to analyze historical AWS spending and usage trends in the most appropriate managed way. Which solution should be selected?

A. Amazon Inspector

B. AWS Shield

C. Amazon Route 53

D. AWS Cost Explorer


**Answer: D — AWS Cost Explorer**

**Explanation:** Cost Explorer visualizes and analyzes historical cost and usage.


## Question 312

A retail company is designing a workload on AWS. The solutions architect must analyze historical AWS spending and usage trends while meeting the stated requirement. Which solution should be selected?

A. AWS Cost Explorer

B. Amazon Route 53

C. AWS Shield

D. Amazon Inspector


**Answer: A — AWS Cost Explorer**

**Explanation:** Cost Explorer visualizes and analyzes historical cost and usage.
