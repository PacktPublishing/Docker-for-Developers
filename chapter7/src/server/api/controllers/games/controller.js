import RedisService from '../../services/redis.service';
import l from '../../../common/logger';

export class Controller {
  async get(req, res) {
    const key = `${req.params.id}/${req.params.element}`;
    var redis = await RedisService.get(key);
    l.debug({'msg': 'Redis GET complete', 'key': key, 'value': redis});
    return res.json({ id : req.params.id, element: req.params.element, value: redis});
  }

  async set(req, res) {
    const key =  `${req.body.id}/${req.body.element}`;
    var redis = await RedisService.set(key, req.body.value);
    l.debug({'msg': 'Redis SET complete', 'key': key, 'value': redis});
    return res.json({ id : req.body.id, element: req.body.element, value: req.body.value});
  }

  async incrby(req, res) {
    const key =  `${req.body.id}/${req.body.element}`;
    var redis = await RedisService.incrby(key, req.body.value);
    l.debug({'msg': 'Redis INCRBY complete', 'key': key, 'value': redis});
    return res.json({ id : req.params.id, element: req.params.element, value: redis});
  }

}
export default new Controller();
