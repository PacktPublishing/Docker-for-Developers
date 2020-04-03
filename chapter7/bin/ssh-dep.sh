#!/usr/bin/env bash
set -euo pipefail
prod="${shipit_prod_user}@${shipit_prod_host}"
cmd="
cd Docker-for-Developers;
docker pull;
bin/restart.sh
"
ssh -i "$keyfile" -o StrictHostKeyChecking=no $prod $cmd
