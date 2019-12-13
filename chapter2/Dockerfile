# we will inherit from  the Debian image on DockerHub
FROM debian

# set timezone so files' timestamps are correct
ENV TZ=America/Los_Angeles

# install apache and php 7.3
# we include procps and telnet so you can use these with shell.sh prompt
RUN apt-get update -qq >/dev/null && apt-get install -y -qq procps telnet apache2 php7.3 -qq >/dev/null

# add a user - this user will own the files in /home/app
RUN useradd --user-group --create-home --shell /bin/false app

# set up and copy files to /home/app
ENV HOME=/usr/app
WORKDIR /home/app
COPY . /home/app

# The PHP app is going to save its state in /data so we make a /data inside the container
RUN mkdir /data && chown -R app /data && chmod 777 /data

# we need custom php configuration file to enable userdirs
COPY php.conf /etc/apache2/mods-available/php7.3.conf

# enable userdir and php
RUN a2enmod userdir && a2enmod php7.3

# we run a script to stat the server; the array syntax makes it so ^C will work as we want
CMD  ["./entrypoint.sh"]
