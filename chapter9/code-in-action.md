# Docker for Developers - Code in Action Steps

## Chapter 9: Cloud-Native Continuous Deployment Using Spinnaker
This chapter shows how to deploy Docker apps to Kubernetes using Spinnaker, while
showing how an application and its supporting infrastructure as code templates may
evolve.

### Technical Requirements
- [ ] You must have a working Kubernetes cluster in the cloud, as set up in Chapter 8
- [ ] You must have Git, the AWS CLI, Helm 3.x, and kubectl installed on your workstation
- [ ] You must have access to an AWS account with administrator privileges

### Managing the EKS cluster from your local workstation
- [ ] Update your local Kubernetes configuration to talk to AWS EKS
- [ ] Ensure your CloudFormation template is configured to allow access

### Switching between local and cluster contexts
- [ ] Switch between local learning environment and cloud cluster contexts

### Verifying that you have a working ALB Ingress Controller
- [ ] Double-check that the ALB Ingress Controller is active

### Preparing a Route 53 domain and certificate
- [ ] Verify that you can retrieve the DNS SOA record
- [ ] Use ACM to generate an SSL certificate

### Building and deploying ShipIt Clicker v5
- [ ] Customize a values.yaml file for your domain and ECR container registry
- [ ] Build and deploy ShipIt Clicker
- [ ] Verify the Application Load Balancer is working

### Setting up Spinnaker in an AWS EKS cluster using Helm
- [ ] Create a spinnaker namespace and install Spinnaker with helm
- [ ] Connect to Spinnaker via kubectl proxy

### Exposing Spinnaker via ALB Ingress Controllers
- [ ] Edit the ingress controller templates to add your DNS entries and the IP address of your workstation
- [ ] Apply the changes
- [ ] Verify that the ingress controllers get elb addresses
- [ ] Apply Route53 A records with aliases to the elb addresses
- [ ] Verify you can reach Spinnaker via the DNS name

### Configuring Spinnaker using Halyard
- [ ] Connect to the Halyard maintenance pod via kubectl exec
- [ ] Override the base URLs for Spinnaker to use your DNS entries

### Connecting Spinkaker to Jenkins
- [ ] Generate a Jenkins API token for Spinnaker
- [ ] Connect to the Halyard maintenance pod via kubectl exec
- [ ] Set the API key and Jenkins url with halyard


### Setting up Jenkins to integrate with both Spinnaker and ECR
- [ ] Install the AWS ECR Jenkins plugin
- [ ] Restart Jenkins

### Creating a limited AWS IAM user for Jenkins
- [ ] Create the Jenkins user via the AWS CLI 
- [ ] Attach a policy granting access to ECR to the user
- [ ] Create an access key for the Jenkins user

### Configuring Jenkins with credentials for AWS and ECR
- [ ] Add the AWS access key to Jenkins as a global credential
- [ ] Add a credential of type Secret with the container registry

### Configuring Jenkins with a multi-branch pipeline for the Jenkinsfile
- [ ] Add a new multi-branch pipeline with your forked copy of the repo
- [ ] Check that the new multi-branch pipeline builds and pushes a container to ECR

### Connecting Spinnaker to GitHub
- [ ] Generate a new access token for GitHub for Spinnaker
- [ ] Connect to the Halyard maintenance pod and configure the GitHub token

### Connecting Spinnaker to Docker Hub
- [ ] Generate a new API token for Spinnaker in Docker Hub
- [ ] Connect to the Halyard maintenance pod and configure the Docker Hub token

### Deploying ShipIt Clicker with a simple deployment strategy in Spinnaker
- [ ] Add a spinnaker application
- [ ] Add a spinnaker pipeline
- [ ] Configure the pipeline with the details for ShipIt Clicker
- [ ] Add an additional stage for baking the manifest
- [ ] Configure the manifest baking stage with image and host overrides
- [ ] Configure the Produces Artifacts section with a k8s template output
- [ ] Add the Deploy (Manifest) stage
- [ ] Configure the Deploy (Manifest) stage with the k8s template artifact
- [ ] Trigger a Spinnaker deployment
- [ ] Set up a DNS entry for the Ingress Controller in Route 53 

