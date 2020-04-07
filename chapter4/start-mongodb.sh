#!/bin/bash
# start-mongodb.sh
SERVICE=mongodb # name of the service

# Change this to an EXISTING directory on the HOST where the mongodb database files will be created and maintained.
MONGO_DATADIR="/var/db/mongo"
# Stop any running MongoDB container, remove previous container, pull newer version
docker stop $SERVICE
docker rm $SERVICE
docker pull mongo:3.4

# Now we run it!
#docker run \
#  --name $SERVICE \
#  -d \
#  --restart always \
#  -e TITLE=$SERVICE \
#  -p 27017:27017 \
#  -v "$MONGO_DATADIR":/data/db \
#  mongo:3.4

docker run \
  --name $SERVICE \
  -d \
  --restart always \
  -e TITLE=$SERVICE \
  --network chapter4 \
  -v "$MONGO_DATADIR":/data/db \
  mongo:3.4

