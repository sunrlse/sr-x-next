const router = require('koa-router')()
const fs = require('fs')
const path = require('path')
// const router = new Router();

function handle(req, res) {
  let filePath = path.resolve(__dirname, '../films/sintel.mp4');
  console.log(__dirname)
  console.log(filePath)
  fs.readFile(filePath, (err, data) => {
    console.log('-----read file-----')
    console.log(err)
    console.log(data)
    let total = data.length
    console.log('-----read file-----')
    // ctx.status = 206
    res.setHeaders(206, {
      // 'Content-Range': `bytes 0-${total}/${total}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': total,
      'Content-Type': 'video/mp4'
    })
    res.end(data, 'binary')
    // ctx.body = data;
  })
}

const getVideo = async (ctx, next) => {
  let id = ctx.params.id
  
  
  await handle(ctx.request, ctx.response)
  // let videoStream = fs.createReadStream(filePath);
  // videoStream.on('open', (a, b) => {
  //   console.log('--------stream--------')
  //   console.log(a)
  //   console.log(b)
  //   console.log('--------stream--------')
  // })
  // ctx.response.type = 'video/mp4'

  // ctx.response.body = file
}

router.get('/v/:id', getVideo)

module.exports = router