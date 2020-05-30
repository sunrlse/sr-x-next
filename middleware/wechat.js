/** 
 * 中间件 - 微信公众号验证token 和 access_token 等
 */
const sha1 = require('sha1')
const getRawBody = require('raw-body')
const Wechat = require('../libs/wechat')

module.exports = function(opts) {
  console.log('->>>>>>>>>>>>>>>>')
  console.log('new middle wechat access')
  console.log('->>>>>>>>>>>>>>>>')
  const wechat = new Wechat(opts)
  return async (ctx, next) => {
    console.log('--------------------------------')
    console.log(ctx.method)
    console.log('处理wechat请求')
    console.log('--------------------------------')
    let token = config.wechat.token
    let method = ctx.method
    let qs = ctx.request.query
    let { signature, nonce, timestamp, echostr } = qs
    let str = [token, timestamp, nonce].sort().join('')
    let sha = sha1(str)
    let valid = sha === signature
    switch(method) {
      case 'POST':
        if (!valid) return false
        let data = await getRawBody(ctx.req, {
          length: ctx.length,
          limit: '1mb',
          encoding: ctx.charset
        })
        console.log(data)
        break
      case 'GET':
      default:
        ctx.body = valid ? (echostr + '') : 'failed'
    }
  }
}