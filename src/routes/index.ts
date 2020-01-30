import Koa from 'koa';
import statusAPI from './statusRoutes';
import cacheAPI from './cacheRoutes';

export default (app: Koa) => {
    app.use(statusAPI.routes());
    // app.use(cacheAPI.routes());
};
