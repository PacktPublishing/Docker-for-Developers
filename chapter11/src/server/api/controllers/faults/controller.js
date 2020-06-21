import l from '../../../common/logger';
import spin from '../../../common/spin';

export class Controller {
  async getSpin(req, res) {
    const started_on = new Date().getTime();
    try {
      const spin_status = spin();
      l.debug('spin_status: ', spin_status);
      return res.json({
        msg: 'SPIN API',
        spin: spin_status,
        started_on: started_on,
      });
    } catch (err) {
      console.log('ERROR', err);
      l.warn({ msg: 'Spin GET errored', key: req.params.id, error: err });
      return res.status(404);
    }
  }
}
export default new Controller();
