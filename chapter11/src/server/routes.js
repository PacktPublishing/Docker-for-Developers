import faultsRouter from './api/controllers/faults/router';
import gamesRouter from './api/controllers/games/router';

export default function routes(app) {
  app.use('/faults', faultsRouter);
  app.use('/api/v2/games', gamesRouter);
}
