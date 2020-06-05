import http from "k6/http";
import { sleep } from "k6";

const DEBUG = __ENV.DEBUG;
const MOVES = __ENV.MOVES;
const target = __ENV.TARGET;
console.log(`Testing ${target}`);

const ENDPOINTS = ['score', 'deploys', 'nextPurchase'];

const log = {
  debug(msg) { 
    if (DEBUG) {
      console.log(msg);
    }
  },
  info(msg) {
    console.log(msg);
  }
}

// Box-Muller transform to normalize random number distribution.
// from https://stackoverflow.com/a/49434653
function randn_bm() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
}

const random_gaussian = (mean, variance) =>
  mean + (variance * (randn_bm() - 0.5) / 0.0627);

const deploy = (id) => {
    http.patch(
	`${target}/api/v2/games/${id}/deploys`,
	JSON.stringify({
	    id: id,
	    element: "deploys",
	    value: 1
	})
    );
    http.patch(
	`${target}/api/v2/games/${id}/score`,
	JSON.stringify({
	    id: id,
	    element: "score",
	    value: 1
	})
    );
};

const getStaticAssets = () => {
    http.get(target);
    http.get(`${target}/stylesheet.css`);
    http.get(`${target}/img/shipit-640x640-lc.jpg`);
    http.get(`${target}/img/ichard-Cartoon-Headshot-Jaunty-180x180.png`);
    http.get(`${target}/app.js`);
}

const getGameId = () => {
    const headers = { 'Content-Type': 'application/json'};
    const response = http.post(
      `${target}/api/v2/games/`,
      {},
      {headers: {'Content-Type' : 'application/json'}}
    );
    return JSON.parse(response.body).id;
}

const getScores = (id) => {
  ENDPOINTS.forEach( element => 
    http.get(`${target}/api/v2/games/${id}/${element}`));
}

const putScores = (id, score) => {
  ENDPOINTS.forEach( element =>
    http.put(
	`${target}/api/v2/games/${id}/${element}`,
	JSON.stringify({
	    id: id,
	    element: element,
	    value: score
	})
    )
    );
}

export default function() {
    const startDelay = random_gaussian(6000, 1000) / 1000;
    log.debug(`Loading static assets, then wait ${startDelay}s to start game`);
    getStaticAssets();
    sleep(startDelay);

    const gameDelay = random_gaussian(1500, 250) / 1000;
    const id = getGameId();
    log.debug(`Game ${id}: Reset game scores, then wait ${startDelay}s to start game`);
    putScores(id, 0);
    sleep(gameDelay);

    log.info(`Game ${id}: Simulating ${MOVES} moves, starting in ${gameDelay}s`);
    for (let i = 0; i < MOVES; i++) {
      const moveDelay = random_gaussian(125, 25) / 1000;
      log.debug(`Game ${id}: move #${i}, then sleep ${moveDelay}s`);
    	deploy(id);
      sleep(moveDelay);
    }

    log.info(`Game ${id}: Done with ${MOVES} moves`);
}
