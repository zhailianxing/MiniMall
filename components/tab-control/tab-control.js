// components/tab-control/tab-control.js
Component({
  // 组件的属性列表,用于和page通信
  properties: {
    title:{
      type:Array,
      // 这里可以不填写默认值，在调用者(page)写入默认值
      // value: ["流行", "新款","精选"]
      value: []

    }
  },

  // 组件的初始数据
  data: {
    curIndex:0
  },

  methods: {
    // 1. tab的点击事件
    itemClick(event){
      // console.log("itemClick----")
      // console.log(event)
      var title = event.currentTarget.dataset.title
      var index = event.currentTarget.dataset.index

      // 2.设置当前选中的下标，目的在wxml实现样式
      this.setData({
        curIndex: index
      })
      // 3. 将事件传递给page
      this.triggerEvent("tabItemClick",{index:index,title:title},{})
    }
  }
})
