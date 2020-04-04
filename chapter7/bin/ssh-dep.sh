#!/usr/bin/env bash
set -euo pipefail
prod="${shipit_prod_user}@${shipit_prod_host}"
ssh -i "$keyfile" -o StrictHostKeyChecking=no $prod <EOF
cd Docker-for-Developers/chapter7
git pull
docker pull
bin/restart.sh
EOF
