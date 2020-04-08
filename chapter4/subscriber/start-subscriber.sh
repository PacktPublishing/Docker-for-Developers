#!/bin/sh

# start-subscriber.sh

#export HOSTIP=`ip route get 8.8.8.8 | sed -n '/src/{s/.*src *\([^ ]*\).*/\1/p;q}'`

export HOSTIP=127.0.0.1
export LINKS='--link mosca --link redis --link mongodb'
yarn start


