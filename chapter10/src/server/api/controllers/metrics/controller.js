import PrometheusService from '../../services/prometheus.service';
import l from '../../../common/logger';
const register = PrometheusService.register;

export class Controller {

  async getMetrics(req, res) {
    res.set('Content-Type', register.contentType);
    res.end(register.metrics());
  }

  async getCounter(req, res) {
    res.set('Content-Type', register.contentType);
    res.end(register.getSingleMetricAsString('test_counter'));
  }

}
export default new Controller();
