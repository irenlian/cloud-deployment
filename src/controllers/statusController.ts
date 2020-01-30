import Koa from 'koa';

export const status = async (ctx: Koa.Context) => {
    ctx.status = 200;
    ctx.body = {
        status: 'ok',
        AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID
    };
};
