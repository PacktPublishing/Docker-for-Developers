import metricsRouter from './api/controllers/metrics/router';

export default function routes(app) {
  app.use('/metrics', metricsRouter);
}
