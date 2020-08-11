#!/bin/bash

docker run -d --name dd-agent \
    -v /var/run/docker.sock:/var/run/docker.sock:ro \
    -v /proc/:/host/proc/:ro \
    -v /path/to/cgroup/:/host/sys/fs/cgroup:ro \
    -e DD_API_KEY={API_KEY} \
    datadog/docker-dd-agent:latest
