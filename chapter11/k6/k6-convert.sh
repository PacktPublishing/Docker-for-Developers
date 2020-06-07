#!/bin/sh

docker run \
  --rm \
  --name k6 \
  -v ${PWD}/session.har:/var/session.har \
  -i loadimpact/k6 \
  convert \
  -O - \
  /var/session.har \
  > har-session.js
#- <./session.har
