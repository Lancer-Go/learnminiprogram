// pages/another.js
Page({
  Tohome() {
    wx.redirectTo({
      url: '/pages/home',
    })
  },
  Toanother() {
    wx.redirectTo({
      url: '/pages/another',
    })
  }
})