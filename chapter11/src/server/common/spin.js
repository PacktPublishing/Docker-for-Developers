// Adapted from spin.py from ModusCrateOrg/constellation.  Used with permission.
// https://github.com/ModusCreateOrg/constellation/blob/master/applications/spin/src/spin.py

const random = require('random'),
  ALPHA = 2,
  pareto = random.pareto(ALPHA);

let invocations = 0,
  last_time = Date.now() / 1000 - 10;

export default (
  delay = 0.1,
  max_duration = 5.0,
  simulate_congestion = true
) => {
  invocations++;
  const upper_max = Number.MAX_SAFE_INTEGER;

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
    current_time = Date.now() / 1000;
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
