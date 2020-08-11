#!/bin/bash

# Update with your Azure details

wget https://raw.githubusercontent.com/Microsoft/OMS-Agent-for-Linux/master/installer/scripts/onboard_agent.sh && sh onboard_agent.sh -w <workspace_id> -s <workspace_key>

sudo /opt/microsoft/omsagent/bin/service_control restart [<workspace_id>]

sudo docker run --privileged -d -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/docker/containers:/var/lib/docker/containers -e WSID="<workspace_id>" -e KEY="<workspace_key>" -h=`hostname` -p 127.0.0.1:25225:25225 --name="omsagent" --restart=always microsoft/oms


