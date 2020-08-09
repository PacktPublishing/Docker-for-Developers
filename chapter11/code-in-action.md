# Docker for Developers - Code in Action Steps

## Chapter 11: Scaling and Load Testing Docker Applications
This chapter shows how you can both scale and load test Docker applications, using Kubernetes, Envoy and k6.

### Technical Requirements
- [ ] You must have a working Kubernetes cluster in the cloud, as set up in Chapter 8
- [ ] You must have Git, the AWS CLI, Helm 3.x, and kubectl installed on your workstation
- [ ] You must have a local Kubernetes learning environment with both the NGINX ingress controller and the Jaeger operator deployed.
- [ ] You must have access to an AWS account with administrator privileges

### Using the updated ShipIt Clicker v8
- [ ] Ensure you have the Redis helm chart from Bitnami installed locally
- [ ] Inspect the ShipIt Clicker configs that have better Prometheus support
- [ ] Build ShipItClicker and push it to Docker Hub
- [ ] Use Helm to install ShipItClicker to your local learning environment
- [ ] Tag the build of ShipItClicker and push it to ECR
- [ ] Use Helm to install ShipIt Clicker to your cloud EKS k8s environment
- [ ] Look at the Kubernetes logs to verify correct installation

###  Scaling your Kubernetes cluster
- [ ] Scale nodes out by adjusting the CloudFormation template
- [ ] Scale nodes in by draining a single node and terminating it
- [ ] Scale pods manually through deployments

### Scaling the cluster dynamically (autoscaling)
- [ ] Verify that the Cluster Autoscaler is running
- [ ] Tail the logs of the Cluster Autoscaler
- [ ] Increase the number of replicas to 50
- [ ] Use kubectl commands to check on the number of nodes and deployments
- [ ] Scale the deployment back down to 2 replicas
- [ ] Watch the nodes scale in after 10 minutes

### Configuring the Horizontal Pod Autoscaler
- [ ] Install the Metrics server
- [ ] Activate the Horizontal Pod Autoscaler
- [ ] Use Apache Bench to test the Horizontal Pod Autoscaler

### Setting up Envoy
- [ ] Examine ShipIt Clicker's envoy configuration
- [ ] Set the request limit artifically low for the Envoy circuit breaker
- [ ] Redeploy the application
- [ ] Test the circuit breaker with 1 concurrent user with ab - expect success
- [ ] Test again with 50 concurrent users and expect failure
- [ ] Reset the request limit and redeploy the application

### Testing scalability and performance with k6
- [ ] Run a minimal load test with k6.io versus the deployed app

### Recording and replaying network sessions
- [ ] Record a HAR-based test session
- [ ] Convert it to k6 test code
- [ ] Run a brief load test with the k6-har code
- [ ] Run a longer load test with the k6-har code

### Hand-crafting a more realistic load test
- [ ] Examine the code from the k6 hand-crafted test
- [ ] Run a stress test versus ShipIt Clicker
- [ ] Remove the Horizontal Pod Autoscaler and scale in ShipItClicker replicas
- [ ] Run another stress test versus ShipIt Clicker
