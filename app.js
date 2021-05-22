//app.js
App({
  onLaunch: function () {
    wx.login({
      success: res => {
        if (res.code) {
          this.globalData.loginCode = res.code   // 获取的code码，以进一步换取用户信息
          console.log(res.code)
          // res: {
          //   code: "061Zltjh1sXj6s0z96hh1Z1njh1Zltj5"
          //   errMsg: "login:ok"
          // }
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    loginCode: null,
    baseUrl: 'http://49.233.184.121:8085/ruoyi-pad'
  }
})
