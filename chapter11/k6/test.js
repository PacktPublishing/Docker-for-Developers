/*
 *Test script for k6.io docker container.
 *
 * This script tests:
 */

import http from "k6/http";
import { sleep } from "k6";

// Number of moves/clicks to simulate
const MOVES = __ENV.MOVES;;

const urlBase = `http://${__ENV.HOSTIP}:3011`;
//  const url = `http://shipitclicker.com`;
//  const url = `http://2b467a35-default-shipitcli-f0dc-1451164445.us-east-2.elb.amazonaws.com/`;

//
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

const deploy = () => {
  http.patch(
    `${urlBase}/api/v2/games/71o6wXE9kh9x_NHyWOy2M/deploys`,
    JSON.stringify({
      id: "71o6wXE9kh9x_NHyWOy2M",
      element: "deploys",
      value: 1
    })
  );
  http.patch(
    `${urlBase}/api/v2/games/71o6wXE9kh9x_NHyWOy2M/score`,
    JSON.stringify({
      id: "71o6wXE9kh9x_NHyWOy2M",
      element: "score",
      value: 1
    })
  );

  // sleep 175 milliseconds plus 0-50 random milliseconds more.
  // this simulates clicking at about 5 clicks/second, or about what
  // a human probably does when clicking as fast as possible.
  const millis = (randn_bm() * 50 + 175) / 1000;
  sleep(millis);
};

export default function() {
  http.get(urlBase);
  http.get(`${urlBase}/stylesheet.css`);
  http.get(`${urlBase}/img/shipit-640x640-lc.jpg`);
  http.get(`${urlBase}/img/ichard-Cartoon-Headshot-Jaunty-180x180.png`);
  http.get(`${urlBase}/app.js`);
  http.get(`${urlBase}/api/v2/games/71o6wXE9kh9x_NHyWOy2M/score`);
  http.get(`${urlBase}/api/v2/games/71o6wXE9kh9x_NHyWOy2M/deploys`);
  http.get(`${urlBase}/api/v2/games/71o6wXE9kh9x_NHyWOy2M/nextPurchase`);

  console.log(`Simulating ${MOVES} moves`);
  for (let i = 0; i < MOVES; i++) {
    console.log(` move #${i}`);
    deploy();
  }
  console.log("DONE\n");
}
