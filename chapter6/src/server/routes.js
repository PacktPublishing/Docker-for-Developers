import gamesRouter from './api/controllers/games/router';

export default function routes(app) {
  app.use('/api/v2/games', gamesRouter);
}
