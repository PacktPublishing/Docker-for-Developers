#!/usr/bin/env bash

# debug.sh

# run container without making it a daemon - useful to see logging output

docker run \
    --rm \
    -p8086:80 \
    --name="chapter2" \
    -v `pwd`:/home/app \
    chapter2
