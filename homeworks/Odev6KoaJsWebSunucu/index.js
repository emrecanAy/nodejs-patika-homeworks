const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/index', (ctx) => {
    ctx.res.writeHead(200, {'Content-Type':'text/html'});
    ctx.body = "<h1>INDEX SAYFASINA HOSGELDINIZ!</h1>"
});

router.get('/hakkimda', (ctx) => {
    ctx.res.writeHead(200, {'Content-Type':'text/html'});
    ctx.body = "<h1>HAKKIMDA SAYFASINA HOSGELDINIZ!</h1>"
});

router.get('/iletisim', (ctx) => {
    ctx.res.writeHead(200, {'Content-Type':'text/html'});
    ctx.body = "<h1>ILETISIM SAYFASINA HOSGELDINIZ!</h1>"
});

// response
app.use(router.routes()).use(router.allowedMethods());


const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu port ${port}'de yayınlandı!`);
});