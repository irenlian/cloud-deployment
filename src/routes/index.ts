import Koa from 'koa';
import statusAPI from './statusRoutes';

export default (app: Koa) => {
    app.use(statusAPI.routes());
};
