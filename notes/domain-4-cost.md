# Domain 4: Design Cost-Optimized Architectures

Official weight: 20% of scored content.

Source: https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain4.html

## What To Master

- Cost-optimized storage
- Cost-optimized compute
- Cost-optimized databases
- Cost-optimized networks

## Cost Tools

- Cost Explorer: analyze historical and forecasted spend.
- AWS Budgets: alerts for cost or usage thresholds.
- Cost and Usage Report: detailed billing data.
- Cost allocation tags: map cost to teams, apps, or environments.
- Trusted Advisor: can surface cost optimization checks depending on support plan.

## Storage Cost

- S3 Standard: frequent access.
- S3 Standard-IA and One Zone-IA: infrequent access with retrieval charges.
- S3 Glacier classes: archive options with different retrieval times.
- S3 Intelligent-Tiering: automatic tiering when access patterns are unknown.
- EBS gp3: common cost-performance default for general-purpose SSD.

Decision patterns:

- Unknown or changing S3 access pattern: Intelligent-Tiering.
- Long-term archive with rare access: Glacier class based on restore time.
- Frequent access and low latency: S3 Standard.
- Lower EBS cost with configurable IOPS/throughput: gp3.

## Compute Cost

- On-Demand: flexible, no commitment.
- Reserved Instances: commitment for steady EC2/RDS usage.
- Savings Plans: commitment by spend, flexible across eligible compute.
- Spot Instances: cheapest, interruptible workloads.
- Auto Scaling: pay for needed capacity, not peak all the time.
- Lambda/Fargate: can reduce operations and idle-capacity cost for suitable workloads.

Decision patterns:

- Steady predictable compute: Savings Plans or Reserved Instances.
- Fault-tolerant batch jobs: Spot.
- Variable event-driven workload: Lambda.
- Need container portability with less instance management: Fargate.

## Database Cost

- Right-size instances and storage.
- Use read replicas only when needed.
- Use Aurora Serverless or DynamoDB on-demand for variable demand when it fits requirements.
- Use DynamoDB provisioned capacity for predictable traffic.
- Cache expensive reads when appropriate.

Decision patterns:

- Predictable DynamoDB traffic: provisioned capacity plus auto scaling.
- Unpredictable DynamoDB traffic: on-demand capacity.
- Relational workload with idle periods: evaluate serverless options.
- Expensive repeated reads: cache before scaling the database indefinitely.

## Network Cost

- NAT gateways can be expensive because of hourly and data processing charges.
- VPC endpoints can reduce public data paths for supported services.
- Cross-AZ and cross-Region traffic can add cost.
- CloudFront can reduce origin transfer and improve latency.

Decision patterns:

- Private subnet resources access S3 heavily: gateway VPC endpoint.
- Many private resources calling supported AWS APIs: interface endpoints may help, but compare hourly costs.
- Avoid unnecessary cross-AZ chatter.
- Use CloudFront for global content delivery and origin offload.

## Drill Prompts

- Reduce cost for a bursty queue-processing system.
- Optimize S3 storage for logs retained for 7 years.
- Choose a purchasing model for a 24/7 production web tier.
- Reduce NAT gateway data processing cost for S3-heavy workloads.
