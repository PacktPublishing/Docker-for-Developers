# we will inherit from the NodeJS v12 image on DockerHub
FROM node:12

# set timezone so files' timestamps are correct
ENV TZ=America/Los_Angeles

# we include procps and telnet so you can use these with shell.sh prompt
RUN apt-get update -qq >/dev/null && apt-get install -y -qq curl procps telnet >/dev/null

# add a user - this user will own the files in /home/app
RUN useradd --user-group --create-home --shell /bin/false app

# set up and copy files to /home/app
ENV HOME=/usr/app
WORKDIR /home/app
COPY . /home/app

# install our NodeJS packages (from package.json)
RUN yarn install

# we run a script to start the server; the array syntax makes it so ^C will work as we want
CMD  ["yarn", "start"]
