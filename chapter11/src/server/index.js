import './common/env';
import Server from './common/server';
import routes from './routes';
import metricsRoutes from './metricsRoutes';

const metrics = new Server().router(metricsRoutes).listen(process.env.METRICS_PORT);

export default new Server().router(routes).listen(process.env.PORT);
