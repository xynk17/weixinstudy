Page({
  data: {
    objectArray: [
      {
        id: 0,
        name: 'ー選択ー'
      },
      {
        id: 1,
        name: '日暮里'
      },
      {
        id: 2,
        name: '北千住'
      },
      {
        id: 3,
        name: '松戸'
      }
    ],
    dateArray: ['ー選択ー', '2018-09-20', '2018-09-20', '2018-09-20'],
    index: 0,
    dataPickerIndex:0,
    goodsArray: [
      {
        id: 0,
        name: '凉皮',
        count:0
      }, 
      {
        id: 1,
        name: '肉夹馍',
        count: 2
      }, 
      {
        id: 2,
        name: '烤面筋',
        count: 3
      }
    ]

  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDatePickerChange: function (e) {
    console.log('DatePicker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dataPickerIndex: e.detail.value
    })
  }, 
  bindItemButton1Click: function (e) {
    console.log('XXXXXX', e.currentTarget.id);
    var up = "goodsArray[" + e.currentTarget.id + "].count";
    var nowCount = this.data.goodsArray[e.currentTarget.id].count
    var count = nowCount+1;
    this.setData({
      [up]: count
    })
  },
  bindItemButton2Click: function (e) {
    console.log('XXXXXX', e.currentTarget.id);
    var up = "goodsArray[" + e.currentTarget.id + "].count";
    var nowCount = this.data.goodsArray[e.currentTarget.id].count;
    if (nowCount>0){
      var count = nowCount - 1;
      this.setData({
        [up]: count
      })
    }
  }, 
  bindCommitButtonClick: function (e) {

    wx.showModal({
      title: '提示',
      content: '确定要提交预约？',
      showCancel: true,//是否显示取消按钮
      cancelText: "否",//默认是“取消”
      //cancelColor: 'black',//取消文字的颜色
      confirmText: "是",//默认是“确定”
     // confirmColor: 'black',//确定文字的颜色
      success: function (res) {
        if (res.cancel) {
          //点击取消,默认隐藏弹框
        } else {
          //点击确定
          wx.switchTab({
            url: '../myPage/myPage',
          })
        }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
    })

  }


})