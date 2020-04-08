#!/bin/sh

./start-mosca.sh
./start-mongodb.sh
./start-redis.sh
./subscriber/start-subscriber.sh
./publisher/start-publisher.sh
