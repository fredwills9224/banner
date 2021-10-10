import Router from 'koa-router';

const router = new Router({ prefix: '/script_tag' });

router.get('/', async (ctx)=>{
    ctx.body = 'Get script tag';
});
router.get('/all', async (ctx)=>{
    ctx.body = 'Get all script tag';
});
router.post('/', async (ctx)=>{
    ctx.body = 'Create a script tag';
});
router.delete('/', async (ctx)=>{
    ctx.body = 'Delete script tag'
});

export default router;