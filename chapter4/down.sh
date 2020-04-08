#!/bin/sh

docker stop publisher
docker stop subscriber
docker stop redis
docker stop mongodb
docker stop mosca
docker network rm chapter4

