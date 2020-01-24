import logger from './lib/logger';
import { PORT } from './config';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import errorHandling from './middleware/errorHandling';
import routes from './routes';

const app: Koa = new Koa();

app.use(bodyParser());
app.use(errorHandling);
routes(app);

app.listen(PORT);
logger.info(`Started listening on port:${PORT}`);
