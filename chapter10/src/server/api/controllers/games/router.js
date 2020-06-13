import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/ready', controller.isReady)
  .get('/:id', controller.getGame)
  .post('/', controller.createGame)
  .get('/:id/:element', controller.getGameItem)
  .put('/:id/:element', controller.setGameItem)
  .patch('/:id/:element', controller.incrementGameItem);
