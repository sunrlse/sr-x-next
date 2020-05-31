'use strict'
/** 
 * 回复、错误信息通知、支付等等
 */
exports.reply = async function(ctx, next) {
  let message = ctx.weixinMsg

  if (message.MsgType === 'event') {
    if (message.Event === 'subscribe') {
      if (message.EventKey) {
        console.log('扫二维码进来： ' + message.EventKey + ' ' + message.ticket)
        // ticket可换取二维码图片
      }
      ctx.body = `hello, 宁订阅了这个号\r\n 消息ID：${message.MsgId}`
    } else if (message.Event === 'unsubscribe') {
      console.log('取消关注了！')
    }
  }

  await next()

}