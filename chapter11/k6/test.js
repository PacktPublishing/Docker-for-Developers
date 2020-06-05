/*
 *Test script for k6.io docker container.
 *
 * This script mimics a human playng the game:
 * 1) Fetching the html, stylesheets, images, and JavaScript files that make up the application.
 * 2) Perform HTTP post to start a new game.
 * 3) Get the initial score, deploys, and nextPurchase values.
 * 4) Attempt to simulate MOVES clicks.
 *
 */

import http from "k6/http";
import { sleep } from "k6";

// Number of moves/clicks to simulate
const MOVES = __ENV.MOVES;

const urlBase = `http://${__ENV.HOSTADDR}`;
console.log(urlBase);

// possible other URLs:
//  const url = `http://shipitclicker.com`;
//  const url = `http://2b467a35-default-shipitcli-f0dc-1451164445.us-east-2.elb.amazonaws.com/`;

//
// Box-Muller transform to normalize random number distribution.
// from https://stackoverflow.com/a/49434653
//
// NOTE: the more CPU time we use in our VU, the more of a drag it is on the tests
// when running many VUs
//
function randn_bm() {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
    return num;
}

const deploy = (id) => {
    http.patch(
	`${urlBase}/api/v2/games/71o6wXE9kh9x_NHyWOy2M/deploys`,
	JSON.stringify({
	    id: id,
	    element: "deploys",
	    value: 1
	})
    );
    http.patch(
	`${urlBase}/api/v2/games/71o6wXE9kh9x_NHyWOy2M/score`,
	JSON.stringify({
	    id: id,
	    element: "score",
	    value: 1
	})
    );
};

export default function() {
    http.get(urlBase);
    http.get(`${urlBase}/stylesheet.css`);
    http.get(`${urlBase}/img/shipit-640x640-lc.jpg`);
    http.get(`${urlBase}/img/ichard-Cartoon-Headshot-Jaunty-180x180.png`);
    http.get(`${urlBase}/app.js`);
    const headers = { 'Content-Type': 'application/json'};
    const response = http.post(`${urlBase}/api/v2/games/`, {}, { headers: {'Content-Type' : 'application/json'}  });
    const result = JSON.parse(response.body);
    const GAMEID = result.id;
    http.get(`${urlBase}/api/v2/games/${GAMEID}/score`);
    http.get(`${urlBase}/api/v2/games/${GAMEID}/deploys`);
    http.get(`${urlBase}/api/v2/games/${GAMEID}/nextPurchase`);
    
    console.log(`Simulating ${MOVES} moves for game ID '${GAMEID}'`);

    for (let i = 0; i < MOVES; i++) {
      const delay = (randn_bm() * 50 + 100) / 1000;
    	console.log(` move #${i}, then sleep ${delay}s`);
    	deploy(GAMEID);
      sleep(delay);
    }
    console.log("DONE\n");
}
