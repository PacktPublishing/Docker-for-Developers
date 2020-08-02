# Docker for Developers - Code in Action Steps

## Chapter 7: Continuous Deployment with Jenkins
This chapter shows how to use Jenkins for continuous deployment of
a Docker-based application.

### Technical Requirements
- [ ] You must have Git, Docker and docker-compose on your workstation
- [ ] You must have cloned the Git repository to your workstation:
      https://github.com/PacktPublishing/Docker-for-Developers.git
- [ ] You need to have the application set up as shown in Chapter 6
- [ ] Change directory to Docker-for-Developers/chapter7

### Setting up a new Jenkins server
- [ ] Provision a new host for Jenkins, add a DNS name for it
- [ ] Set up Docker and docker-compose on the Jenkins server
- [ ] Install Jenkins on the Jenkins server via the command line
- [ ] Complete the Jenkins install through the GUI
- [ ] Add a swap file
- [ ] Set up HTTPS via a load balancer to protect the Jenkins server

### Testing Jenkins and Docker with a pipeline script
- [ ] Configure a Jenkins Item with a Hello World Jenkinsfile (Hello Docker)
- [ ] Build the Hello Docker job

### Connecting to the production server via SSH
- [ ] Generate an SSH keypair on your local workstation
- [ ] Add the SSH private key to the Jenkins configuration
- [ ] Add the SSH public key to the production server's configuration
- [ ] Test that SSH authentication is working from Jenkins to prod

### Use a Jenkins Pipeline job to SSH to the production server
- [ ] Configure a Jenkins Item with a Hello World Jenkinsfile (Hello Docker)
- [ ] Build the item and test that SSH connectivity is working

### Ensuring Jenkins has a GitHub username and security token credential
- [ ] Use GitHub to generate a security token credential
- [ ] Enter the token into Jenkins through Credentials
- [ ] Set up the GitHub Organization plugin
- [ ] Check that GitHub is talking to Jenkins via a webhook

### Creating Jenkins environment variables for production support
- [ ] Create environment variables for the production host and user

### Adding Docker Hub credentials to Jenkins credential manager
- [ ] Create a Docker Hub API token for Jenkins to use 
- [ ] Configure a Jenkins Credential with the Dockerhub API token

### Ensuring the previous production environment is stopped
- [ ] Stop the previous production server

### Pushing to Docker Hub and triggering a production deployment
- [ ] Build the Jenkins item for the master branch for Docker-for-Developers
- [ ] Examine the Jenkinsfile
- [ ] Check the Jenkins Console Output for the master branch job

### Creating a staging environment
- [ ] Provision an additional host for the staging environment
- [ ] Install docker and dependencies via `provision-docker.sh`
- [ ] Make sure that Staging has the SSH public key for Jenkins installed

### Creating Jenkins environment variables for staging support
- [ ] Create environment variables for the staging host and user
- [ ] Force push to the staging branch to trigger a deployment

