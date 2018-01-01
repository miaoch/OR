import { MEMBER_SAVE_KEY, MEMBER_PHONE_SAVE_KEY, PACKAGE_FEE_SAVE_KEY } from '../../datas/Config';

Page({
  data: {
    member: '',
    member_phone: '',
    packagefee: 0
  },

  onLoad() {
    try {
      var member = wx.getStorageSync(MEMBER_SAVE_KEY);
      var member_phone = wx.getStorageSync(MEMBER_PHONE_SAVE_KEY);
      var packagefee = wx.getStorageSync(PACKAGE_FEE_SAVE_KEY);
      this.setData({ member, member_phone, packagefee });
    } catch (e) {
      // Do something when catch error
    }
  },
  closeEditPanelEvent(e) {
    wx.navigateBack();
  },
  //订单内容多行文本域变化事件
  dataChangeEvent(e) {
    const key = e.currentTarget.dataset.key;
    const value = e.detail.value;
    this.setData({ [key]: value });
  },
  // 保存订单数据
  saveDataEvent() {
    const { member, member_phone,packagefee} = this.data;
    if (!member) {
      wx.showToast({
        title: '成员不能为空！',
        image: '../../images/notice.png',
        duration: 2000
      })
      return;
    }
    if (!member_phone) {
      wx.showToast({
        title: '手机号不能为空！',
        image: '../../images/notice.png',
        duration: 2000
      })
      return;
    }
    if (!packagefee) {
      wx.showToast({
        title: '包装费不能为空！',
        image: '../../images/notice.png',
        duration: 2000
      })
      return;
    }
    wx.setStorage({
      key: MEMBER_SAVE_KEY,
      data: member
    });
    wx.setStorage({
      key: MEMBER_PHONE_SAVE_KEY,
      data: member_phone
    });
    wx.setStorage({
      key: PACKAGE_FEE_SAVE_KEY,
      data: packagefee
    });
    wx.navigateBack();
  },
});