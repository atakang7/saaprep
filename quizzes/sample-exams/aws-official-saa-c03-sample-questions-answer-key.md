# AWS Official SAA-C03 Sample Questions Answer Key

Source: [aws-official-saa-c03-sample-questions.pdf](aws-official-saa-c03-sample-questions.pdf)

Use this after you finish the PDF questions. The answer letters match the official AWS answer key. The explanations below are short study notes, not a verbatim copy of the PDF rationale.

| Question | Answer | Study note |
| --- | --- | --- |
| 1 | A, B | Put NAT gateways in public subnets and update private subnet route tables so private EC2 instances can initiate outbound internet access. |
| 2 | C | EC2 hibernation preserves memory state by saving it to the encrypted EBS root volume, then restores it when the instance resumes. |
| 3 | C | A secondary elastic network interface can carry the private IP and be moved to the standby instance during failover. |
| 4 | A | Browser-based cross-origin requests to S3 need CORS configured on the bucket. |
| 5 | C, D | Use SSE-C when the customer supplies the key to S3, or use client-side encryption before uploading to S3. |
| 6 | A | For extra temporary capacity that cannot be interrupted, On-Demand Instances are safer than Spot Instances. |
| 7 | C | Use SQS to buffer vote submissions and workers to write to the database at a controlled rate. |
| 8 | B, E | High availability needs the web tier across multiple AZs behind a load balancer and the database tier moved to Multi-AZ RDS in private subnets. |
| 9 | C | Auto Scaling warmup prevents new instances from being counted before they are ready to serve traffic. |
| 10 | C | Aurora Replicas offload read traffic; applications should send reads to the replica endpoint and writes to the primary endpoint. |

Suggested review loop:

1. Take the PDF without looking at this file.
2. Mark each miss by domain: security, resilience, performance, or cost.
3. Add repeated misses to [../../mistakes.md](../../mistakes.md).
4. Turn the pattern, not the specific question, into a flashcard in [../../flashcards.md](../../flashcards.md).
