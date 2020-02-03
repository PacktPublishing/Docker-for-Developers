#!/usr/bin/env bash
set -euo pipefail
sudo yum -q install -y \
    yum-utils \
    device-mapper-persistent-data \
    lvm2 \
    java-1.8.0-openjdk \
    git
sudo yum-config-manager --add-repo \
   https://download.docker.com/linux/centos/docker-ce.repo
sudo yum-config-manager --add-repo \
   https://pkg.jenkins.io/redhat/jenkins.repo
sudo yum -q install -y \
    docker-ce \
    docker-ce-cli \
    containerd.io \
    jenkins
sudo usermod -aG docker "$USER"
sudo usermod -aG docker jenkins
newgrp docker
sudo systemctl enable docker
sudo systemctl enable jenkins
sudo systemctl restart docker
sudo systemctl restart jenkins
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose


