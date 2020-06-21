import { initTracerFromEnv } from 'jaeger-client';
import l from './logger';

const namespace = 'shipitclicker';
const serviceName =
  process.env.JAEGER_SERVICE_NAME ?? process.env.APP_ID ?? namespace;

process.env.JAEGER_SERVICE_NAME = serviceName;
process.env.JAEGER_COLLECTOR_ENDPOINT =
  process.env.JAEGER_COLLECTOR_ENDPOINT ?? 'http://localhost:14268/api/traces';
process.env.JAEGER_AGENT_HOST = process.env.JAEGER_AGENT_HOST ?? 'localhost';
process.env.JAEGER_AGENT_PORT = process.env.JAEGER_AGENT_PORT ?? 6831;

const sampler = {
  type: 'const',
  param: 1,
};

const reporter = {
  collectorEndpoint: process.env.JAEGER_COLLECTOR_ENDPOINT,
  agentHost: process.env.JAEGER_AGENT_HOST,
  agentPort: process.env.JAEGER_AGENT_PORT,
  logSpans: true,
};

const config = {
  serviceName: serviceName,
  reporter: reporter,
  sampler: sampler,
};

var options = {
  logger: l,
  tags: {
    '${namespace}.version': process.env.APP_VERSION ?? 'unknown',
  },
};

const tracer = initTracerFromEnv(config, options);

export default tracer;
