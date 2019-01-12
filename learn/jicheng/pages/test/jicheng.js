// pages/test/jicheng.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    function someOne(id,name) {
      this.id = id;
      this.name = name;
      this.info = function () {
        console.log("id:"+this.id);
        console.log("name:" +this.name);
      }
    }
    
    function ismale(sexual) {
      this.sexual = sexual;
      this.showSexual = function () {
        console.log("sexual:" +this.sexual);
      }
    }
    ismale.prototype = new someOne("155","zhang");   //ismale继承someOne
                                  //调用父类构造函数？？。。
    var Male = new ismale('male');
   
    Male.showSexual();
    Male.info();
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

  }
})