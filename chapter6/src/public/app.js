// DOM selectors
const splash = '#splash';
const restartButton = '#restart_button';
const resumeButton = '#resume_button';
const continueButton = '#continue_button';
const startButton = '#start_button';
const game = '#game';
const statusBar = '#statusBar';
const credits = '#credits';
const store = '#store';
const background = '#background';
const animate = '.animate';
const spanDeploys = '#deploys';
const spanScore = '#score';
const spanUpgrades = '#upgrades';
const spanNextItem = '#nextItem';
const spanScoreMultiplier = '#scoreMultiplier';
const spanDeployMultiplier = '#deployMultiplier';
const spanAutoMultiplier = '#autoMultiplier';
const spanAutoTick = '#autoTick';

// Animation
let pod = document.querySelector(animate);
const HEIGHT_MARGIN = 128;

// Clicker Scoring
const NEVER=Number.MIN_VALUE;
const MULTIPLE_CEILING = 1000;
const SECOND = 1000;
const DAY = SECOND * 60 * 60 * 24;
const CLEANUP_TIME = SECOND * 2;
const MIN_CLICK_TIME = 10;
const HEARTBEAT_RHYTHM = 192;
const SCORE = 'score';
const DEPLOYS = 'deploys';
const NEXT_PURCHASE = 'nextPurchase';
let gameId = 'example';
var deploys,
    score,
    scoreMultiplier,
    deployMultiplier,
    autoMultiplier,
    lastClick,
    tick,
    interval;

// Store upgrades and multipliers
const prices = [200, 400, 800, 1600, 32000, 64000, 128000];
const upgrades = ['Script', 'Composer', 'Host', 'Engine', 'Cluster', 'Orchestrator', 'Multi-Cloud'];
let nextPurchase = 0;
const deployMultipliers = [1, 2, 2, 8, 8, 32, 32, 128];
const autoMultipliers = [0, 0, 4, 4, 16, 16, 64];
const ticks = [0, 0, 8000, 8000, 1000];

// Heartbeat
const hearts = ['💔','💓','💗','❤️'];
var heartbeatInterval;
let heartbeatIndex = 0;

function display(id, style) {
  let element = document.querySelector(id);
  if (element) {
    element.style.display = style;
  } else {
    throw "Element " + id + " not found";
  }
}

function hide(id) {
  display(id, 'none');
}

function show(id) {
  display(id, 'block');
}

function update(text, selector) {
  let element = document.querySelector(selector);
    if (element) {
      element.innerHTML = text;
    } else {
      console.log("No " + selector + " element found!");
    }
}

function clickCredits() {
  hide(splash);
  hide(background);
  show(credits);
}

async function clickStart() {
  hide(splash);
  await reset();
  show(game);
  show(statusBar);
}

function clickOkCredits() {
  hide(credits);
  show(background);
  show(splash);
}

// Thanks https://developers.google.com/web/updates/2015/03/introduction-to-fetch
function json(response) {
  return response.json();
}

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

async function incrbyGame(key, value) {
  return fetch(`./api/v2/games/${gameId}/${key}`, { 
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      id: gameId, 
      element: key, 
      value: value })
  }).then(status)
    .then(json)
    .then(data => data.value);
}

async function setGameItem(key, value) {
  return fetch(`./api/v2/games/${key}/${value}`, { 
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      id: gameId, 
      element: key, 
      value: value })
  }).then(status)
    .then(json)
    .then(data => data.value);
}

async function getGameItem(key) {
  return fetch(`./api/v2/games/${gameId}/${key}`)
    .then(status)
    .then(json)
    .then(data => data.value);
}

function getScoreMultiplier(scoreMultiplier, lastClick, newClick) {
  var newScoreMultiplier;
  let elapsed = newClick - lastClick;
  if (elapsed > MULTIPLE_CEILING || lastClick === NEVER) {
    newScoreMultiplier = 1;
  } else {
    newScoreMultiplier = Math.round(MULTIPLE_CEILING / (elapsed + MIN_CLICK_TIME)) + 1;
  }
  return newScoreMultiplier;
}

function getDeployText(auto) {
  var multiplier = auto ? autoMultiplier : deployMultiplier;
  const ROW_LENGTH = 8;
  let rows = Math.ceil(multiplier / ROW_LENGTH) ;
  let remaining = multiplier;
  let deployText = '';
  while (remaining > 0) {
    deployText += '🐳' + '📦'.repeat(remaining > ROW_LENGTH ? ROW_LENGTH : remaining) + '<br>';
    remaining -= ROW_LENGTH;
  }
  return deployText;
}

// Thanks https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function animateDeploys(auto) {
  let newPod = pod.cloneNode(true);
  let parent = pod.parentNode;
  newPod.innerHTML = getDeployText(auto);
  let heightRange = document.documentElement.clientHeight - HEIGHT_MARGIN;
  newPod.style.bottom = getRandomInt(heightRange) + "px";
  parent.appendChild(newPod);
  let cleanup = function() { parent.removeChild(newPod); };
  window.setTimeout(cleanup, CLEANUP_TIME);
}

function lookupBounded(ind, arr) {
  return arr[ind < 0 ? 0 : (ind < arr.length ? ind : arr.length - 1)];
}

function updateScores() {
  update(scoreMultiplier, spanScoreMultiplier);
  update(deployMultiplier, spanDeployMultiplier);
  update(autoMultiplier, spanAutoMultiplier);
  update(Math.round(tick / SECOND), spanAutoTick);
  update(deploys, spanDeploys);
  update(score, spanScore);
  update(upgrades.slice(0, nextPurchase).join(', '), spanUpgrades);
  let nextPurchasePrice = lookupBounded(nextPurchase, prices);
  let nextItem = document.querySelector(spanNextItem);
  update(lookupBounded(nextPurchase, upgrades) + " -  " + nextPurchasePrice + " SQ$", spanNextItem);
  if (score < nextPurchasePrice) {
    nextItem.classList.remove('available');
    nextItem.classList.add('notAvailable');
  } else {
    nextItem.classList.remove('notAvailable');
    nextItem.classList.add('available');
  }
}

async function deploy(auto) {
  let newClick = (new Date()).getTime();
  scoreMultiplier = getScoreMultiplier(scoreMultiplier, lastClick, newClick);
  lastClick = newClick;
  deployMultiplier = lookupBounded(nextPurchase, deployMultipliers);
  autoMultiplier = lookupBounded(nextPurchase, autoMultipliers);
  const multiplier = auto ? autoMultiplier : deployMultiplier;
  [deploys, score] = await Promise.all([
    incrbyGame(DEPLOYS, 1),
    incrbyGame(SCORE, scoreMultiplier * multiplier)
  ]);
  updateScores();
}

async function clickDeploy() {
  await deploy(false);
  animateDeploys(false);
}

async function autoDeploy() {
  await deploy(true);
  animateDeploys(true);
}

async function clickRestart() {
  if (window.confirm('Are you sure you want to restart? Your score will reset!')) {
    hide(splash);
    await reset();
    show(game);
    show(statusBar);
  }
}

function showSplashButtons() {
    if (score > 0) {
      show(resumeButton);
      show(restartButton);
    } else {
      show(startButton);
    }
}

async function clickQuit() {
    hide(game);
    hide(statusBar);
    showSplashButtons();
    show(splash);
}

function clickStore() {
  hide(game);
  hide(background);
  show(store);
}

function refreshTimers() {
  tick = lookupBounded(nextPurchase, ticks);
  if (interval) {
    window.clearInterval(interval);
  }
  if (tick) {
    interval = window.setInterval(autoDeploy, tick);
  }
}

async function clickBuy() {
  let nextPrice = prices[nextPurchase];
  if (! nextPrice) {
    alert("You have purchased all the upgrades already!");
  } else {
    if (score >= nextPrice) {
      [score, nextPurchase] = await Promise.all([
        incrbyGame(SCORE, (nextPrice - 1) * -1),
        incrbyGame(NEXT_PURCHASE, 1)
      ]);
      refreshTimers();
      updateScores();
    } else {
      alert("Not enough money (SQ$) to buy next upgrade - you need " + nextPrice + "!");
    }
  }
}

function clickResume() {
  hide(splash);
  show(background);
  show(statusBar);
  show(game);
}

function clickContinue() {
  hide(store);
  show(background);
  show(statusBar);
  show(game);
}


function clickCredits() {
  hide(splash);
  show(credits);
}

async function reset() {
  [score, deploys, nextPurchase] = await Promise.all([
    setGameItem(SCORE, 0),
    setGameItem(DEPLOYS, 0),
    setGameItem(NEXT_PURCHASE, 0)
  ]);
  tick = 0;
  scoreMultiplier = 1;
  deployMultiplier = 1;
  autoMultiplier = 0;
  lastClick = NEVER;
  refreshTimers();
  updateScores();
  return Promise.resolve(true);
}

async function refreshScores() {
  let mock = false;
  if (mock) {
    [score, deploys, nextPurchase] = await Promise.all([
      setGameItem(SCORE, 999999),
      setGameItem(DEPLOYS, 1000),
      setGameItem(NEXT_PURCHASE, 5)
    ]);
  } else {
    try {
      [score, deploys, nextPurchase] = await Promise.all([
        getGameItem(SCORE),
        getGameItem(DEPLOYS),
        getGameItem(NEXT_PURCHASE)
      ]);
    } catch (error) {
      console.log('ERROR retriving game info', gameId, error);
      score = 0;
      deploys = 0;
      nextPurchase = 0;
    }
  }
  lastClick = (new Date()).getTime() - DAY;
  tick = lookupBounded(nextPurchase, ticks);
  scoreMultiplier = 1;
  deployMultiplier = lookupBounded(nextPurchase, deployMultipliers);
  autoMultiplier = lookupBounded(nextPurchase, autoMultipliers);
  refreshTimers();
  updateScores();
  return Promise.resolve(true);
}

function animateHeartbeat() {
  heartbeatIndex = heartbeatIndex > 2 ? 1 : heartbeatIndex + 1;
  update(hearts[heartbeatIndex], '#heartbeat');
}

async function init() {
  try {
    await refreshScores();
    if (score == 0) {
      await reset();
    }
    heartbeatInterval = window.setInterval(animateHeartbeat, HEARTBEAT_RHYTHM);
    showSplashButtons();
    show(splash);
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
  return Promise.resolve(true);
}


init();
