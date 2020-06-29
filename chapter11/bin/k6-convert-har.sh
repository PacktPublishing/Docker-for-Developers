#!/bin/sh
set -euo pipefail

# Thanks https://stackoverflow.com/a/246128
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
TEST_DIR="$DIR/../src/test/k6"

${DEBUG:-false} && set -vx
# Credit to https://stackoverflow.com/a/17805088
# and http://wiki.bash-hackers.org/scripting/debuggingtips
export PS4='+(${BASH_SOURCE}:${LINENO}): ${FUNCNAME[0]:+${FUNCNAME[0]}(): }'

cd "$TEST_DIR"
docker run \
    --rm \
    -i \
    --name k6 \
    -v "$PWD/session.har:/var/session.har" \
    loadimpact/k6 \
    convert \
    -O - \
    /var/session.har \
    > har-session.js
