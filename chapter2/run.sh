#!/usr/bin/env bash

docker run \
    --detach \
    --rm \
    -p8086:80 \
    --name="chapter2" \
    -v `pwd`:/home/app \
    chapter2
