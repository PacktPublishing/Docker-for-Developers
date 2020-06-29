# Chapter 10 - Monitoring Docker in Production with Prometheus, Grafana, and Jaeger

# Credits
The [eks-fluent-bit-daemonset-rbac.yaml](eks-fluent-bit-daemonset-rbac.yaml) configuration template has been adapted from [Alex Rhea's AWS blog on Kubernetes Logging powered by AWS for Fluent Bit](https://aws.amazon.com/blogs/containers/kubernetes-logging-powered-by-aws-for-fluent-bit/).

The [bin/install-fluentbit-daemonset.sh](bin/install-fluentbit-daemonset.sh) script and the configuration file [eks-fluent-bit-daemonset-policy.json](eks-fluent-bit-daemonset-policy.json) have been adapted from [Michael Hausenblas's AWS blog on Centralized Container Logging with Fluent Bit](https://aws.amazon.com/blogs/opensource/centralized-container-logging-fluent-bit/) and the its [Apache 2-licenced](https://github.com/aws-samples/amazon-ecs-fluent-bit-daemon-service/blob/master/LICENSE) [GitHub
repository](https://github.com/aws-samples/amazon-ecs-fluent-bit-daemon-service/), bearing the following copyright notice:

   Amazon Ecs Fluent Bit Daemon Service
   Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.

The specific items referenced above are Apache 2.0 licensed; the rest of the code for this chapter is MIT licensed.
