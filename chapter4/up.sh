#!/bin/sh

./stop-all.sh
docker network create chapter4
./start-mosca.sh
./start-mongodb.sh
./start-redis.sh

###### SUBSCRIBER
cd subscriber
./run.sh

###### PUBLISHER
# publisher needs to exposee port 3000 so we can access the WWW interface
cd ../publisher
./run.sh
