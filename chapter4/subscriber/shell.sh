#!/usr/bin/env bash

# shell.sh

# This script starts a shell in an already built container.  Sometimes you need to poke around using the shell
# to diagnose problems.

# stop any existing running container
#docker stop subscriber

# fire up the container with shell (/bin/bash)
docker run -it --rm --name subscriber dockerfordevelopers/subscriber /bin/bash || docker container exec -it subscriber /bin/bash
