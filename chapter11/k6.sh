#!/usr/bin/env bash
set -euo pipefail

# Thanks https://stackoverflow.com/a/246128
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
TEST_DIR="$DIR/k6"

${DEBUG:-false} && set -vx
# Credit to https://stackoverflow.com/a/17805088
# and http://wiki.bash-hackers.org/scripting/debuggingtips
export PS4='+(${BASH_SOURCE}:${LINENO}): ${FUNCNAME[0]:+${FUNCNAME[0]}(): }'

declare -i MOVES
declare -i USERS
declare -i DURATION

TARGET=${1:?$0: Target URL parameter is required.}
USERS=${2:-1}   # number of simultaneous virtual users (VUs) to simulate
DURATION=${3:-60}  # number of seconds
MOVES=${4:-200} # number of moves/clicks to simulate per VU

cat <<EOF
*** Starting k6.io
Target         :   $TARGET
Virtual Users  : $USERS
Moves per Game : $MOVES
Total duration : $DURATION seconds
EOF

docker run \
    --rm \
    -i \
    --name k6 \
    -eDEBUG="${DEBUG:-false}" \
    -eTARGET="$TARGET" \
    -eMOVES="$MOVES" \
    loadimpact/k6 \
    run \
    --vus "$USERS" \
    --duration "$DURATION"s \
    - \
    < "$TEST_DIR/test.js"
