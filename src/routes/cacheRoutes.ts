import Router from 'koa-router';
import { getCache, addCache } from '../controllers/cacheController';

const router: Router = new Router();

router.get('/api/cache', getCache);
router.post('/api/cache', addCache);

export default router;
