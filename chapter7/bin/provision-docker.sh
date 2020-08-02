#!/usr/bin/env bash
set -euo pipefail
sudo yum -q install -y \
    yum-utils \
    device-mapper-persistent-data \
    lvm2
sudo yum-config-manager --add-repo \
   https://download.docker.com/linux/centos/docker-ce.repo
sudo yum -q install -y \
    docker-ce \
    docker-ce-cli \
    containerd.io
sudo usermod -aG docker "$USER"
newgrp docker
sudo systemctl enable docker
sudo systemctl restart docker
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
