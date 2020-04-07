#!/bin/bash

# start-redis.sh

# This is the name of the service.  It is used as the name of the running container, and is also passed
# as the TITLE environment to the container.

SERVICE=redis

# Stop any running MongoDB with our SERVICE name.  We're about to, maybe, download a newer image from Docker Hub.

echo "stopping $SERVICE"
docker stop $SERVICE

# Remove/delete the previous container

echo "removing old $SERVICE"
docker rm $SERVICE

# Pull latest minor point version of MongoDB

echo "pulling $SERVICE"
docker pull $SERVICE

# Now we run it!

#docker run \
#  --name $SERVICE \
#  -d \
#  --restart always \
#  -e TITLE=$SERVICE \
#  -p 6379:6379 \
#  $SERVICE

docker run \
  --name $SERVICE \
  -d \
  --restart always \
  -e TITLE=$SERVICE \
  --network chapter4 \
  $SERVICE

