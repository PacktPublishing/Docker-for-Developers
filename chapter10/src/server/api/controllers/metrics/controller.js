import PrometheusService from '../../services/prometheus.service';
import l from '../../../common/logger';
const register = PrometheusService.register;

export class Controller {
  async getMetrics(req, res) {
    try {
      l.debug({
        msg: 'metrics getMetrics called',
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

  async getCounter(req, res) {
    try {
      const test_counter = register.getSingleMetricAsString('deployment_counter');
      l.debug({
        msg: 'metrics getCounter called',
        counter: test_counter,
      });
      res.set('Content-Type', register.contentType);
      res.end(test_counter);
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
}
export default new Controller();
