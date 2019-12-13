#!/usr/bin/env bash

# run container without making it a daemon - useful to see logging output
# we are adding an anonymous volume for /tmp in the container so the
# conuter persists between runs.

docker run \
    --rm \
    -p8086:80 \
    --name="chapter2" \
    -v `pwd`:/home/app \
    -v name:/data \
    chapter2
