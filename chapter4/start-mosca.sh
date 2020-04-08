#!/bin/bash

# start-mosca.sh

# This is the name of the service.  It is used as the name of the running container, and is also passed
# as the TITLE environment to the container.

SERVICE=mosca

# Stop any running MongoDB with our SERVICE name.  We're about to, maybe, download a newer image from Docker Hub.

echo "stopping $SERVICE"
docker stop $SERVICE

# Remove/delete the previous container

echo "removing old $SERVICE"
docker rm $SERVICE

# Pull latest minor point version of MongoDB

echo "pulling $SERVICE"
docker pull matteocollina/$SERVICE

# Now we run it!
# Mosca/MQTT uses port 1883 as its standard port.
# Mosca enables MQTT over WebSocket so you can MQTT pub/sub in the browser.
# To support browser access, we need to expose port 80.

#docker run \
#  --name $SERVICE \
#  -d \
#  --restart always \
#  -e TITLE=$SERVICE \
#  -p 1883:1883 \
#  -p 80:80 \
#  -v /var/db/mosca:/db \
#  matteocollina/mosca

docker run \
  --name $SERVICE \
  -d \
  --restart always \
  -e TITLE=$SERVICE \
  --network chapter4 \
  -v /var/db/mosca:/db \
  matteocollina/mosca

