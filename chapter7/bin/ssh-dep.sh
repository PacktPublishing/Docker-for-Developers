#!/usr/bin/env bash
set -euo pipefail
prod="${shipit_prod_user}@${shipit_prod_host}"
port=${port:-80}
image=${image:-dockerfordevelopers/shipitclicker:latest}
ssh -i "$keyfile" -o StrictHostKeyChecking=no $prod <<EOF
set -euo pipefail
cd Docker-for-Developers/chapter7
git pull
docker pull "$image"
DOCKER_IMAGE="$image" PORT="$port" bin/restart.sh
EOF
