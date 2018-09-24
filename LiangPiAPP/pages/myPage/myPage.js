// pages/myPage/myPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch1Checked: false,
    recordArray:[
      {
        id:1,
        date:'2018-09-20',
        time:'14:30',
        eki:'北千住',
        status:'等待中',
        goodsString:`肉夹馍1个
        凉皮2个`
      },
      {
        id: 2,
        date: '2018-09-20',
        time: '14:30',
        eki: '日暮里',
        status: '已收货',
        goodsString: `烤面筋3串
        牛筋面5个`
      },
      {
        id: 3,
        date: '2018-09-20',
        time: '14:30',
        eki: '日暮里',
        status: '已取消',
        goodsString: `烤面筋3串
        牛筋面5个`
      }
    ]
  }, 
  bindSweitch1Changed: function (e) {
    console.log('开关变化 ： ', e.detail.value);
    if (e.detail.value){
      this.setData({
        recordArray: [
          {
            id: 1,
            date: '2018-09-20',
            time: '14:30',
            eki: '北千住',
            status: '等待中',
            goodsString: `肉夹馍1个
        凉皮2个`
          }]
      })
    }else{
      this.setData({
        recordArray: [
       {
          id: 1,
          date: '2018-09-20',
          time: '14:30',
          eki: '北千住',
          status: '等待中',
          goodsString: `肉夹馍1个
        凉皮2个`
      },
        {
          id: 2,
          date: '2018-09-20',
          time: '14:30',
          eki: '日暮里',
          status: '已收货',
          goodsString: `烤面筋3串
        牛筋面5个`
        },
        {
          id: 3,
          date: '2018-09-20',
          time: '14:30',
          eki: '日暮里',
          status: '已取消',
          goodsString: `烤面筋3串
        牛筋面5个`
        }]
      })
    }


  }, 
  bindCancelButtonClick:function(e){
    console.log('取消按下 ： ', e.currentTarget.id);
    wx.showModal({
      title: '提示',
      content: '确定要取消预约？',
      showCancel: true,//是否显示取消按钮
      cancelText: "否",//默认是“取消”
      //cancelColor: 'black',//取消文字的颜色
      confirmText: "是",//默认是“确定”
      // confirmColor: 'black',//确定文字的颜色
      success: function (res) {
        if (res.cancel) {
          //点击取消,默认隐藏弹框
        } else {

        }
      },
      fail: function (res) { },//接口调用失败的回调函数
      complete: function (res) { },//接口调用结束的回调函数（调用成功、失败都会执行）
    })
  }

})