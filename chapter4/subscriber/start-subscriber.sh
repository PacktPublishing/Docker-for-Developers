#!/bin/sh

# start-subscriber.sh

export HOSTIP=`ip route get 8.8.8.8 | sed -n '/src/{s/.*src *\([^ ]*\).*/\1/p;q}'`

yarn start


