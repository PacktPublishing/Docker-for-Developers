# Dockerfile for Chapter 6 of https://github.com/ModusCreateOrg/docker-book
# Use alpine instead of ubuntu for smaller builds - pin version for consistent builds
FROM alpine:20191114
RUN apk update && \
    apk add nodejs
# Create app user so that Docker runs app as normal user, not root
RUN addgroup -S app && adduser -S -G app app
RUN mkdir -p /app/public /app/server
ADD src/package.json* /app/
# Install the packages (silently)
RUN npm -s install
COPY src/public/ /app/public/
COPY src/server/ /app/server/
WORKDIR /app
# Build production version of app
RUN npm run compile
USER app
EXPOSE 3000
# Use production build of app instead of dev version
ENTRYPOINT npm start
