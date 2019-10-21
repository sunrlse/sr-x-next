const withLess = require('@zeit/next-less')

// ! @zeit/next-less  need less^2.7.3    cannot use the 3.x.x
// ! 效果是  跳转页面  不跳转不报错，但是url 直接手动输入可以转到页面

module.exports = withLess({
  cssModules: false
})