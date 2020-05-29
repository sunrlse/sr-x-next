const sha1 = require('sha1')
const config = {
  wechat: {
    appID: 'wx59081954e1abaca4',
    appSecret: '6a27f8ac3ede79569c8d020081ce4d73',
    token: 'qkadh123oqqewry224iasdfg233nl'
  }
}

export default (req, res) => {
  let token = config.wechat.token
  let qs = req.query
  let { signature, nonce, timestamp, echostr } = qs
  console.log('------------------------------------------------------------')
  console.log(signature, nonce, timestamp, echostr)
  console.log('------------------------------------------------------------')
  let str = [token, timestamp, nonce].sort().join('')
  let sha = sha1(str)
  let data = ''
  if (sha === signature) {
    data = echostr + ''
  } else {
    data = 'wrong'
  }
  console.log(data)
  console.log('------------------------------------------------------------')
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(data)
}