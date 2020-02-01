# Chapter 6 - Deployment with Docker Compose

## Production Setup

* Copy `sample.env` to `.env`, edit it to match your production environment:

   cp sample.env .env
   vim .env

* run `docker-compose up -d`

## TODO: 

* Consider ditching babel, maybe use [`esm` as described in here](https://timonweb.com/tutorials/how-to-enable-ecmascript-6-imports-in-nodejs/)
