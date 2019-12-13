#!/usr/bin/env bash

# shell.sh

# This script starts a shell in an already built container.  Sometimes you need to poke around using the shell
# to diagnose problems.

# stop any existing running container
./stop.sh

# fire up the container with shell (/bin/bash)
docker run -it --rm --name chapter2 chapter2 /bin/bash
