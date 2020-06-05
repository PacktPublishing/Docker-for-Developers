#!/bin/sh

./start-mosca.sh
./start-mongodb.sh
./start-redis.sh
cd subscriber && ./start-subscriber.sh & cd..
cd publisher && ./start-publisher.sh & cd..
