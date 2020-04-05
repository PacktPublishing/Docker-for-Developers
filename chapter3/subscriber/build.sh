#!/bin/sh

# build.sh

# we use the "docker build" command to build a container named "subscriber" from . (current directory)
# Dockerfile is found in the current directory, and determines how the conatiner is built.

docker build -t dockerfordevelopers/subscriber .
