#!/bin/bash

ls -l /etc/apache2/envvars
. /etc/apache2/envvars
exec apache2 -D FOREGROUND

