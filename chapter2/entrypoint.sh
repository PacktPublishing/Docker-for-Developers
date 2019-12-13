#!/bin/bash

# we need to source apache's envvars in order to configure apache properly
. /etc/apache2/envvars

echo "entrypoint.sh"
ls -l
ls -ldg /data
ls -l /data/

# some shells will allow the user to click on the URL in the following lines
echo && echo && echo "----> Point your browser at http://localhost:8086/~app/index.php" && echo && echo

# run apache not as daemon (in the foreground)
exec apache2 -D FOREGROUND

