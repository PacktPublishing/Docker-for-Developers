import * as client from 'prom-client';
import l from '../../../common/logger';

export class Prometheus {
  constructor() {
    l.debug({
      msg: 'Configuring Prometheus Client to collect all metrics',
    });

    this.register = client.register;

    this.deploymentCounter = new client.Counter({
      name: 'deployment_counter',
      help: 'This counter tracks the number of containers deployed',
    });

    this.register.collectDefaultMetrics({
      timeout: 10000,
      gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
    });
  }
}
export default new Prometheus();
