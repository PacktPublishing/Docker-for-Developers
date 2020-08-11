# Docker for Developers - Code in Action Steps
## Chapter 15 Scanning, Monitoring, and Using Third-Party Tools

Note: This recording is of a MacBook Pro with iTerm2.

This video goes with Chapter 15 of the Packt Publishing book "Docker for Developers"
You should be reading along with Chapter 15 and preparing to install Anchore and cAdvisor
Feel free to pause the video to be able to take your time viewing the commands and output.

### Pull Anchore
- [ ] Create a new directory called aevolume
- [ ] Navigate into it 
- [ ] Pull the latest anchore engine 
- [ ] Wait for the pull command to finish running

### Docker create 
- [ ] Run docker create for the Anchore engine

### Grab the docker-compose.yaml
- [ ] Use curl to grab a copy of docker-compose.yaml and store locally
- [ ] You should see the file download

### Run docker-compose
- [ ] Run the docker-compose pull command
- [ ] Review the various Anchore components being pulled
- [ ] Run docker-compose up command with -d flag
- [ ] Watch Anchore compoenents being created
- [ ] Install the anchorecli with pip3 
- [ ] Grab the Anchore engine status via the commandline tool
- [ ] Review the output 

### Run a scan
- [ ] Add alpine ready for scanning
- [ ] Check the output from Anchore
- [ ] Analyze Alpine
- [ ] Review the output
- [ ] Run an OS level vulnerability scan

### List Policies
- [ ] Run the list command
- [ ] Review the policy list output 

### Review stats
- [ ] List containers
- [ ] Select a container 
- [ ] Run the stats command against it
- [ ] Review output

### cAdvisor
- [ ] Run the cAdvisor container
- [ ] Open the browser to localhost port 8080
- [ ] Review the stats for your container 

