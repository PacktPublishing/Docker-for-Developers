#!/usr/bin/env bash

# debug.sh

# run subscriber container without making it a daemon - useful to see logging output

HOSTIP=`ip route get 8.8.8.8 | sed -n '/src/{s/.*src *\([^ ]*\).*/\1/p;q}'`

docker run \
    --rm \
    --name="subscriber" \
    -e HOSTIP=$HOSTIP \
    dockerfordevelopers/subscriber
