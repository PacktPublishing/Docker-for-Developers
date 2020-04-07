# we will inherit from the NodeJS v12 alpine OS image on DockerHub

FROM node:12-alpine
ENV TZ=America/Los_Angeles
WORKDIR /home/app
# add a user - this user will own the files in /home/app
RUN adduser -S app
ENV HOME=/home/app

VOLUME ["/home/app/node_modules"]
# this will install/update the node_modules in our volume
RUN yarn install --frozen-lockfile --production && npm prune --production
COPY . /home/app

# we run a script to start the server; the array syntax makes it so ^C will work as we want
CMD  ["yarn", "start"]
