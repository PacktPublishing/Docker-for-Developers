const redis = require('redis');
const { promisify } = require('util');
import l from '../../common/logger';

class RedisDatabase {
  constructor() {
    l.debug({
      msg: 'Redis Database - deferred init via lazy loading',
    });
  }

  init() {
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
    let client = redis.createClient(redis_url, redis_options);
    l.debug({
      msg: 'Redis configured',
      redis_url: redis_url,
    });
    // Thanks https://stackoverflow.com/a/18560304
    client.on('error', err => l.error({ msg: 'Redis error', err: err }));
    if (redis_password !== '') {
      client.auth(redis_password);
      l.info({
        msg: 'Redis authenticated OK',
        redis_url: redis_url,
      });
    }
    client.pingAsync = promisify(client.ping).bind(client);
    client.getAsync = promisify(client.get).bind(client);
    client.setAsync = promisify(client.set).bind(client);
    client.incrbyAsync = promisify(client.incrby).bind(client);
    return client;
  }

  instance() {
    return this._client ? this._client : (this._client = this.init());
  }

  async ping() {
    return this.instance().pingAsync();
  }

  async set(id, value) {
    return this.instance().setAsync(id, value);
  }

  async get(id) {
    return this.instance().getAsync(id);
  }

  async incrby(id, value) {
    return this.instance().incrbyAsync(id, value);
  }
}

export default new RedisDatabase();
