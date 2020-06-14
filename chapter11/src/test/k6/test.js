/* eslint no-undef: "off", "node/no-missing-import": "off"  */
import http from 'k6/http';
import { sleep } from 'k6';

const DEBUG = __ENV.DEBUG;
const MOVES = __ENV.MOVES;
const target = __ENV.TARGET;
const ENDPOINTS = ['score', 'deploys', 'nextPurchase'];

const params = {
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate',
  },
};

console.log(`Testing ${target}`);

const log = {
  debug(msg) {
    if (DEBUG) {
      console.log(msg);
    }
  },
  info(msg) {
    console.log(msg);
  },
  warn(msg) {
    console.log(`WARNING: ${msg}`);
  },
};

// Box-Muller transform to normalize random number distribution.
// from https://stackoverflow.com/a/49434653
function randn_bm() {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  num = num / 10.0 + 0.5; // Translate to 0 -> 1
  if (num > 1 || num < 0) return randn_bm(); // resample between 0 and 1
  return num;
}

const random_gaussian = (mean, variance) =>
  mean + (variance * (randn_bm() - 0.5)) / 0.0627;

const validate = response => {
  const msg = `${response.request.method} ${response.request.url}: status ${response.status}`;
  if (response.status >= 200 && response.status < 400) {
    log.debug(msg);
  } else {
    log.warn(msg);
    log.debug(JSON.stringify(response, null, 2));
  }
  return response;
};

const deploy = id => {
  validate(
    http.patch(
      `${target}/api/v2/games/${id}/deploys`,
      JSON.stringify({
        id: id,
        element: 'deploys',
        value: 1,
      }),
      params
    )
  );
  validate(
    http.patch(
      `${target}/api/v2/games/${id}/score`,
      JSON.stringify({
        id: id,
        element: 'score',
        value: 1,
      }),
      params
    )
  );
};

const getStaticAssets = () =>
  [
    target,
    `${target}/stylesheet.css`,
    `${target}/img/shipit-640x640-lc.jpg`,
    `${target}/img/Richard-Cartoon-Headshot-Jaunty-180x180.png`,
    `${target}/app.js`,
  ]
    .map(http.get)
    .map(validate);

const getGameId = () => {
  const uri = `${target}/api/v2/games/`;
  const response = validate(http.post(uri, {}, params));
  return JSON.parse(response.body).id;
};

const getScores = id => {
  return ENDPOINTS.map(element =>
    http.get(`${target}/api/v2/games/${id}/${element}`)
  ).map(validate);
};

const putScores = (id, score) => {
  return ENDPOINTS.map(element =>
    http.put(
      `${target}/api/v2/games/${id}/${element}`,
      JSON.stringify({
        id: id,
        element: element,
        value: score,
      }),
      params
    )
  ).map(validate);
};

export default function() {
  const startDelay = random_gaussian(6000, 1000) / 1000;
  log.debug(`Loading static assets, then wait ${startDelay}s to start game`);
  getStaticAssets();
  sleep(startDelay);

  const gameDelay = random_gaussian(1500, 250) / 1000;
  const id = getGameId();
  log.debug(
    `Game ${id}: Reset game scores, then wait ${startDelay}s to start game`
  );
  getScores();
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
