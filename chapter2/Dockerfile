# we will inherit from  the Debian image on DockerHub
FROM debian
# set timezone so files' timestamps are correct
ENV TZ=America/Los_Angeles
# install apache and php 7.3
# we include procps and telnet so you can use these with shell.sh prompt
RUN apt-get update && apt-get install -y procps telnet apache2 php7.3
# add a user - this user will own the files in /home/app
RUN useradd --user-group --create-home --shell /bin/false app
# set up and copy files to /home/app
ENV HOME=/usr/app
WORKDIR /home/app
COPY . /home/app
# we need custom php configuration file to enable userdirs
COPY php.conf /etc/apache2/mods-available/php7.3.conf
# enable userdir and php
RUN a2enmod userdir && a2enmod php7.3
# we run a script to stat the server; the array syntax makes it so ^C will work as we want
CMD  ["./entrypoint.sh"]
