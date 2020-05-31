'use strict'

const Promise = require('bluebird')
const request = Promise.promisify(require('request'))
const info2xml = require('./info2xml')

const prefix = 'https://api.weixin.qq.com/cgi-bin/token'
const api = {
  accessToken: `${prefix}?grant_type=client_credential`
}

function Wechat(opts) {
  let that = this
  this.appID = opts.appID
  this.appSecret = opts.appSecret
  this.getAccessToken = opts.getAccessToken
  this.saveAccessToken = opts.saveAccessToken

  this.getAccessToken()
    .then(function(data) {
      try {
        data = JSON.parse(data)
      } catch (error) {
        return that.updateAccessToken()
      }
      if (that.isValidAccessToken(data)) {
        return Promise.resolve(data)
      } else {
        return that.updateAccessToken()
      }
    })
    .then(function(data) {
      if (!data || !data.access_token || !data.expires_in) return
      that.access_token = data.access_token
      that.expires_in = data.expires_in

      that.saveAccessToken(data)
    })
}

Wechat.prototype.isValidAccessToken = function(data) {
  if  (!data || !data.access_token || !data.expires_in) {
    return false
  }
  let expires_in = data.expires_in
  let now = (new Date().getTime())
  if (now < expires_in) return true
  return false
}

Wechat.prototype.updateAccessToken = function() {
  console.log('update access_token')
  let appID = this.appID
  let appSecret = this.appSecret
  let url = `${api.accessToken}&appid=${appID}&secret=${appSecret}`
  return new Promise(function(resolve, reject) {
    request({
      url: url,
      json: true
    })
    .then(function(res) {
      let data = res.body
      if (!data) return reject('error')
      let now = (new Date().getTime())
      // 提前20秒刷新
      let expires_in = now + (data.expires_in - 20) * 1000
      data.expires_in = expires_in
  
      resolve(data)
    })
  })
}

Wechat.prototype.reply = function(ctx) {
  let content = ctx.weixinContent
  let message = ctx.weixinMsg

  let xml = info2xml(content, message)
  ctx.status = 200
  ctx.type = 'application/xml'
  ctx.body = xml
}

module.exports = Wechat