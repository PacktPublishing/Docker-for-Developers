import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .post('/', controller.set)
  .get('/:id/:element', controller.get)
  .patch('/:id/:element', controller.incrby);
