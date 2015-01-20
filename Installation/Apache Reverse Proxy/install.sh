#!/bin/bash

# This script installs Apache 2, enables the Apache Proxy Mod and routes 
# all traffic from localhost:80/ to localhost:8080/angular/ and passes 
# the resulting pages back to the user.

# Please ensure that the apache config file is within the same dir together
# with this script.

# This replaces the default conf file, so we also make a backup of that

sudo -s
apt-get update
apt-get install apache2 -y
a2enmod proxy_http
cd /etc/apache2/sites-enabled
mv 000-default.conf 000-default_proxy-install.bkp
cd -
cp towels.conf /etc/apache2/sites-enabled/000-default.conf
service apache2 restart
exit 0
