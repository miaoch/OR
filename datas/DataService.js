import DataRepository from 'DataRepository';
import Config from 'Config';
import {promiseHandle} from '../utils/util';

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
     * 获取所有事项数据
     */
    static findAll() {
        return DataRepository.findAllData()
            .then(data => data.data ? data.data : []);
    }

    /**
     * 通过id获取事项
     */
    static findById(id) {
        return DataRepository.findBy(item => item['_id'] == id)
            .then(items => (items && items.length > 0) ? items[0] : null); 
    }

    /**
     * 根据id删除事项数据
     */
    delete() {
        return DataRepository.removeData(this.id);
    }

    /**
     * 批量删除数据
     * @param {Array} ids 事项Id集合
     */
    static deleteRange(ids) {
        return DataRepository.removeRange(ids);
    }

    /**
     * 根据日期查找所有符合条件的事项记录
     * @param {Date} date 日期对象
     * @returns {Array} 事项集合
     */
    static findByDate(date) {
        if (!date) return [];
        return DataRepository.findBy(item => {
            return item && item['date'] == date.getDate() &&
                item['month'] == date.getMonth() &&
                item['year'] == date.getFullYear();
        }).then(data => data);
    }

    _checkProps() {
        return true;
        //return this.title && this.level && this.date && this.year && this.month;
    }
}

module.exports = DataSerivce;