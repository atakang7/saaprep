# Hands-On Lab Index

Keep labs small and delete resources when finished. Prefer free-tier-safe choices, but always check pricing before creating resources.

## Lab 1: IAM Role For EC2

Goal: understand temporary credentials.

- Create an IAM role with read-only access to one S3 bucket.
- Attach it to an EC2 instance profile.
- Verify the instance can read the bucket without storing access keys.
- Clean up the instance and role when finished.

## Lab 2: Private Subnet With S3 Endpoint

Goal: understand private routing to AWS services.

- Create or sketch a VPC with public and private subnets.
- Add a gateway VPC endpoint for S3.
- Compare the route table with and without the endpoint.
- Explain why this can reduce NAT gateway dependency.

## Lab 3: S3 Lifecycle Policy

Goal: connect access patterns to storage cost.

- Create an S3 bucket.
- Add lifecycle rules for transition and expiration.
- Explain when Standard, Standard-IA, Intelligent-Tiering, and Glacier classes fit.
- Delete test objects and bucket when finished.

## Lab 4: Queue-Based Decoupling

Goal: understand resilience through buffering.

- Sketch or build a producer -> SQS -> Lambda/worker pattern.
- Configure a dead-letter queue in the design.
- Explain how retries and visibility timeout affect processing.

## Lab 5: DR Strategy Drill

Goal: map RTO/RPO to architecture.

- Pick one sample workload.
- Design backup and restore, pilot light, warm standby, and active-active versions.
- Estimate relative cost and recovery speed.
