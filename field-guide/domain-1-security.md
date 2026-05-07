# Domain 1: Design Secure Architectures

Weight: 30% of scored content.

Official task topics:

- 1.1 Design secure access to AWS resources
- 1.2 Design secure workloads and applications
- 1.3 Determine appropriate data security controls

## Domain Story: The Cloud City Needs Doors, Streets, And Vaults

Security questions usually ask you to protect a city. IAM is the badge office. VPC networking is the street plan. KMS, backups, lifecycle, and retention are the vaults under the bank. The exam wants you to pick the right lock, not install every lock AWS sells.

Simple framework: IDENTITY -> NETWORK -> DATA.

- Identity decides who can ask.
- Network decides where traffic can travel.
- Data controls decide what stays protected even if something else goes wrong.

## Topic 1.1: Design Secure Access To AWS Resources

Mini-story: You are running the badge office. People, apps, accounts, and AWS services all show up asking for access. Your job is to issue the smallest useful badge, make it temporary when possible, and keep the master key locked away.

Framework: WHO-WHAT-WHERE-CONDITION.

- Who is the principal?
- What action is allowed?
- Which resource is affected?
- Which condition narrows the permission?

### 10 Important Things

1. Protect the root user like a break-glass account.

   The root user has full power over the AWS account, including billing and account-level actions. For the exam, root should have MFA, no routine daily use, and no long-term access keys. If an answer uses root credentials for an application, script, or team workflow, it is almost always wrong. Think of root as the glass-covered emergency switch: useful in rare account emergencies, dangerous as a normal door handle.

2. Prefer IAM roles and temporary credentials over long-term access keys.

   IAM roles are the clean answer for AWS services, EC2 instances, Lambda functions, ECS tasks, and cross-account access. Roles are assumed through AWS STS and produce temporary credentials, which reduces the damage window if credentials leak. Long-term access keys are sometimes used for external systems, but the exam loves safer patterns such as roles, federation, or IAM Roles Anywhere when applicable. If the question says "application running on EC2 needs S3 access", your reflex should be instance profile role.

3. Read IAM policies as a sentence.

   A policy says: principal can perform action on resource when conditions match. Identity-based policies attach to users, groups, or roles. Resource-based policies attach to resources such as S3 buckets, KMS keys, SQS queues, SNS topics, and Lambda functions. The best exam answers often combine identity policy and resource policy thinking, especially for cross-account access.

4. Use least privilege, then tighten with conditions.

   Least privilege means granting only the actions and resources required for the job. Conditions make permissions sharper: require MFA, restrict source IP, require a VPC endpoint, limit regions, or require encryption headers. The exam often hides the best answer behind a condition key, such as allowing S3 access only through a specific VPC endpoint. Broad wildcards are convenient in real life, but suspicious in SAA answer choices.

5. Use groups for people and roles for workloads.

   IAM groups make human permission management simpler: developers, auditors, admins, and operators can each receive appropriate policies. Workloads should usually use roles, not users. Groups cannot be assumed and roles do not permanently belong to a person. Keep this mental split: people get organized through identity systems, workloads get temporary role credentials.

6. Use IAM Identity Center for workforce access across accounts.

   IAM Identity Center is the modern AWS service for centralized workforce access to multiple AWS accounts and applications. It works well with external identity providers and permission sets. If the scenario has many employees, many accounts, and a desire for centralized sign-in, IAM Identity Center is usually more appropriate than creating IAM users in every account. The exam signal is "centralized access", "multiple AWS accounts", or "federated workforce identity".

7. Cross-account access needs trust plus permission.

   Cross-account role access has two halves. The target account role must trust the source principal, and the source principal must have permission to assume that role. If either side is missing, the door does not open. On the exam, this prevents a common trap: adding only an IAM permission in one account without configuring the trust relationship in the other.

8. AWS Organizations and SCPs are guardrails, not permission grants.

   Service control policies set the maximum available permissions for accounts in an organization. They do not grant access by themselves. If an SCP denies an action, no identity policy can override it. This is perfect for multi-account governance, such as preventing public S3 buckets or blocking use of unapproved regions.

9. Resource policies are powerful when the resource must make the decision.

   S3 bucket policies, KMS key policies, SQS queue policies, SNS topic policies, and Lambda resource policies can allow or deny access based on principals and conditions. Resource policies are especially useful for cross-account access and for enforcing access paths. For example, an S3 bucket policy can deny requests that do not come through a specific VPC endpoint. The story version: sometimes the badge office says yes, but the building still checks its own guest list.

10. Shared responsibility tells you whose problem it is.

   AWS secures the cloud: facilities, physical infrastructure, managed service foundations, and global infrastructure. You secure what you put in the cloud: identity, data, network rules, operating systems on EC2, and application configuration. Managed services shift work away from you, but not all responsibility. If a question asks who patches the guest OS on EC2, that is you; if it asks who protects the physical data center, that is AWS.

## Topic 1.2: Design Secure Workloads And Applications

Mini-story: The city now has streets, buildings, gates, and public plazas. Some apps face the world, some live in back rooms, and some only need private roads to AWS services. Your job is traffic design with security instincts.

Framework: PUBLIC, PRIVATE, PROTECTED.

- Public resources accept internet traffic intentionally.
- Private resources have no direct inbound internet route.
- Protected resources use layered controls: routing, security groups, NACLs, WAF, Shield, endpoints, and secrets.

### 10 Important Things

1. Public and private subnets are about routing, not names.

   A public subnet has a route to an internet gateway and resources can be reachable if they also have public IPs and open security rules. A private subnet has no direct route to an internet gateway. On the exam, a common secure web pattern is ALB in public subnets and application or database tiers in private subnets. The label "private" is earned by the route table.

2. Security groups are stateful instance-level gates.

   Security groups attach to network interfaces and allow traffic in or out. They are stateful, so return traffic is automatically allowed. They support allow rules only, which keeps them simpler than network ACLs. If the question asks for instance or ENI-level access control, security groups are usually the first answer.

3. Network ACLs are stateless subnet-level filters.

   NACLs apply at the subnet boundary and support allow and deny rules. They are stateless, so inbound and outbound rules both matter. They are useful for broad subnet guardrails, such as blocking a known malicious IP range. The exam trap is forgetting ephemeral return ports because NACLs do not remember connection state.

4. Route tables decide the roads.

   Security groups and NACLs can allow traffic, but route tables decide whether traffic has a path. Internet gateways support public internet paths, NAT gateways support outbound internet from private subnets, and VPC endpoints support private paths to AWS services. If packets have no route, permission rules do not matter. In story terms, a badge cannot help if the road does not exist.

5. NAT gateways are for outbound internet from private subnets.

   A NAT gateway in a public subnet lets private resources initiate outbound IPv4 internet connections while preventing unsolicited inbound connections. It is not a private path to AWS services; it is a managed translation point to the internet. For heavy S3 or DynamoDB traffic, a gateway VPC endpoint is often better because traffic stays on the AWS network and can reduce NAT dependency. Exam signal: "private instances need software updates from the internet" points to NAT gateway.

6. VPC endpoints keep AWS service traffic private.

   Gateway endpoints are used for S3 and DynamoDB. Interface endpoints use PrivateLink and create elastic network interfaces for many other AWS services. Endpoints are high-yield because they improve security and can help cost by avoiding NAT processing for supported traffic. If a question says "must not traverse the public internet" for AWS service access, think VPC endpoint.

7. WAF and Shield protect the public edge.

   AWS WAF filters HTTP and HTTPS requests, such as SQL injection, cross-site scripting, and bad bot patterns. AWS Shield provides DDoS protection, with Shield Advanced for stronger protection and response features. CloudFront plus WAF is a common front-door pattern for public web apps. If the threat is Layer 7 web attack, WAF is usually the answer; if the threat is DDoS, look for Shield and edge services.

8. Secrets belong in secret stores, not code.

   AWS Secrets Manager is the strong default for database credentials and secrets that need rotation. Systems Manager Parameter Store can hold configuration and simple secrets, but Secrets Manager is usually the exam answer when automatic rotation is required. Environment variables can be acceptable for references, but hardcoded secrets are bad architecture. The exam likes to punish "store credentials in the AMI" and "put access keys in source code".

9. Secure application access may use Cognito, IAM Identity Center, or API controls.

   Amazon Cognito is commonly used for customer-facing application identity: sign-up, sign-in, and tokens for apps. IAM Identity Center is workforce access. API Gateway authorizers, IAM auth, Cognito user pools, and resource policies help protect APIs. The key is audience: employees use workforce identity; app users use app identity.

10. Detection services tell you when the city smells smoky.

   GuardDuty looks for threats from account, network, and DNS activity. Inspector finds vulnerabilities in workloads. Macie helps discover sensitive data in S3. Security Hub centralizes findings, Detective helps investigation, and Firewall Manager helps manage firewall policy across accounts. These services rarely replace IAM or network controls; they add visibility and response.

## Topic 1.3: Determine Appropriate Data Security Controls

Mini-story: Now we reach the vault. Some data is ordinary paperwork, some is customer secrets, some must be retained for years, and some must be recoverable after a bad delete. Your job is to label it, lock it, back it up, and prove you did.

Framework: CLASSIFY -> ENCRYPT -> CONTROL -> RECOVER -> RETAIN.

### 10 Important Things

1. Classify data before choosing controls.

   Sensitive data needs stronger controls than public assets. Amazon Macie helps discover sensitive data in S3, while Lake Formation can help govern data lake access. Classification drives encryption, retention, access policy, backup, and monitoring choices. Exam signal: if the question mentions PII or sensitive data in S3, Macie is probably nearby.

2. Encrypt data at rest with the right key model.

   Many AWS services support encryption at rest by default or by configuration. AWS KMS is the common exam service for controlled encryption keys. AWS owned keys are simplest, AWS managed keys reduce management, and customer managed keys give more policy and rotation control. When the requirement says "customer control over key policy", choose customer managed KMS keys.

3. Encrypt data in transit with TLS and ACM.

   Data in transit should use TLS. AWS Certificate Manager provisions and manages public and private TLS certificates for services such as load balancers and CloudFront. The exam often phrases this as "encrypt traffic between clients and the application". For internet-facing web apps, an HTTPS listener on ALB or CloudFront with ACM certificates is a common answer.

4. KMS key policies are not decoration.

   KMS permissions are controlled by key policies, IAM policies, and sometimes grants. A user can have IAM permission to call KMS, but if the key policy blocks them, access fails. Cross-account KMS use requires careful key policy and IAM permission alignment. Think of the KMS key as a vault door with its own guest list.

5. S3 security is a bundle, not one button.

   High-yield S3 controls include Block Public Access, bucket policies, IAM policies, access points, default encryption, versioning, Object Lock, replication, and lifecycle policies. The exam often asks for a specific S3 behavior: prevent public access, enforce encryption, retain objects, or recover deleted objects. Do not pick the fanciest S3 feature; pick the one that maps to the requirement.

6. Backups protect against failure, mistakes, and migrations.

   AWS Backup can centralize backup policies across supported services. RDS automated backups support point-in-time restore. DynamoDB point-in-time recovery can rewind a table after accidental writes or deletes. EBS snapshots protect volumes, and S3 versioning helps recover overwritten objects. Exam signal: "accidental deletion" points to versioning, PITR, snapshots, or backup policies depending on the service.

7. Replication is not the same as backup.

   Replication copies data to another place, often quickly. Backup creates a recovery point. Replication can faithfully copy bad changes, deletes, or corruption if not designed carefully. For disaster recovery, you may need both replication for low RPO and backups for recovery from human or application error.

8. Retention controls keep data for the required time.

   S3 Object Lock supports write-once-read-many retention for compliance-style requirements. Lifecycle policies can transition data to cheaper storage classes or expire it after a retention period. Glacier classes fit archival use cases with different retrieval needs. If the question says records must not be changed or deleted for a fixed period, think Object Lock.

9. Rotate secrets, keys, and certificates on purpose.

   Secrets Manager can rotate supported secrets automatically, especially database credentials. KMS supports automatic rotation for symmetric customer managed keys, and ACM can renew eligible certificates. Rotation reduces long-term exposure if a credential or key is compromised. The exam clue is often "must rotate credentials automatically with minimal operational overhead".

10. Compliance needs evidence, not just good intentions.

   CloudTrail records API activity, Config tracks resource configuration, Artifact provides compliance reports, and Audit Manager helps collect audit evidence. These tools do not replace secure architecture, but they prove what happened and whether resources drifted. If the scenario asks for auditability, governance, or compliance evidence, look beyond encryption alone. A secure design should be observable and explainable.
