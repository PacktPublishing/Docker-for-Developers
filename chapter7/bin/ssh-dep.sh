#!/usr/bin/env bash
set -euo pipefail
prod="${shipit_prod_user}@${shipit_prod_host}"
staging="${shipit_staging_user}@${shipit_staging_host}"
port=${port:-80}
image=${image:-dockerfordevelopers/shipitclicker:latest}
if [[ "$target" = "staging" ]]; then
    targetEnv="$staging"
else
    targetEnv="$prod"
fi
ssh -i "$keyfile" -o StrictHostKeyChecking=no "$targetEnv" <<EOF
set -euo pipefail
cd Docker-for-Developers/chapter7
git pull
docker pull "$image"
DOCKER_IMAGE="$image" PORT="$port" bin/restart.sh
EOF
