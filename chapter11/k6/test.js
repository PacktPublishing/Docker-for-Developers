/*
 *Test script for k6.io docker container.
 *
 * This script tests:
 */

import http from "k6/http";
import { sleep } from "k6";

// Number of moves/clicks to simulate
const MOVES = 500;

const urlBase = `http://${__ENV.HOSTIP}:3011`;
//  const url = `http://shipitclicker.com`;
//  const url = `http://2b467a35-default-shipitcli-f0dc-1451164445.us-east-2.elb.amazonaws.com/`;


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
  const when = Date.now() + Math.random(25,50) + 175;
  while (Date.now() < when);
//  sleep(millis);
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
