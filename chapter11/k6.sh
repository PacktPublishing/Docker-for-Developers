#!/bin/sh

if [ "$1" = "" ]; then
    echo "Usage:"
    echo "  $0 hostname/IP"
    exit 1
fi

# get HOSTADDR = my host's actual LAN IP (not public IP), and :port if needed
export HOSTADDR=$1

# integer variables (so we can do math)
declare -i MOVES
declare -i DURATION
declare -i MINUTES

#
# SETTINGS VARIABLES YOU MIGHT CHANGE:
#
USERS=10              # number of simultaneous users to simulate
MOVES=50             # number of moves/clicks to simulate per VU

# CONFIGURATION VARIABLES CALUCLATED FROM SETTINGS
DURATION=MOVES*4      # duration tests should run
MINUTES=DURATION/60
echo $MOVES " moves, duration " $DURATION " seconds ("$MINUTES "minutes)"

docker run \
       --rm \
       --name k6 \
       -eHOSTADDR=$HOSTADDR \
       -eMOVES=$MOVES \
       -i loadimpact/k6 \
       run \
       --vus $USERS \
       --duration "$DURATION"s \
       - <k6/test.js
