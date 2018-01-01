import Config from 'Config';
import {guid, log, promiseHandle, formatNumber} from '../utils/util';

class DataRepository {
    static getDateStr(data) {
      return '' + data.year + formatNumber(data.month + 1) + formatNumber(data.date); 
    }
    /**
     * 添加数据
     * @param {Object} 添加的数据
     * @returns {Promise} 
     */
    static addData(data) {
        if (!data) return false;
        data['_id'] = guid();
        const datestr = this.getDateStr(data);
        return DataRepository.findAllData(datestr).then(allData => {
            allData = allData || [];
            allData.unshift(data);
            wx.setStorage({ key: Config.ITEMS_SAVE_KEY + datestr, data: allData});
        });
    }

    /**
     * 删除数据
     * @param {string} id 数据项idid
     * @returns {Promise}
     */
    static removeData(datestr, id) {
      return DataRepository.findAllData(datestr).then(data => {
            if (!data) return;
            for (let idx = 0, len = data.length; idx < len; idx++) {
                if (data[idx] && data[idx]['_id'] == id) {
                    data.splice(idx, 1);
                    break;
                }
            }
            wx.setStorage({ key: Config.ITEMS_SAVE_KEY + datestr, data: data});
        });
    }

    /**
     * 更新数据
     * @param {Object} data 数据
     * @returns {Promise} 
     */
    static saveData(data) {
        if (!data || !data['_id']) return false;
        const datestr = this.getDateStr(data);
        return DataRepository.findAllData(datestr).then(allData => {
            if (!allData) return false;
            for (let i = 0, len = allData.length; i < len; i++) {
                if (allData[i] && allData[i]['_id'] == data['_id']) {
                    allData[i] = data;
                    break;
                }
            }
            wx.setStorage({ key: Config.ITEMS_SAVE_KEY + datestr, data: allData});
        });
        
    }

    /**
     * 获取所有数据
     * @param {data} 年月日时间戳拼接20170102
     * @returns {Promise} Promise实例
     */
    static findAllData(datestr) {
      return promiseHandle(wx.getStorage, { key: Config.ITEMS_SAVE_KEY + datestr }).then(res => res.data ? res.data : [], error => {
          return [];
        }).catch(ex => {
          log(ex);
        });
    }

    /**
     * 查找数据
     * @param {Function} 回调
     * @returns {Promise} Promise实例
     */
    static findBy(datestr, predicate) {
      return DataRepository.findAllData(datestr).then(data => {
            if (data) {
                data = data.filter(item => predicate(item));
            }
            return data;
        });
    }
}

module.exports = DataRepository;