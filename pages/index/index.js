// index.js
// 获取应用实例
const app = getApp()
import { getHospSettingInfo } from "../../api/user"

Page({
  data: {
    //tab默认选中第一个
    active: 0,
    value:'',
		videoNum:10,
    imageURL:'http://www.baidu.com/img/bdlogo.png',
    topicList:[{id:1,videoNum:10,desc:'描述信息',title:'XXX',data:"2021-8-20",imageURL:'http://www.baidu.com/img/bdlogo.png'},{id:2,videoNum:11,desc:'描述信息',title:'XXX',data:"2021-8-20",imageURL:'http://www.baidu.com/img/bdlogo.png'}]
  },
  // 事件处理函数
  bindViewTap() {
    
  },
  onLoad(options) {
    this.setData({
      active:options.active
    })
    console.log(this.data.active)
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true
    //   })
    // }
    // getHospSettingInfo({
    //   deviceid: 1,
    //   version: "1.0.0",
    //   version_code: 1
    // }).then(res => {
    //   console.log(res)
    // })
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
  selectItems(item){
    console.log(item)
    var itemId = item.target.id
    wx.navigateTo({
      url: '../videoItems/videoItems?id='+itemId,
      // success:(res)=>{
      //   console.log(res)
      // }
    })
  }
})
