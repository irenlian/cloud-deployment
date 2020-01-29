import Koa from 'koa';
import Cache from '../models/cacheModel';

export const getCache = async (ctx: Koa.Context) => {
    try {
        const res = await Cache.get({ path: ctx.query.path });
        ctx.status = 200;
        ctx.body = res;
    } catch (e) {
        ctx.status = 400;
        ctx.body = e.message;
    }
};

export const addCache = async (ctx: Koa.Context) => {
    try {
        await new Cache(
            {
                path: ctx.request.body.path,
                data: ctx.request.body.data
            }
        ).save();
        ctx.status = 200;
    } catch (e) {
        ctx.status = 400;
        ctx.body = e.message;
    }
};
