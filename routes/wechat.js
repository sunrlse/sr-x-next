const router = require('koa-router')()
const wechat = require('../middleware/wechat')
const config = require('../wechat/config')
const wexin = reuqire('../wechat/weixin')

router.all(`${prefix}/wechat`, wechat(config.wechat, wexin.reply))

module.exports = router
