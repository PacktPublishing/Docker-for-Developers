const redis = require('redis');
const { promisify } = require('util');
import l from '../../common/logger';

class RedisDatabase {
  constructor() {
    const redis_host = process.env.REDIS_HOST ?? 'localhost';
    const redis_port = process.env.REDIS_PORT ?? 6379;
    const redis_password = process.env.REDIS_PASSWORD ?? '';
    const redis_options = {};
    l.info({
      msg: 'Connecting to Redis',
      redis_host: redis_host,
      redis_port: redis_port,
      redis_password: redis_password.replace(/./g, 'X'),
    });
    const redis_url = `redis://${redis_host}:${redis_port}`;
    this._client = redis.createClient(redis_url, redis_options);
    l.info({
      msg: 'Redis connected',
      redis_url: redis_url,
    });
    if (redis_password !== '') {
      this._client.auth(redis_password);
      l.info({
        msg: 'Redis authenticated OK',
        redis_url: redis_url,
      });
    }
    this._client.getAsync = promisify(this._client.get).bind(this._client);
    this._client.setAsync = promisify(this._client.set).bind(this._client);
    this._client.incrbyAsync = promisify(this._client.incrby).bind(
      this._client
    );
  }

  async set(id, value) {
    return this._client.setAsync(id, value);
  }

  async get(id) {
    return this._client.getAsync(id);
  }

  async incrby(id, value) {
    return this._client.incrbyAsync(id, value);
  }
}

export default new RedisDatabase();
