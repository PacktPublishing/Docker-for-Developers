#!/bin/sh

export HOSTIP=`ip route get 8.8.8.8 | sed -n '/src/{s/.*src *\([^ ]*\).*/\1/p;q}'`

docker run \
  --rm \
  --name k6 \
  -eHOSTIP=$HOSTIP \
  -i loadimpact/k6 \
  run \
  --vus 10 \
  --duration 10s \
  - <k6/test.js


