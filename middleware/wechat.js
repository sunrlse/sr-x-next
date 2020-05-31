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
  return function *(next) {
    console.log('--------------------------------')
    console.log('处理wechat请求', this.method)
    console.log('--------------------------------')
    let token = opts.token
    let method = this.method
    let qs = this.request.query
    let { signature, nonce, timestamp, echostr } = qs
    let str = [token, timestamp, nonce].sort().join('')
    let sha = sha1(str)
    let valid = sha === signature
    switch(method) {
      case 'POST':
        if (!valid) return false
        let xmlData = yield getRawBody(this.req, {
          length: this.length,
          limit: '1mb',
          encoding: this.charset
        })
        console.log(xmlData)
        let xmlObj = yield utils.parseXMLAsync(xmlData)
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
        this.weixinMsg = message
        yield handler.call(this, next)
        wechat.reply.call(this)
        break
      case 'GET':
      default:
        this.body = valid ? (echostr + '') : 'failed'
    }
  }
}