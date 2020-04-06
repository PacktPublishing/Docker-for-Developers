#!/usr/bin/env bash
set -euo pipefail
port=${port:-80}
prod="${shipit_prod_user}@${shipit_prod_host}"
staging="${shipit_staging_user}@${shipit_staging_host}"
image=${image:-dockerfordevelopers/shipitclicker:latest}
if [[ "$target" = "staging" ]]; then
    targetEnv="$staging"
    targetHost="$shipit_staging_host"
else
    targetEnv="$prod"
    targetHost="$shipit_prod_host"
fi
ssh -i "$keyfile" -o StrictHostKeyChecking=no "$targetEnv" <<EOF
set -euo pipefail
cd Docker-for-Developers/chapter7
git fetch
git checkout origin/"$GIT_BRANCH"
docker pull "$image"
set -a
VIRTUAL_HOST="$targetHost"
DOCKER_IMAGE="$image"
PORT="$port"
bin/restart.sh
EOF
