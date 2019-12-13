#!/usr/bin/env bash

# run.sh

# run the container in the background
# /data is persisted using a named container

docker run \
    --detach \
    --rm \
    -p8086:80 \
    -v name:/data \
    --name="chapter2" \
    chapter2
