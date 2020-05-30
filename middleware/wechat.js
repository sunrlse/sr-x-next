/** 
 * 中间件 - 微信公众号验证token 和 access_token 等
 */

'use strict'

const Promise = require('bluebird')
const request = Promise.promisify(require('request'))

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
        Promise.resolve(data)
      } else {
        that.updateAccessToken()
      }
    })
    .then(function(data) {
      that.access_token = data.access_token
      that.expires_in = data.expires_in

      that.saveAccessToken(data)
    })
}

Wechat.prototype.isValidAccessToken = function(data) {
  if  (!data || !data.access_token || !data.expires_in) {
    return false
  }
  let access_token = data.access_token
  let expires_in = data.expires_in
  let now = (new Date().getTime())
  if (now < expires_in) return true
  return false
}

Wechat.prototype.updateAccessToken = function() {
  let appID = this.appID
  let appSecret = this.appSecret
  let url = `${api.accessToken}&appid=${appID}&secret=${appSecret}`

  return new Promise(function(resolve, reject) {
    request({
      url: url,
      json: true
    })
    .then(function(res) {
      let data = res[1]
      if (!data) return reject('error')
      let now = (new Date().getTime())
      // 提前20秒刷新
      let expires_in = now + (data.expires_in - 20) * 1000
      data.expires_in = expires_in
  
      resolve(data)
    })
  })
}



module.exports = function(opts) {
  console.log('->>>>>>>>>>>>>>>>')
  console.log('middle wechat access')
  console.log('->>>>>>>>>>>>>>>>')
  const wechat = new Wechat(opts)
  return async function(ctx, next) {
    next()
  }
}