// This module spins the CPU

//import l from './logger';

const random = require('random'),
  ALPHA = 2,
  pareto = random.pareto(ALPHA);

// See:
// https://github.com/ ModusCreateOrg/constellation/blob/master/applications/spin/src/spin.py

// module local variables
let invocations = 0,
  last_time = Date.now() / 1000 - 10;

/**
 * Note we are not async, we want to burn CPU.
 *
 * This is a callable method.
 *
 * This method either returns a string with information about the spin, or throws an error
 * to indicate a 500 error.  The Error's message string is an appropriate 500 error message.
 *
 * The idea is you can call this and then call your regular route handler to return a value,
 * adding a delay to simulate busy server.  Or you can call this and then return a 200 message.
 */
export default (
  delay = 0.5,
  max_duration = 10.0,
  simulate_congestion = true
) => {
  invocations++;
  // TODO: mschwartz says JavaScript math can be hanky on the edges, using values like this
  const upper_max = 100000000000000000000000000000000;

  // Use a pareto distribution to give additional
  // variation to the delay
  // See https://en.wikipedia.org/wiki/Pareto_distribution
  const pareto_factor = pareto();
  const start_time = Date.now() / 1000;

  let current_time = start_time;
  let scratch = 42 + parseInt(current_time, 10);
  let congestion_slowdown = 0.0;

  var interval;

  if (simulate_congestion) {
    congestion_slowdown = (delay * 2) / (current_time - last_time);
  }

  const end_time = start_time + (delay + congestion_slowdown) * pareto_factor;
  const time_limit = start_time + max_duration;
  let calcs = 0;
  while (current_time < end_time) {
    calcs++;
    scratch = (scratch * scratch) % upper_max;
    current_time = Date.now()/ 1000;
    interval = current_time - start_time;
    if (current_time > time_limit) {
      throw new Error(
        `Allowed transaction time exceeded ${interval} ms elapsd`
      );
    }
  }
  last_time = current_time;
  let rate = calcs / interval;
  return `spin: spun ${calcs} times over ${interval}s (rate ${rate} invoked ${invocations} times. Congestion slowdown ${congestion_slowdown})`; //
};
