# Chapter 5 - Alternatives for running Docker in production

This is part of the [Docker for Developers](https://github.com/ModusCreateOrg/docker-book) project.

This chapter introduces an application called _ShipIt Clicker_, which is an [incremental game](https://en.wikipedia.org/wiki/Incremental_game) where the [ShipIt Squirrel](https://www.quora.com/On-GitHub-what-is-the-significance-of-the-Ship-It-squirrel) encourages you to deploy Docker containers to production at an ever higher rate. See the [_ShipIt Clicker_ Specification Document](ShipIt_Clicker-spec.md) for more details about the design of the game.

## Prototype version of _ShipIt Clicker_
Chapter 5 contains a proof of concept version of the game, an early stage prototype that demonstrates both the application features and the supporting platform. The application deployment is specified through a [Dockerfile](Dockerfile) and [docker-compose.yml](docker-compose.yml) file. The version of _ShipIt Clicker_ in Chapter 5 needs some love before it can go to production.

Chapters 6 through 12 will feature successively more sophisticated versions of _ShipIt Clicker_, along with varied and sophisticated means to deploy it to production.

## Local deployment of _ShipIt Clicker_

    docker-compose up -d
    docker-compose ps

Verify that _ShipIt Clicker_ is running by visiting: http://127.0.0.1:8000/

