#!/bin/bash

# start-mongodb.sh

#### ENV VARS

# You can set these in this script (uncomment and edit the lines) or set them in your .zshrc/.bashrc/etc.

# Change this to an EXISTING directory on the HOST where the mongodb database files will be created and maintained.

#MONGO_DATADIR="$HOME/data"

#### /ENV VARS

if [[ "$MONGO_DATADIR" == "" ]]; then
  echo "The MONGO_DATADIR environment variable must be set.  See start-mongodb.sh for details."
  exit 1
fi

# This is the name of the service.  It is used as the name of the running container, and is also passed
# as the TITLE environment to the container.

SERVICE=mongodb

# Stop any running MongoDB with our SERVICE name.  We're about to, maybe, download a newer image from Docker Hub.

echo "stopping $SERVICE"
docker stop $SERVICE

# Remove/delete the previous container

echo "removing old $SERVICE"
docker rm $SERVICE

# Pull latest minor point version of MongoDB

echo "pulling $SERVICE"
docker pull mongo:3.4

# Now we run it!

docker run \
  --name $SERVICE \
  -d \
  --restart always \
  -e TITLE=$SERVICE \
  -p 27017:27017 \
  -v "$MONGO_DATADIR":/data/db \
  mongo:3.4

