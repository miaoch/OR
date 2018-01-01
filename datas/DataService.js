import DataRepository from 'DataRepository';
import Config from 'Config';
import { promiseHandle, formatNumber } from '../utils/util';

/**
 * 数据业务类
 */
class DataSerivce {

  constructor(props) {
    props = props || {};
    this.id = props['_id'] || 0;
    this.date = props['date'] || '';
    this.month = props['month'] || '';
    this.year = props['year'] || '';
    this.name = props['name'] || '';
    this.address = props['address'] || '';
    this.phone = props['phone'] || '';
    this.goods = props['goods'] || '';
    this.express = props['express'] || Config.DEFAULT_EXPRESS;
    this.expnumber = props['expnumber'] || '';
    this.gain = props['gain'] || '';
    this.remark = props['remark'] || '';
  }

  /**
   * 保存当前对象数据
   */
  save() {
    if (this._checkProps()) {
      return DataRepository.addData({
        year: this.year,
        month: this.month,
        date: this.date,
        name: this.name,
        address: this.address,
        phone: this.phone,
        goods: this.goods,
        express: this.express,
        expnumber: this.expnumber,
        gain: this.gain,
        remark: this.remark,
        addDate: new Date().getTime()
      });
    }
  }

  /**
   * 保存当前对象数据
   */
  update() {
    if (this._checkProps()) {
      return DataRepository.saveData({
        _id: this.id,
        year: this.year,
        month: this.month,
        date: this.date,
        name: this.name,
        address: this.address,
        phone: this.phone,
        goods: this.goods,
        express: this.express,
        expnumber: this.expnumber,
        gain: this.gain,
        remark: this.remark,
        addDate: new Date().getTime()
      });
    }
  }

  /**
   * 获取所有订单数据
   */
  static findAll(datestr) {
    return DataRepository.findAllData(datestr)
      .then(data => data.data ? data.data : []);
  }

  /**
   * 通过id获取事项
   */
  static findById(datestr, id) {
    return DataRepository.findBy(datestr, item => item['_id'] == id)
      .then(items => (items && items.length > 0) ? items[0] : null);
  }

  /**
   * 根据id删除事项数据
   */
  delete() {
    const datestr = '' + this.year + formatNumber(this.month + 1) + formatNumber(this.date);
    return DataRepository.removeData(datestr, this.id);
  }

  /**
   * 根据日期查找所有符合条件的订单记录
   * @param {Date} date 日期对象
   * @returns {Array} 事项集合
   */
  static findByDate(datestr) {
    if (!datestr) return [];
    return DataRepository.findAllData(datestr).then(data => data);
  }
  /**
   * 根据日期查找所有符合条件的订单记录
   * @param {datestr} 201801
   * @returns {Array} 事项集合
   */
  static findByMonth(datestr) {
    if (!datestr) return [];
    var result = {};
    //每个月有最多31天
    for (var i=1; i<=31; i++) {
      let date = formatNumber(i);
      try {
        var value = wx.getStorageSync(Config.ITEMS_SAVE_KEY + datestr + date)
        if (value && value.length > 0) {
          result[i] = 1;
        } else {
          result[i] = 0;
        }
      } catch (e) {}
    }
    return result;
  }

  _checkProps() {
    return this.name && this.phone && this.address && this.goods;
  }
}

module.exports = DataSerivce;