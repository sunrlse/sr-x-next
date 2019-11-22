const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const resource = static(path.join(__dirname) + '/films');

const next = require('next')

// const routes = require('./routes/index')

const dev = process.env.NODE_ENV !== 'production'

const app = next({dev})

const handle = app.getRequestHandler()

app.prepare().then(() => { // 需要等待pages目录下的所有页面被编译完成后启动koa服务

  const server = new Koa()

  server.use(resource)

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3003, () => {
    console.log('server is running at http://localhost:3003')
  })

})