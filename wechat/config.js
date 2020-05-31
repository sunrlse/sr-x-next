const path = require('path')
const utils = require('../libs/utils')
const access_file = path.join(__dirname, './access.txt')
const config = {
  wechat: {
    appID: 'wx59081954e1abaca4',
    appSecret: '6a27f8ac3ede79569c8d020081ce4d73',
    token: 'fgadh8A56D1o7V8N84OYyFiNSfRoiqe1',
    getAccessToken: function() {
      return utils.readFileAsync(access_file, 'utf-8')
    },
    saveAccessToken: function(data) {
      data = JSON.stringify(data)
      return utils.writeFileAsync(access_file, data)
    }
  }
}

module.exports = config