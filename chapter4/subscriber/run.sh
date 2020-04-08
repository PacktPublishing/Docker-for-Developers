#!/bin/sh

export SERVICE=subscriber
docker rm $SERVICE
./build.sh

echo "*************** starting subscriber"
docker run \
  --name $SERVICE \
  -d \
  --restart always \
  -e TITLE=$SERVICE \
  --network chapter4 \
  dockerfordevelopers/$SERVICE
echo "*************** started subscriber"
