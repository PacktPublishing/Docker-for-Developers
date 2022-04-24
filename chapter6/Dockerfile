FROM node:14-alpine
RUN addgroup -S app && adduser -S -G app app
RUN mkdir -p /app/public /app/server
ADD src/package.json* /app/
WORKDIR /app
RUN npm -s install
COPY src/public/ /app/public/
COPY src/server/ /app/server/
COPY src/.babelrc /app/
RUN npm run compile
USER app
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
