#!/usr/bin/env bash
set -euo pipefail
# Thanks https://stackoverflow.com/a/246128
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd "$DIR"
git pull
docker-compose build
docker-compose up -d
sleep 2
docker-compose ps
