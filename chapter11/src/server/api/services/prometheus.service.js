import * as client from 'prom-client';
import l from '../../common/logger';

export class Prometheus {
  constructor() {
    l.debug({
      msg: 'Configuring Prometheus Client to collect all metrics',
    });

    this.register = client.register;

    this.deploymentCounter = new client.Counter({
      name: 'shipitclicker_deployments_total',
      help: 'Total of in-game deployments in this ShipIt Cicker process',
    });

    client.collectDefaultMetrics({
      timeout: 10000,
      gcDurationBuckets: [0.001, 0.01, 0.1, 1, 2, 5],
    });
  }
}
export default new Prometheus();
