// pages/home/home.js
Page({
  data: {
    // banner
    banner: [{
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
        "title": "焕新女装节",
      },
      {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
        "title": "入秋穿搭指南",
      },
      {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg",
        "title": "秋季护肤大作战",
      },
      {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg",
        "title": "流行抢先一步",
      }
    ],

    // recommend
    recommend: [{
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",
        "title": "十点抢券",
      },
      {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",
        "title": "好物特卖",
      },
      {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",
        "title": "内购福利",
      },
      {
        "image": "https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",
        "title": "初秋上新",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/multidata',
    //   success: (res) => {
    //     console.log(res)
    //     if (res.statusCode == 200) {
    //       this.setData({
    //         banner: res.data.data.banner.list
    //       })
    //       // 设置推荐icon数据
    //       this.setData({
    //         recommend: res.data.data.recommend.list
    //       })
    //     }
    //   }
    // })
  },
})