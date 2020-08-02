#!/usr/bin/env bash
set -euo pipefail
sudo yum -q install -y \
    device-mapper-persistent-data \
    git \
    lvm2 \
    yum-utils
sudo yum-config-manager --add-repo \
   https://download.docker.com/linux/centos/docker-ce.repo
sudo yum -q install -y \
    docker-ce \
    docker-ce-cli \
    containerd.io
sudo usermod -aG docker "$USER"
newgrp docker
sudo systemctl enable docker
sudo systemctl start docker
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
