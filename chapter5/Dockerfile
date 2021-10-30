# Note: the text of this differs from what was presented in Chapter 5
# and Chapter 6 as the original choice of ubuntu:bionic for a base container
# and the now-obsolete Node 8 runtime within proved to be problematic in 2021. 
# This is the sort of problem hinted at in Chapter 6 regarding using general-purpose
# OS images in the "Re-examining the initial Dockerfile" section, see pp. 122-134. 
#
# In switching from Ubuntu bionic to focal we also have to add an
# environment variable to the install to force a non-interactive package installation,
# per https://askubuntu.com/a/556387
FROM ubuntu:focal
RUN apt-get -qq update && \
    DEBIAN_FRONTEND=noninteractive apt-get -qq install -y nodejs npm > /dev/null
RUN mkdir -p /app/public /app/server
COPY src/package.json* /app
WORKDIR /app
RUN npm -s install
COPY src/.babelrc \
     src/.env \
     src/.nodemonrc.json \
     /app/
COPY src/public/ /app/public/
COPY src/server/ /app/server/
EXPOSE 3000
ENTRYPOINT DEBUG='shipit-clicker:*' npm run dev
