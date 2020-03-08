#!/usr/bin/env sh
exec docker run -it --rm redis:5-alpine3.10 redis-cli $*
