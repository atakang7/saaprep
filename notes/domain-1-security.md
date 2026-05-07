# Domain 1: Design Secure Architectures

Official weight: 30% of scored content.

Source: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain1.html

## What To Master

- Secure access to AWS resources
- Secure workloads and applications
- Data security controls

## Identity And Access

Core rule: use temporary credentials and roles whenever possible.

- IAM user: long-term identity, best avoided for apps and automation when roles work.
- IAM role: assumed identity with temporary credentials.
- IAM policy: JSON permissions attached to users, groups, roles, or resources.
- Resource policy: permissions attached to a resource, such as an S3 bucket or KMS key.
- SCP: account-level guardrail in AWS Organizations; does not grant permissions by itself.
- IAM Identity Center: workforce access across accounts and applications.
- STS: issues temporary credentials for assumed roles and federation.

Decision patterns:

- Cross-account access: create a role in the target account and allow a trusted principal to assume it.
- Multiple account governance: use AWS Organizations, SCPs, and Control Tower patterns.
- Human access: use IAM Identity Center instead of many standalone IAM users.
- App on EC2: use an instance profile role.
- App on Lambda: use a Lambda execution role.

## Network Security

- Security group: stateful, attached to ENIs, allow rules only.
- Network ACL: stateless, subnet level, allow and deny rules.
- Private subnet: no direct route to an internet gateway.
- NAT gateway: lets private subnet resources initiate outbound internet access.
- VPC endpoint: private access to supported AWS services without public internet routing.
- WAF: protects web apps from common HTTP-layer attacks.
- Shield: DDoS protection, with Shield Advanced for enhanced features.

Decision patterns:

- Need private access to S3 or DynamoDB: use a gateway VPC endpoint.
- Need private access to many AWS services or SaaS endpoints: consider interface VPC endpoints with PrivateLink.
- Need HTTP-layer filtering: use AWS WAF.
- Need DDoS protection for public workloads: know Shield and CloudFront patterns.

## Data Protection

- KMS: managed key service for encryption keys and key policies.
- ACM: TLS certificates for services like ALB and CloudFront.
- Secrets Manager: rotation-friendly storage for secrets.
- SSM Parameter Store: configuration and simple secret storage.
- S3 versioning: protects against accidental overwrite and delete.
- S3 Object Lock: write-once-read-many retention.

Decision patterns:

- Rotate database credentials automatically: Secrets Manager.
- Encrypt data at rest with customer control: KMS customer managed key.
- Enforce HTTPS to S3: bucket policy condition.
- Protect against accidental S3 deletes: versioning, MFA Delete when applicable, Object Lock for retention needs.

## Drill Prompts

- Design secure cross-account access for a deployment pipeline.
- Make a private EC2 application read from S3 without internet traffic.
- Choose between Secrets Manager and Parameter Store for app credentials.
- Restrict S3 access to a specific VPC endpoint.
