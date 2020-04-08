import RedisService from '../../services/redis.service';
import l from '../../../common/logger';

export class Controller {
  async getGame(req, res) {
    const key = `${req.params.id}`;
    var redis = await RedisService.get(key);
    l.debug({ msg: 'Redis GET complete', key: key, value: redis });
    return res.json({
      id: req.params.id,
      element: req.params.element,
      value: redis,
    });
  }

  async createGame(req, res) {
    const key = `${req.params.id}`;
    var redis = await RedisService.get(key);
    l.debug({ msg: 'Redis GET complete', key: key, value: redis });
    if (redis != null) {
      return res.status(201).json({
        id: req.params.id,
        element: 'game',
        value: redis,
      });
    } else {
      return res.status(404);
    }
  }

  async getGameItem(req, res) {
    const key = `${req.params.id}/${req.params.element}`;
    var redis = await RedisService.get(key);
    l.debug({ msg: 'Redis GET complete', key: key, value: redis });
    if (redis != null) {
      return res.json({
        id: req.params.id,
        element: req.params.element,
        value: redis,
      });
    } else {
      return res.status(404);
    }
  }

  async setGameItem(req, res) {
    const key = `${req.body.id}/${req.body.element}`;
    var redis = await RedisService.set(key, req.body.value);
    l.debug({ msg: 'Redis SET complete', key: key, value: redis });
    if (redis != null) {
      return res.status(201).json({
        id: req.body.id,
        element: req.body.element,
        value: req.body.value,
      });
    } else {
      return res.status(500);
    }
  }

  async incrementGameItem(req, res) {
    const key = `${req.body.id}/${req.body.element}`;
    var redis = await RedisService.incrby(key, req.body.value);
    l.debug({ msg: 'Redis INCRBY complete', key: key, value: redis });
    if (redis != null) {
      return res.json({
        id: req.params.id,
        element: req.params.element,
        value: redis,
      });
    } else {
      return res.status(404);
    }
  }
}
export default new Controller();
