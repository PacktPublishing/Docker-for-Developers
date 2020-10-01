# Specification for _ShipIt Clicker_

This is part of the [Docker for Developers](https://github.com/PacktPublishing/Docker-for-Developers) project.

_ShipIt Clicker_, is an [incremental game](https://en.wikipedia.org/wiki/Incremental_game) where the [ShipIt Squirrel](https://www.quora.com/On-GitHub-what-is-the-significance-of-the-Ship-It-squirrel) encourages you to deploy Docker containers to production at an ever higher rate. 

Chapters 5 through 11 will feature successively more sophisticated versions of _ShipIt Clicker_, along with varied and sophisticated means to deploy it to production.

## _ShipIt Clicker_ Vision

You have to deploy more and more containers to production, or you will disappoint ShipIt Squirrel!

1. Starting the game shows a splash screen with a "Start" button and a "Credits" button
1. Clicking on the "Credits" button will show author information and a license summary and a link back to the repository.
1. Clicking on the "Start" button will change to the main game screen, with a clicker button and a store button.
1. The clicker button is labeled "Deploy" and when you click it a shipping container flys across the screen. 
1. Clicking multiple times will start more containers to animate and will increment a count. 
1. At higher ship rates multiple containers fly across the screen, or a boat full of shipping containers, or a fleet of containers.
1. You get a currency called Squirrel Dollars or `SQ$` for each production deployment. 
1. You will see the rate at which you are deploying software to production in deploys / minute
1. You can sign into the game with GitHub to save your progress.
1. When the ShipIt Squirrel pops up in the window, the game says "Ship it!" and you get an 8x multiple stacked on the current multiplier if you click while the ShipIt Squirrel is visible. ShipIt will have a 5% chance of appearing every 10 second
1. Click faster and the current multiple grows from 1x to 2x to 4x to 8x to 16x to 32x. The max multiple is 2x your current single click ship rate.
1. You can buy upgrades in the _ShipIt Store_ by pressing the Store button  once you have deployed sufficient containers to production. 
1. The upgrade costs below are set low to facilitate testing the game, the final amounts should be set higher so that it takes longer to get them in an exponentially increasing way if you play the game longer: 
   1. 200 SQ$: Script: allows you to ship 2 containers (times current multiple) with every deploy click
   1. 400 SQ$: Composer: automatically ships 4 containers (times current multiple) to production every minute
   1. 800 SQ$: Host: allows you to ship 8 containers (times current multiple) with every deploy click
   1. 1600 SQ$: Engine: automatically ships 16 containers (times current multiple) to production every second
   1. 32000 SQ$: Cluster: allows you to ship 32 containers (times current multiple) with every deploy click
   1. 64000 SQ$: Orchestrator: automatically ships 64 containers (times current multiple) to production every second
   1. 128000 SQ$: Multi-Cloud: allows you to ship 128 containers (times current multiple) with every deploy click


## Chapter 5 target: Prototype version of ShipIt Clicker

The verison of _ShipIt Clicker_ in Chapter 5 represents an application that is in an early prototype phase. It has docker-compose running an application that works, but needs some love before it can really go to production.

It has a splash screen with a Start button and a Credits button. 

Clicking on the Credits button displays a screen with a copyright statement and a link to the repository, and an OK button that goes back to the main screen.

Clicking on the Start button switches to the main screen, saying "Ship it!". The main screen just has the deploy button and counts up `SQ$` when you click, with the count stored in a database, without any other graphics or sounds. 

Future chapters will have versions that add more features, related to the concepts introduced in the chapters.

### Technology Plan

#### First-cut prototype plan
Build a first cut prototype with a plain HTML5 front end, with vanilla JavaScript handling handling DOM manipulation and AJAX calls.

Use [docker-compose](https://docs.docker.com/compose/) to assemble the initial application components.

Use [Yeoman](https://yeoman.io/) to generate an application skeleton with [generator-express-no-stress](https://github.com/cdimascio/generator-express-no-stress) to get a decent RESTful API platform.

Use [Redis](https://redis.io/) as the database. Redis is a mostly-in-memory NoSQL data structure store, suitable for high-performance applications that require low latency and atomic updates. Redis has an [HINCRBY](https://redis.io/commands/hincrby) operator that we can use to update the score for a user in a performant way. Redis Labs supports multiple [redis](https://hub.docker.com/_/redis/) images on Docker Hub.

#### Future development plan

Introduce [Zepto](https://zeptojs.com/) if more complex DOM manipulation and AJAX call handling is needed.

Use [NGINX](https://www.nginx.com/) as a web server in order to terminate SSL. NGINX supports an [nginx](https://hub.docker.com/_/nginx/) image on Docker Hub. To support the nginx deployment use [nginx-docker-gen](https://github.com/jwilder/docker-gen) and [jrcs/letsencrypt-nginx-proxy-companion](https://github.com/JrCs/docker-letsencrypt-nginx-proxy-companion).

Use [LetsEncrypt](https://letsencrypt.org/) to automatically renew SSL certificates.

Use [SAMLify](https://github.com/tngan/samlify) to implement the SAML authentication handshake with GitHub.

Use [Cocos to build an HTML 5 game shell with a JavaScript front end](https://www.cocos.com/en/creator).


### Assets

For image and audio assets, _Shipit Clicker_ will use a combination of completely original content, plus assets licensed under permissive open source licenses, such as MIT, CC0, and possibly Creative Commons Attribution licensed content. Every licensed asset will have its source and license clearly marked in the documentation and in a Credits page.

#### Images

##### Images needed

1. Splash screen background - data center exterior photo
1. Splash screen background - data center interior photo
1. ShipIt Squirrel
1. Start button
1. Credits button
1. Credits frame
1. Headshot of @obscurerichard
1. Frame of main screen
1. Land with roadway
1. Railway bridge
1. Ocean
1. Ocean waves
1. Shipping container
1. Two Containers on a truck
1. Spinning truck wheels
1. Containers on a ship
1. Containers on a train
1. Spinning train wheels
1. Cluster of shipping containers towed by a squirrel with a hat riding a flying whale
1. Deploy button
1. Store button
1. Store background

##### ShipIt Squirrel inspiration
We may need to dig a bit for the provenance of the ShipIt Squirrel images or create an original illustration inspired by the body of work, as license clearance may be difficult to track down for many images. 

The Quora article [ShipIt Squirrel](https://www.quora.com/On-GitHub-what-is-the-significance-of-the-Ship-It-squirrel) discusses the origin of _ShipIt Squirrel_. 

See also: 

* https://twitter.com/cloudzepeda/status/730857467576524800
* https://github.com/hubot-scripts/hubot-shipit/blob/master/src/shipit.coffee
* https://ccsearch.creativecommons.org/search?q=squirrel&li=&lt=commercial,modification&categories=&extension=&aspect_ratio=&size=&provider=&searchBy=
* http://www.geoffreywiseman.ca/blog/2013/03/15/shipit-update-plan/
* https://twitter.com/ntakayama/status/779180488405585920
* https://dougbelshaw.com/blog/2013/10/22/minimum-viable-bureaucracy-goals-scheduling-shipping/
* https://twitter.com/CernerEng/status/1144344754727071744?s=20
* https://twitter.com/mashasafina/status/925354800086167552?s=20
* https://www.pinterest.com/pin/564990715723408874/?d=t&mt=login
* https://github.com/github/hubot-scripts/commit/91b33a64d2be811edc6430f2377eb42b4e8037c5
* https://pixabay.com/
* Search Google for "squirrel with fedora", "squirrel mobster", "shipit squirrel", etc.

##### Chrome and sprite alternate sources
For UI chrome and some sprites, we may be able to use icons from [FlatIcon](https://www.flaticon.com/) or another free icon site that offers images under the a public domain or [CC0 Dedication](https://creativecommons.org/share-your-work/public-domain/cc0/) or [Creative Commons Attribution (CC-BY)](https://creativecommons.org/use-remix/cc-licenses/#by) licenses.

#### Sound

_ShipIt Squirrel_ has Daniel's voice, from the standard macOS `say` command, but pitch shifted up half an octave with the `sox` program, which can be installed using Homebrew:

```shell
brew install sox
say -v Daniel 'Ship it!' -o shipit.au
sox shipit-Daniel.au shipit-squirrel.au pitch +600
sox shipit-squirrel.au shipit-squirrel.mp3
```

