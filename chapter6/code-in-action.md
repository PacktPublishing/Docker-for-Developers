# Docker for Developers - Code in Action Steps

## Chapter 6: Deploying Applications with Docker Compose
This chapter explores the simplest possible production deployment scenario:
running Docker and docker-compose on a single host.

### Technical Requirements
- [ ] You must have Git, Docker and docker-compose on your workstation
- [ ] You must have cloned the Git repository: 
      https://github.com/PacktPublishing/Docker-for-Developers.git
- [ ] Change directory to Docker-for-Developers/chapter6

### Selecting a host and operating system for single-host deployment
- [ ] You must have an Internet-connected host to run your application
      (The example code runs without modification on CentOS 7)
- [ ] Ensure the host has a stable IP address
- [ ] Map a DNS record to the IP address

## Using operating system packages to install Docker and git
On the Internet-connected host:
- [ ] Install Docker
- [ ] Add the non-root user to the Docker user group, and add it to your session
- [ ] Make sure the Docker service is enabled
- [ ] Install docker-compose
- [ ] Install git

## Deploying using configuration files and support scripts
- [ ] Examine the Dockerfile
- [ ] Examine the docker-compose.yml file
- [ ] Prepare the production .env file

### Handling secrets
- [ ] copy env.sample to env and change the SESSION_SECRET variable

### Deploying for the first time
- [ ] use `docker-compose up -d` to start the services in the background
- [ ] verify the services are running with `docker-compose ps`
- [ ] check the system logs for errors with `docker-compose logs`
- [ ] visit the ShipitClicker web site on the host with an IP address
- [ ] visit the ShipitClicker web site on the host with a domain name
- [ ] troubleshoot any problems that may occur

### Supporting scripts
- [ ] add support scripts to the system path on the Internet-connected host
- [ ] test the `restart.sh`
- [ ] connect to Redis with `redis-cli.sh`

## Monitoring small deployments – logging and alerting
- [ ] use `docker-compose logs 2>&1 | less -R` to view application logs
- [ ] use `docker ps` to see the running containers
- [ ] store logs from a container to a log file and use tail to view them

