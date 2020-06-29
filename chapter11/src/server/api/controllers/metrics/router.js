import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/', controller.getMetrics)
  .get('/shipitclicker_deploy_total', controller.getDeployTotal);
