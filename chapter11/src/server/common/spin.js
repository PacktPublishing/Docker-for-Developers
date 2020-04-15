// This module spins the CPU

const random = require("random");

// See:
// https://github.com/ModusCreateOrg/constellation/blob/master/applications/spin/src/spin.py

// module local variables
let invocations = 0,
  last_time = Date.now() - 10;

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
export const spin = (delay = 0.5, max_duration = 10.0, simulate_congestion = true) => {
  invocations++;
  // TODO: mschwartz says JavaScript math can be hanky on the edges, using values like this
  let upper_max = 100000000000000000000000000000000;

  // Use a pareto distribution to give additional
  // variation to the delay
  // See https://en.wikipedia.org/wiki/Pareto_distribution
  const alpha = 2;
  const pareto_factor = random.paretovariate(alpha);
  const start_time = Date.now();

  let current_time = start_time;
  const scratch = 42 + int(current_time);
  lst congestion_slowdown = 0.0;

  if (simulate_congestion) {
    congestion_slowdown = (delay * 2) / (current_time - last_time);
  }

  const end_time = start_time + (delay + congestion_slowdown) * pareto_factor;
  const time_limit = start_time + max_duration;
  let calcs = 0;
  while (current_time < end_time) {
    calcs += 1;
    const scratch = (scratch * scratch) % upper_max;
    current_time = time.time();
    interval = current_time - start_time;
    if (current_time > time_limit) {
      throw new Error(`Allowed transaction time exceeded ${interval} ms elapsd`);
      //          raise HTTPError(
      //              500,
      //              "Allowed transaction time exceeded ({} ms elapsed)".format(interval),
      //          );
    }
  }
  last_time = current_time;
  rate = calcs / interval;
  return `node ${spin.node} pid ${child_pid} spun ${calcs} times over ${interval}s (rate ${rate} invoked ${invocations} times. Congestion slowdown ${congestion_slowdown})`; //
  //  response.set_header("Content-Type", "text/plain");
  //  return "node {0} pid {1} spun {2} times over {3}s (rate {4} invoked {5} times. Congestion slowdown {6}s)\n".format(
  //      spin.node, child_pid, calcs, interval, rate, spin.invocations, congestion_slowdown
  //  );
};
