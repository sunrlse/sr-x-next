/** 
 * 中间件 - 微信公众号验证token 和 access_token 等
 */
const sha1 = require('sha1')
const getRawBody = require('raw-body')
const Wechat = require('../wechat/wechat')
const utils = require('../libs/utils')

module.exports = function(opts, handler) {
  console.log('->>>>>>>>>>>>>>>>')
  console.log('new middle wechat access')
  console.log('->>>>>>>>>>>>>>>>')
  const wechat = new Wechat(opts)
  return async function(ctx, next) {
    console.log('--------------------------------')
    console.log('处理wechat请求', ctx.method)
    console.log('--------------------------------')
    let token = opts.token
    let method = ctx.method
    let qs = ctx.request.query
    let { signature, nonce, timestamp, echostr } = qs
    let str = [token, timestamp, nonce].sort().join('')
    let sha = sha1(str)
    let valid = sha === signature
    switch(method) {
      case 'POST':
        if (!valid) return false
        let xmlData = await getRawBody(ctx.req, {
          length: ctx.length,
          limit: '1mb',
          encoding: ctx.charset
        })
        console.log(xmlData)
        let xmlObj = await utils.parseXMLAsync(xmlData)
        let message = utils.formatMessage(xmlObj.xml)
        console.log(message)
        // if (message.MsgType === 'event') {
        //   if (message.Event === 'subscribe') {
        //     let now = new Date().getTime()
        //     let reply = `
        //       <xml>
        //         <ToUserName><![CDATA[${message.FromUserName}]]></ToUserName>
        //         <FromUserName><![CDATA[${message.ToUserName}]]></FromUserName>
        //         <CreateTime>${now}</CreateTime>
        //         <MsgType><![CDATA[text]]></MsgType>
        //         <Content><![CDATA[奔涌吧，后浪！]]></Content>
        //       </xml>
        //     `
        //     ctx.status = 200
        //     ctx.type = 'application/xml'
        //     ctx.body = reply
        //   }
        // }
        ctx.weixinMsg = message
        await handler.call(ctx)
        console.log(ctx)
        wechat.reply.call(ctx, ctx)
        break
      case 'GET':
      default:
        ctx.body = valid ? (echostr + '') : 'failed'
    }
  }
}