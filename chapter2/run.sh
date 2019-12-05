#!/usr/bin/env bash

# run the container in the background

docker run \
    --detach \
    --rm \
    -p8086:80 \
    --name="chapter2" \
    -v `pwd`:/home/app \
    chapter2
