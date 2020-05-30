const router = require('koa-router')()
const path = require('path')
const wechat = require('../middleware/wechat')
const utils = require('../libs/utils')

const prefix = '/api'
const wechat_file = path.join(__dirname, '../config/wechat.txt')
const config = {
  wechat: {
    appID: 'wx59081954e1abaca4',
    appSecret: '6a27f8ac3ede79569c8d020081ce4d73',
    token: 'fgadh8A56D1o7V8N84OYyFiNSfRoiqe1',
    getAccessToken: function() {
      return utils.readFileAsync(wechat_file, 'utf-8')
    },
    saveAccessToken: function(data) {
      data = JSON.stringify(data)
      return utils.writeFileAsync(wechat_file, data)
    }
  }
}

router.all(`${prefix}/wechat`, wechat(config.wechat))

module.exports = router
