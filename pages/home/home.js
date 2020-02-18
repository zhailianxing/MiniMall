// pages/home/home.js

const titleType = ["pop", "newest", "execllent"]

Page({
  data: {
    // 第一部分:banner
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

    // 第二部分:recommend
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
    ],
    // 第三部分:tab title
    tabTitle: ["流行", "新款", "精选"],
    // 第四部分: 衣服列表
    curTitleType: "pop", // "流行"对应的"pop",新款:newest,精选:execllent
    goods: {
      "pop": {
        page: 2,
        list: [{
          "title": "2018秋冬新款小棉服",
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
          "fav":49,
          "price":59
        }, {
          "title": "2018秋冬新款小棉服",
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
          "fav": 49,
            "price": 59
        }, {
          "title": "2018秋冬新款小棉服",
          "image": "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
          "fav": 49,
            "price": 59
        }]
      },
      "newest": {
        page: 0,
        list: [{
          "title": 2
        }]
      },
      "execllent": {
        page: 0,
        list: [{
          "title": 3
        }]
      },
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //1.请求banner和recomend
    this.bannerAndRecommend()
    //2.请求商品列表
    for (var i = 0; i < titleType.length; i++) {
      this.getGoodsData(titleType[i])
    }

  },
  // ===================网络请求======================== 
  bannerAndRecommend() {
    wx.request({
      url: 'http://123.207.32.32:8000/home/multidata',
      success: (res) => {
        console.log(res)
        if (res.statusCode == 200) {
          //  设置banner数据
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

  getGoodsData(titleType) {
    var curPage = this.data.goods[titleType].page
    wx.request({
      url: 'http://123.207.32.32:8000/home/data',
      data: {
        type: titleType,
        page: curPage + 1
      },
      success: (res) => {
        console.log(res)
        console.log("curPage:", curPage)

        if (res.statusCode == 200 && res.data.hasOwnProperty("list")) {
          // 因为是success回调是异步的，所以可能造成数据覆盖。
          // var list = res.data.data.list
          // var old = this.data.goods
          // old[titleType].list.push(...list)
          // old["page"] = curPage + 1
          // this.setData({
          //   goods: old
          // })

          //  只更新titleType对应的list，其他的不更新，防止数据覆盖
          var list = res.data.data.list
          var oldPage = this.data.goods[titleType].page
          var oldList = this.data.goods[titleType].list
          var newList = oldList.push(...list)

          var typeKey = `goods.${titleType}.list`
          var pageKey = `goods.${titleType}.page`

          this.setData({
            [key]: newList, // 注意语法
            [pageKey]: oldPage + 1,
          })
        }
      }
    })
  },


  //=================== 监听函数 ===========================
  // 处理component/tab-control中的监听
  handleTabItemClick(event) {
    var index = event.detail.index
    this.setData({
      curTitleType: titleType[index]
    })
  },

  // 下拉加载更多
  onReachBottom(){
    // console.log("碰到底部了")
    this.getGoodsData(this.data.curTitleType)
  },
  
})