#!/bin/sh

# get HOSTIP = my host's actual LAN IP (not public IP)
export HOSTIP=`ip route get 8.8.8.8 | sed -n '/src/{s/.*src *\([^ ]*\).*/\1/p;q}'`

# integer variables (so we can do math)
declare -i MOVES
declare -i DURATION
declare -i MINUTES

#
# SETTINGSD VARIABLES YOU MIGHT CHANGE:
#
USERS=10              # number of simultaneous users to simulate
MOVES=500             # number of moves/clicks to simulate per VU

# CONFIGURATION VARIABLES CALUCLATED FROM SETTINGS
DURATION=MOVES*4      # duration tests should run
MINUTES=DURATION/60

echo $MOVES " moves, duration " $DURATION " seconds ("$MINUTES "minutes)"

docker run \
  --rm \
  --name k6 \
  -eHOSTIP=$HOSTIP \
  -eMOVES=$MOVES \
  -i loadimpact/k6 \
  run \
  --vus $USERS \
  --duration "$DURATION"s \
  - <k6/test.js


