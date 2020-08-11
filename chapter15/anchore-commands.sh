#!/bin/bash

mkdir ~/aevolume
cd ~/aevolume

docker pull docker.io/anchore/anchore-engine:latest
docker create --name ae docker.io/anchore/anchore-engine:latest

# curl option: curl https://docs.anchore.com/current/docs/engine/quickstart/docker-compose.yaml > docker-compose.yaml
docker cp ae:/docker-compose.yaml ~/aevolume/docker-compose.yaml
docker rm ae

docker-compose pull
docker-compose up -d

# Container option: docker pull anchore/engine-cli:latest

#Python installation
apt-get update
apt-get install python-pip
pip install anchorecli

# Container CLI: docker run  -it anchore/engine-cli


anchore-cli --u admin --p foobar --url http://localhost:8228/v1/ system status


anchore-cli --u admin --p foobar --url http://localhost:8228/v1/ image add alpine:latest
anchore-cli --u admin --p foobar --url http://localhost:8228/v1/ image wait alpine:latest
anchore-cli --u admin --p foobar --url http://localhost:8228/v1/ image vuln alpine:latest os

# Add policies - update with your values
# anchore-cli policy add /path/to/image/policy/bundle.json
# anchore-cli policy activate <Policy ID>


anchore-cli --u admin --p foobar policy list


