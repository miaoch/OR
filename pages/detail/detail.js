import DataService from '../../datas/DataService';
import {getDateStr, formatNumber} from '../../utils/util';
import Config from '../../datas/Config';

Page({
    data: {
        item: '',
        expressSelectData: Config.EXPRESS,
    },

    onLoad(option) {
        const {id, datestr} = option;
        let item = DataService.findById(datestr, id).then((item) => {
            item['addDate'] = getDateStr(new Date(item['addDate']));
            this.setData({
                item: item
            });
        });
    },
    onShow(option) {
      const { _id, year, month, date } = this.data.item;
      if (!this.data.item) return;
      const datestr = '' + year + formatNumber(month + 1) + formatNumber(date);
      let item = DataService.findById(datestr, _id).then((item) => {
        item['addDate'] = getDateStr(new Date(item['addDate']));
        this.setData({
          item: item
        });
      });
    },
    removeTapEvent(e) {
      const { _id, name, year, month, date  } = this.data.item;
      const datestr = '' + year + formatNumber(month + 1) + formatNumber(date);
      wx.showModal({
        title: '提示',
        content: '确认删除(' + name + ')吗？',
        success: function (res) {
          if (res.confirm) {
            new DataService({ _id: _id, year: year, month: month, date: date}).delete().then(() => {
              wx.navigateBack();
            });
          } else if (res.cancel) {
            //TODO
          }
        }
      })
    },
    settingTapEvent(e) {
      const {item} = this.data;
      var goodarr = item.goods.trim().toUpperCase().split(/[,\s，]+/);
      var packagefee = (Math.floor((goodarr.length - 1) / 3) + 1) * Config.PACKAGE_FEE
      var costsum = 0;
      goodarr.forEach((item, index, array) => {
        var cost = Config.GOOD_COST[item] || 0;
        costsum += cost;
      });
      var feemap = Config.EXPRESS_FEE[item.express] || Config.EXPRESS_FEE[Config.DEFAULT_EXPRESS];
      var key1 = item.address.substring(0, 2);
      var key2 = item.address.substring(0, 3);
      var expressfee = feemap[key1] || feemap[key2] || 0;
      //（95 + 11邮费+ 3包装= 109）
      var result = '成员：' + Config.MEMBER + ' ' + Config.MEMBER_PHONE + '\n';
      result += '顾客：' + item.name + ' ' + item.phone + ' ' + item.address + '\n';
      result += '货号：' + item.goods + '\n';
      result += '(' + costsum + ' + ' + expressfee + '邮费 + ' + packagefee + '包装 = ' + 
        (costsum + expressfee + packagefee) + ')';
      wx.setClipboardData({
        data: result,
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '已写入剪切板！',
                icon: 'success',
                duration: 2000
              })
            },
            fail: function (res) {
              wx.showToast({
                title: '写入剪切板失败！',
                image:'../../images/notice.png',
                duration: 2000
              })
            }
          })
        }
      })
    },
    editTapEvent(e) {
      const { _id, year, month, date} = this.data.item;
      wx.navigateTo({
        url: '../edit/edit?id=' + _id + '&datestr=' + year + formatNumber(month + 1) + formatNumber(date),
      });
    }
});