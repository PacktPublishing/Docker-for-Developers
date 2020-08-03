# Docker for Developers - Code in Action Steps

## Chapter 8: Deploying Docker Apps to Kubernetes
This chapter shows how to deploy Docker apps to Kubernetes in both a local learning environment, and in the cloud through Amazon EKS.

### Technical Requirements
- [ ] You must have Kubernetes distribution set up on your workstation, for example Docker Desktop or Minikube.
- [ ] You must have Git installed and you must have cloned the Git repository to your workstation:
      https://github.com/PacktPublishing/Docker-for-Developers.git
- [ ] You must have access to an AWS account with administrator privileges

### Docker Desktop with Kubernetes
- [ ] Enable Kubernetes in the menu

### Verifying that your Kubernetes installation works
- [ ] test your config with `kubectl get pods -A`

### Installing Helm
- [ ] install helm via brew
- [ ] add the stable Helm chart repo

### Deploying the NGINX ingress controller and ShipIt Clicker locally

- [ ] install nginx-ingress via helm
- [ ] build shipitclicker and push it to Docker Hub
- [ ] edit the values.yaml file to reflect your Docker Hub user
- [ ] install shipitclicker with helm
- [ ] expose redis via port forwarding and connect to it for troubleshooting

### Objects
- [ ] create a new Helm chart
- [ ] create a new ConfigMap
- [ ] examine the helm-generated template for shipitclicker
- [ ] create a secret from a plain file
- [ ] create a secret from a yaml template file
- [ ] get a list of secrets
- [ ] describe one of the secrets
- [ ] retrieve the secret cleartext from a stored secret
- [ ] edit a kubectl secret
- [ ] update the Shipit Clicker session secret

### Spinning up AWS EKS with CloudFormation
- [ ] Ensure you have an IAM administrator-level user in the account with MFA enabled
- [ ] Create access keys and use them to configure the AWS CLI
- [ ] Verify that the AWS CLI works
- [ ] Generate an EC2 key pair for the EKS cluster
- [ ] Save the key pair in your ~/.ssh directory and set permissions appropriatly
- [ ] Record your public IP address in CIDR notation
- [ ] Launch the AWS EKS Quick Start CloudFormation templates

### Configuring the EKS cluster
- [ ] ssh to the bastion host
- [ ] explore the cluster using kubectl and helm commands

### Deploying an EKS-ready ShipIt Clicker to EKS
- [ ] Deploy shipitclicker from the bastion host with Helm
- [ ] Verify that the ALB Ingress Controller is created
- [ ] Enter the DNS name of the ALB into a browser, see the game running

### Using AWS Elastic Container Registry with AWS EKS
- [ ] Create an ECR repository
- [ ] push ShipIt Clicker to the ECR repository

### Using labels and namespaces to segregate environments
- [ ] Configure the local environment to respond to an alternate host name
- [ ] Deploy the helm chart with a different label

