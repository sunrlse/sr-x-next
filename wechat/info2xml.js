'use strict'

const tpl = require('./tpl')

exports.info2xml = function(content, message) {
  let info = {}
  let type = 'text'
  let fromUserName = message.FromUserName
  let toUserName = message.ToUserName
  if (Array.isArray(content)) {
    type = 'news'
  }
  type = content.type || type
  info.content = content
  info.createTime = new Date().getTime()
  info.msgType = type
  info.toUserName = fromUserName
  info.fromUserName = toUserName

  return tpl.compiled(info)
}