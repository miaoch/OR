import DataService from '../../datas/DataService';
import { getDateStr } from '../../utils/util';
import Config from '../../datas/Config';

Page({
  data: {
    item: '',
    expressSelectData: Config.EXPRESS,
  },

  onLoad(option) {
    const { id, datestr } = option;
    let item = DataService.findById(datestr, id).then((item) => {
      item['addDate'] = getDateStr(new Date(item['addDate']));
      this.setData({
        item: item
      });
    });
  },
  /*onShow() {
    const { _id, year, month, date } = this.data.item;
    const datestr = '' + year + month + date;
    let item = DataService.findById(datestr, _id).then((item) => {
      item['addDate'] = getDateStr(new Date(item['addDate']));
      this.setData({
        item: item
      });
    });
  },*/
  closeEditPanelEvent(e) {
    wx.navigateBack();
  },
  //订单内容多行文本域变化事件
  dataChangeEvent(e) {
    const key = e.currentTarget.dataset.key;
    const value = e.detail.value;
    const { item } = this.data;
    item[key] = value;
    this.setData({ item: item });
  },
  // 保存订单数据
  saveDataEvent() {
    const { item } = this.data;
    const { name, address, phone, goods, express, remark } = item;
    
    if (!name) {
      wx.showToast({
        title: '名字不能为空！',
        image: '../../images/notice.png',
        duration: 2000
      })
      return;
    }
    if (!address) {
      wx.showToast({
        title: '地址不能为空！',
        image: '../../images/notice.png',
        duration: 2000
      })
      return;
    }
    if (!phone) {
      wx.showToast({
        title: '手机号不能为空！',
        image: '../../images/notice.png',
        duration: 2000
      })
      return;
    }
    if (!goods) {
      wx.showToast({
        title: '货号不能为空！',
        image: '../../images/notice.png',
        duration: 2000
      })
      return;
    }
    let order = new DataService(item).update();
    order && order.then(() => {
      //清空表单
      this.setData({
        item: '',
      });
    })
    wx.navigateBack();
  },
});