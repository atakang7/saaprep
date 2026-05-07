# Flashcards

Format: question first, answer hidden below it. Add your own cards from mistakes.

## Starter Cards

Q: What is the safest default identity pattern for an application running on EC2?

A: Attach an IAM role through an instance profile and grant only the required permissions.

---

Q: Security group or network ACL for instance-level traffic filtering?

A: Security group. Security groups are stateful and attached to network interfaces.

---

Q: Network ACLs are stateful or stateless?

A: Stateless. Return traffic must be explicitly allowed.

---

Q: What service helps provide private access from a VPC to S3 without internet routing?

A: A gateway VPC endpoint for S3.

---

Q: What is the usual high-availability pattern for an EC2 web tier?

A: Auto Scaling group across multiple Availability Zones behind a load balancer.

---

Q: RDS Multi-AZ primarily improves what?

A: Availability and failover, not read scaling.

---

Q: RDS read replicas primarily improve what?

A: Read scalability and sometimes read latency.

---

Q: Which service is usually the best decoupling buffer between a producer and workers?

A: Amazon SQS.

---

Q: Which DR pattern is lowest cost but has the longest recovery time?

A: Backup and restore.

---

Q: Which compute pricing model fits interruptible batch processing?

A: Spot Instances.

---

Q: Which S3 storage class is a good fit when access patterns are unknown?

A: S3 Intelligent-Tiering.

---

Q: CloudFront or Global Accelerator for caching static web content globally?

A: CloudFront.

---

Q: What service should you consider when private subnets send large amounts of traffic to S3?

A: Gateway VPC endpoint for S3, often to avoid NAT gateway routing and cost.
