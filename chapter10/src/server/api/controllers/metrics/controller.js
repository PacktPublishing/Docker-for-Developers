import PrometheusService from '../../services/prometheus.service';
import l from '../../../common/logger';
const register = PrometheusService.register;

export class Controller {
  async getMetrics(req, res) {
    l.debug('metrics getMetrics called', req);
    res.set('Content-Type', register.contentType);
    res.end(register.metrics());
  }

  async getCounter(req, res) {
    const test_counter = register.getSingleMetricAsString('test_counter');
    l.debug('metrics getCounter called', req);
    res.set('Content-Type', register.contentType);
    res.end(test_counter);
  }
}
export default new Controller();
