const router = require('koa-router')()
const wechat = require('../middleware/wechat')
const config = require('../wechat/config')
const weixin = require('../wechat/weixin')

router.all(`/api/wechat`, wechat(config.wechat, weixin.reply))

module.exports = router
