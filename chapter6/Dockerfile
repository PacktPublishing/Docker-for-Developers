FROM alpine:20191114
RUN apk update && \
    apk add nodejs
RUN addgroup -S app && adduser -S -G app app
RUN mkdir -p /app/public /app/server
ADD src/package.json* /app/
RUN npm -s install
COPY src/public/ /app/public/
COPY src/server/ /app/server/
WORKDIR /app
RUN npm run compile
USER app
EXPOSE 3000
ENTRYPOINT npm start
