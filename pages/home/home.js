// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    recommend:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success: (res) => {
        console.log(res)
        if (res.statusCode == 200) {
          // 设置banner数据
          this.setData({
            banner: res.data.data.banner.list
          })
          // 设置推荐icon数据
          this.setData({
            recommend: res.data.data.recommend.list
          })
        }
      }
    })
  },
})