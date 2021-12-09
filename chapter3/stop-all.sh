#!/bin/sh
# use command 'chmod u+x stop-all.sh' to add execute permissions

docker stop mongodb
docker stop mosca
docker stop redis