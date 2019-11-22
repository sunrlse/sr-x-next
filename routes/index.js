const Router = require('koa-router')
const fs = require('fs')
const router = new Router();

const getVideo = async(ctx, next) => {
  console.log('=====================')
  console.log(ctx.params)
  console.log('=====================')
  let id = ctx.params.id
  let file = fs.readFile(`../static/${id}.mp4`, 'video/mp4')
  ctx.response.type = 'video/mp4'

  ctx.response.body = file
  next()
}

router.get('/videos/:id', getVideo)

module.exports = router