import * as express from 'express';
import controller from './controller';
import { track } from '../../../common/jaeger';

export default express
  .Router()
  .get('/', track('/metrics'), controller.getMetrics)
  .get(
    '/shipitclicker_deploy_total',
    track('/metrics/shipitclicker_deploy_total'),
    controller.getDeployTotal
  );
