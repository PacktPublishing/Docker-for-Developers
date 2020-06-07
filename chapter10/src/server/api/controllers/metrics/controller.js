import PrometheusService from '../../services/prometheus.service';
import l from '../../../common/logger';
const register = PrometheusService.register;

export class Controller {
  async getMetrics(req, res) {
    try {
      l.debug({
        msg: 'metrics.getMetrics() called',
      });
      res.set('Content-Type', register.contentType);
      res.end(register.metrics());
    } catch (err) {
      l.warn({
        msg: 'getMetrics errored',
        error: err.stack,
      });
      return res.status(500).json({
        status: 500,
        msg: 'Server Error',
      });
    }
  }

  async getDeployTotal(req, res) {
    try {
      const metric = PrometheusService.deploymentCounter.name;
      const counter = register.getSingleMetricAsString(metric);
      l.debug({
        msg: 'metrics.getDeployTotal() called',
        counter: counter,
      });
      res.set('Content-Type', register.contentType);
      res.end(counter);
    } catch (err) {
      l.warn({
        msg: 'metrics.getDeployTotal() errored',
        error: err.stack,
      });
      return res.status(500).json({
        status: 500,
        msg: 'Server Error',
      });
    }
  }
}
export default new Controller();
