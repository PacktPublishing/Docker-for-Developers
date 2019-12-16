# Dockerfile for Chapter 5 of https://github.com/ModusCreateOrg/docker-book
#
# This represents a minimalistic Dockerfile for the Shipit Clicker game
# prototype that gets some things right from a local development
# perspective,  but has some limitations that Chapter 6 will address.
#
# Very often developers start with what they know best:
# traditional Linux distributions that you might run on your desktop.
# This may help with debugging the Dockerfile initially but comes
# at a steep cost because the images are large (hundreds of megabytes).
FROM ubuntu:bionic
# Alas, -qq is not fully quiet on Ubuntu 18.04 and we must redirect
# stdout to /dev/null to avoid verboase output:
#     https://askubuntu.com/a/1134785
RUN apt-get -qq update && \
    apt-get -qq install -y nodejs npm > /dev/null
RUN mkdir -p /app/public /app/server
# Copying just the package files ensures that the `npm install` only runs
# if the package files are altered.
COPY src/package.json* /app
# Ensure we are in the right directory before running npm commands
WORKDIR /app
# Install the packages (silently)
RUN npm -s install
# The .dockerignore file lets us avoid putting node_modules into images
COPY src/.babelrc \
     src/.env \
     src/.nodemonrc.json \
     /app/
COPY src/public/ /app/public/
COPY src/server/ /app/server/

EXPOSE 3000
ENTRYPOINT DEBUG='shipit-clicker:*' npm run dev
