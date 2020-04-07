#!/bin/sh

export HOSTIP=`ip route get 8.8.8.8 | sed -n '/src/{s/.*src *\([^ ]*\).*/\1/p;q}'`

docker-compose -f docker-compose-base.yml -f docker-compose-simple.yml up --build

