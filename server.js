const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const resource = static(path.join(__dirname) + '/films');

const next = require('next')

const video = require('./routes/video')
const wechat = require('./routes/wechat')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3003

const app = next({dev})

const handle = app.getRequestHandler()

app.prepare().then(() => { // 需要等待pages目录下的所有页面被编译完成后启动koa服务

  const server = new Koa()

  server.use(resource)
  
  
  server.use(async (ctx, next) => {
    if (ctx.request.url.indexOf('/api/') > -1) {
      return next();
    }
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })
  server.use(video.routes())
  server.use(wechat.routes())
  // server.use(video.routes(), video.allowedMethods())

  server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
  })

})