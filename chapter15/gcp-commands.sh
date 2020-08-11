#!/bin/bash


# Update with your details 

docker tag <source_image> <hostname>/<project_id>/<image>:<tag>

docker push <hostname>/<project_id>/<image>:<tag>
