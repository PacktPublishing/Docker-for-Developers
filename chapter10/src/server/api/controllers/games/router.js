import * as express from 'express';
import controller from './controller';
import { track } from '../../../common/jaeger';

const apiTrack = op => track(`/api/v2/games${op}`)

export default express
  .Router()
  .get('/ready', apiTrack('/ready'), controller.isReady)
  .get('/:id', apiTrack('/{id}'), controller.getGame)
  .post('/', apiTrack('/'), controller.createGame)
  .get('/:id/:element', apiTrack('/{id}/{element}'), controller.getGameItem)
  .put('/:id/:element', apiTrack('/{id}/{element}'), controller.setGameItem)
  .patch(
    '/:id/:element',
    apiTrack('/{id}/{element}'),
    controller.incrementGameItem
  );
