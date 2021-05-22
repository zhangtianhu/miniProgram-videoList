// index.js
// 获取应用实例
const app = getApp()
import { getHospSettingInfo } from "../../api/user"

Page({
  data: {
  },
  // 事件处理函数
  bindViewTap() {
    
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    getHospSettingInfo({
      deviceid: 1,
      version: "1.0.0",
      version_code: 1
    }).then(res => {
      console.log(res)
    })
  },
  getPhoneNumber (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  }
})
