// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:null,
    videoItems: null,
    videoNum:10,
    imageURL:'http://www.baidu.com/img/bdlogo.png',
    topicList:[{id:1,videoNum:10,desc:'描述信息',title:'XXX',data:"2021-8-20",playTime:1,imageURL:'http://www.baidu.com/img/bdlogo.png'},{id:2,videoNum:11,desc:'描述信息',title:'XXX',data:"2021-8-20",playTime:11,imageURL:'http://www.baidu.com/img/bdlogo.png'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      videoItems:options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  selectItem(item){
    console.log(item)
    var itemId = item.target.id
    wx.navigateTo({
      url: '../videoItem/videoItem?id='+itemId,
      success:(res)=>{
        console.log(res)
      }
    })
  },
  //tab切换
  onChange(event) {
    console.log(event)
    let active = event.detail.index;
    wx.reLaunch({
      url: '../index/index?active='+active
    });
  },
})