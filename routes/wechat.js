const router = require('koa-router')()
const path = require('path')
const sha1 = require('sha1')
const wechat = require('../middleware/wechat')
const utils = require('../libs/utils')
const prefix = '/api'

const wechat_file = path.join(__dirname, '../config/wechat.txt')
const config = {
  wechat: {
    appID: 'wx59081954e1abaca4',
    appSecret: '6a27f8ac3ede79569c8d020081ce4d73',
    token: 'qkadh123oqqewry224iasdfg233nl',
    getAccessToken: function() {
      return utils.readFileAsync(wechat_file)
    },
    saveAcceessToken: function(data) {
      data = JSON.stringify(data)
      return utils.writeFileAsync(wechat_file, data)
    }
  }
}

router.use(wechat(config.wechat))

const checkToken = async (ctx, next) => {
  const token = config.wechat.token
  const qs = ctx.request.query
  const { signature, nonce, timestamp, echostr } = qs
  const str = [token, timestamp, nonce].sort().join('')
  const sha = sha1(str)
  if (sha === signature) {
    ctx.response.body = echostr + ''
  } else {
    ctx.response.body = 'wrong1'
  }
}

router.get(`${prefix}/wechat/check`, checkToken)

module.exports = router
