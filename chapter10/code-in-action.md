# Docker for Developers - Code in Action Steps

## Chapter 10: Monitoring Docker using Prometheus, Grafana, and Jaeger
This chapter shows how to set up monitoring and alerting using a variety of cloud-native tools.

### Technical Requirements
- [ ] You must have a working Kubernetes cluster in the cloud, as set up in Chapter 8
- [ ] You must have Git, the AWS CLI, Helm 3.x, and kubectl installed on your workstation
- [ ] Optional: you may use Spinnaker and Jenkins, as set up in Chapter 9 and Chapter 7, to support continuous deployment

### Setting up a demo application - ShipIt Clicker v7
- [ ] Setup Redis using the Bitnami helm charts locally and in the cloud
- [ ] Install ShipIt Clicker to the k8s local learning environment
- [ ] Install ShipIt Clicker to the k8s cloud EKS cluster
- [ ] Configure Jenkins and Spinnaker to point to this chapter (optional)

### Troubleshooting Kubernetes control plane issues with logs
- [ ] Examine the CloudWatch log streams for the EKS k8s cluster

### Storing logs with CloudWatch Logs
- [ ] Use the `install-fluentbit-daemonset.sh` script to ship kubernetes logs to CloudWatch Logs
- [ ] Use the CloudWatch Logs console to examine the logs from the Kubernetes pods
- [ ] Change the CloudWatch log retention period to a shorter time period

### Storing logs for the long term with AWS S3
- [ ] Clone the CloudWatch2S3 project to your workstation
- [ ] Follow its instructions to set up logs streaming from CloudWatch to S3

### Analyzing logs with CloudWatch Insights and Amazon Athena
- [ ] Use CloudWatch Insights to find the number of ShipIt Clicker games played

### Using the liveness, readiness, and startup probes in Kubernetes
- [ ] Force ShipIt Clicker to fail the readiness check with a test installation
- [ ] Uninstall the test installation and revert the change that forced failure

### Exploring Prometheus through its query and graph web interface
- [ ] Use kubectl to port-forward Prometheus to a local port
- [ ] Explore the Prometheus query interface and issue a `node_load1` query

### Adding Prometheus metrics to an application
- [ ] Examine the metrics code in ShipIt Clicker
- [ ] Examine the deployment helm chart for Prometheus annotations
- [ ] Play the ShipIt Clicker game
- [ ] Query prometheus for a custom metric

### Configuring Prometheus alerts
- [ ] Edit the ConfigMap where Prometheus alerts are defined
- [ ] View the alerts via the port-forwarded Prometheus console

### Sending notifications with the Prometheus Alertmanager
- [ ] Create a new app for slack, and configure a new incoming webhook
- [ ] Edit the Prometheus Alertmanager ConfigMap to add a notification
- [ ] Send a test alert via the Prometheus Alertmanager API
- [ ] Re-deploy the broken ShipIt Clicker application and get an alert
- [ ] Uninstall the broken ShipIt Clicker application

### Gaining access to Grafana
- [ ] Use kubectl to retrieve the Grafana ELB and secrets
- [ ] Log into the Grafana console and explore the dashboards
- [ ] Add some community managed dashboards to Grafana

### Adding a new dashboard with a custom query
- [ ] Add a new dashboard
- [ ] Add two widgets to track game stats: deployments and rate of deployments

### Exploring the Jaeger UI
- [ ] Explore Jaeger using the all-in-one Docker image locally

### Exploring the Jaeger client with ShipIt Clicker
- [ ] Examine the chapter10 files to verify we have the right libraries
- [ ] Examine the configuration of Jaeger inside ShipIt Clicker
- [ ] Look at the ShipIt Clicker games controller to see how tracing is done
- [ ] Use docker-compose to run the ShipIt Clicker app locally
- [ ] Inspect traces for ShipIt Clicker run through docker-compose

### Installing the Jaeger Operator
- [ ] Install the Jaeger Operator to your EKS cluster
- [ ] Edit the Jaeger deployment to get it to watch all namespaces
- [ ] Create a Jaeger Operator instance to configure Jaeger on the cluster
- [ ] Apply annotations to the Jaeger query ingress controller to expose it
