#!/bin/sh

TARGET=${1:?$0: Target URL parameter is required.}
USERS=${2:-1}   # number of simultaneous users to simulate
MOVES=${3:-500} # number of moves/clicks to simulate per VU

declare -i MOVES
declare -i DURATION
declare -i MINUTES

#
# SETTINGS VARIABLES YOU MIGHT CHANGE:
#

# CONFIGURATION VARIABLES CALUCLATED FROM SETTINGS
DURATION=MOVES*4      # duration tests should run
MINUTES=DURATION/60
echo $MOVES " moves, duration " $DURATION " seconds ("$MINUTES "minutes)"

docker run \
    --rm \
    --name k6 \
    -eTARGET=$TARGET \
    -eMOVES=$MOVES \
    -i loadimpact/k6 \
    run \
    --vus $USERS \
    --duration "$DURATION"s \
    - \
    < k6/test.js
