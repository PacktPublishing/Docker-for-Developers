# Docker for Developers - Code in Action Steps

## Chapter 13 - Docker Security Fundamentals and Best Practices
Note: This recording is of a MacBook Pro with iTerm2.

This video goes with Chapter 13 of the Packt Publishing book "Docker for Developers"
You should be reading along with Chapter 13 where you explore security tips
Feel free to pause the video to be able to take your time viewing the commands and output.

### Exploring DOCKER_CONTENT_TRUST
- [ ] Run the export command so DOCKER_CONTENT_TRUST is equal to 1 
- [ ] Run the docker pull command
- [ ] Review the output message 
- [ ] Run the export command so the DOCKER_CONTENT_TRUST flag is equal to 0

### Create the .dockerignore
- [ ] Create a .dockerignorefile
- [ ] Add the example entries 
- [ ] Save and exit the file 

### No new privileges
- [ ] Copy the docker run command
- [ ] Execute it

### Mount securtiy
- [ ] Create a new folder called testfiles
- [ ] Run the docker command to mount it with the readonly flag and attempt to add a file to the mount
- [ ] Review the Read-only file system message

### Create file
- [ ] Use ps to find your container 
- [ ] Stop the container
- [ ] Remove the container
- [ ] Execute docker run
- [ ] Expose file content 

### Drop capabilities
- [ ] Execute the command with the --cap-drop=chown command 

### Multistage build
- [ ] Open the Dockerfile
- [ ] Update the file with your values ie. id_rsa key and ssh server
- [ ] Save and exit the file


