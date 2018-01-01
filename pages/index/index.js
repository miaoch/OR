import DataService from '../../datas/DataService';
import Config from '../../datas/Config';
import { promiseHandle, log, formatNumber } from '../../utils/util';

Page({
  data: {
    showMonth: {},
    data: { showMonth: '' },
    selectDateText: '',
    pickerDateValue: '',
    isEditMode: false,

    //快递选择项
    expressSelectedValue: Config.DEFAULT_EXPRESS,
    expressSelectData: Config.EXPRESS,

    // updatePanel 数据
    updatePanelTop: 10000,
    updatePanelAnimationData: {},

    // 事项列表
    itemList: [],
    editItemList: [] //编辑勾选中的事项id
  },

  onLoad() {
    let _this = this;
    promiseHandle(wx.getSystemInfo).then((data) => {
      _this.setData({
        updatePanelTop: data.windowHeight
      });
    });
    changeDate.call(this);
  },

  onShow() {
    loadItemListData.call(this);
  },

  datePickerChangeEvent(e) {
    const date = new Date(Date.parse(e.detail.value));
    changeDate.call(this, new Date(date.getFullYear(), date.getMonth(), 1));
  },

  changeDateEvent(e) {
    const { year, month } = e.currentTarget.dataset;
    changeDate.call(this, new Date(year, parseInt(month) - 1, 1));
  },

  dateClickEvent(e) {
    const { year, month, date } = e.currentTarget.dataset;
    const { data } = this.data;
    let selectDateText = '';

    data['selected']['year'] = year;
    data['selected']['month'] = month;
    data['selected']['date'] = date;

    this.setData({ data: data });

    changeDate.call(this, new Date(year, parseInt(month) - 1, date));
  },

  //新增订单单击动作事件
  showUpdatePanelEvent() {
    showUpdatePanel.call(this);
    this.setData({ isEditMode: true });
    var _this = this;
    //读取剪切板
    wx.getClipboardData({
      success: function (res) {
        var data = res.data;
        var datas = data.trim().split(/[\s]+/);
        if (datas.length != 3) return;
        var obj = {};
        for (var i = 0; i < datas.length; i++) {
          if (/1[3-9]\d{9}/.test(datas[i])) {
            obj.phone = datas[i];
          } else if (datas[i].length <= 7) {
            obj.name = datas[i];
          } else {
            obj.address = datas[i];
          }
        }
        _this.setData(obj);
      }
    })
  },

  //新增订单返回事件
  closeUpdatePanelEvent() {
    closeUpdatePanel.call(this);
    this.setData({ isEditMode: false });
  },

  //订单列表项长按动作事件
  listItemLongTapEvent(e) {
    const { isEditMode } = this.data;
    const { id, name } = e.currentTarget.dataset;
    const { year, month, date } = this.data.data.selected;
    let datestr = '' + year + formatNumber(month) + formatNumber(date);
    console.log(month);
    let _this = this;
    //如果不是编辑勾选模式下才生效
    if (!isEditMode) {
      wx.showModal({
        title: '提示',
        content: '确认删除(' + name + ')吗？',
        success: function (res) {
          if (res.confirm) {
            new DataService({ _id: id, year: year, month: month - 1, date, date }).delete().then(() => {
              loadItemListData.call(_this);
            });
          } else if (res.cancel) {
            //TODO
          }
        }
      })
    }
  },

  //订单内容多行文本域变化事件
  dataChangeEvent(e) {
    const key = e.currentTarget.dataset.key;
    const value = e.detail.value;
    this.setData({ [key]: value });
  },

  // 保存订单数据
  saveDataEvent() {
    const { name, address, phone, goods, express, remark } = this.data;
    const { year, month, date } = this.data.data.selected;
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
    var goodarr = goods.trim().toUpperCase().split(/[,\s，]+/);
    var gain = (Math.floor((goodarr.length - 1) / 3) + 1) * -1 * Config.PACKAGE_FEE;
    goodarr.forEach((item, index, array) => {
      var price = Config.GOOD_PRICE[item] || 0;
      var cost = Config.GOOD_COST[item] || 0;
      gain += (price - cost);
    });

    let order = new DataService({
      name: name,
      address: address,
      phone: phone,
      goods: goods,
      express: express,
      gain: gain,
      remark: remark,
      year: year,
      month: parseInt(month) - 1,
      date: date
    }).save();
    order && order.then(() => {
      //清空表单
      this.setData({
        name: '',
        address: '',
        phone: '',
        goods: '',
        express: '',
        remark: '',
        levelSelectedValue: 0,
      });
      loadItemListData.call(this);
    })
    closeUpdatePanel.call(this);
    this.setData({ isEditMode: false });
  },

  //订单单击事件->跳转到详情页
  listItemClickEvent(e) {
    const { isEditMode } = this.data;
    const { year, month, date } = this.data.data.selected;
    const { id } = e.currentTarget.dataset;
    if (!isEditMode) {
      wx.navigateTo({
        url: '../detail/detail?id=' + id + '&datestr=' + year + formatNumber(month) + formatNumber(date),
      })
    }
  },
});

/**
 * 显示订单数据添加更新面板
 */
function showUpdatePanel() {
  let animation = wx.createAnimation({
    duration: 600
  });
  animation.translateY('-100%').step();
  this.setData({
    updatePanelAnimationData: animation.export()
  });
}

/**
 * 关闭事项数据添加更新面板
 */
function closeUpdatePanel() {
  let animation = wx.createAnimation({
    duration: 600
  });
  animation.translateY('100%').step();
  this.setData({
    updatePanelAnimationData: animation.export()
  });
}

/**
 * 加载订单列表数据
 */
function loadItemListData() {
  const { year, month, date } = this.data.data.selected;
  let _this = this;
  DataService.findByDate('' + year + formatNumber(month) + formatNumber(date)).then((data) => {
    _this.setData({ itemList: data });
  });
}

/**
 * 变更日期数据
 * @param {Date} targetDate 当前日期对象
 */
function changeDate(targetDate) {
  let date = targetDate || new Date();
  let currentDateObj = new Date();

  let showMonth, //当天显示月份
    showYear, //当前显示年份
    showDay, //当前显示星期
    showDate, //当前显示第几天
    showMonthFirstDateDay, //当前显示月份第一天的星期
    showMonthLastDateDay, //当前显示月份最后一天的星期
    showMonthDateCount; //当前月份的总天数

  let data = [];

  showDate = date.getDate();
  showMonth = date.getMonth() + 1;
  showYear = date.getFullYear();
  showDay = date.getDay();

  showMonthDateCount = new Date(showYear, showMonth, 0).getDate();
  date.setDate(1);
  showMonthFirstDateDay = date.getDay(); //当前显示月份第一天的星期
  date.setDate(showMonthDateCount);
  showMonthLastDateDay = date.getDay(); //当前显示月份最后一天的星期  

  let beforeDayCount = 0,
    beforeYear, //上页月年份
    beforMonth, //上页月份
    afterYear, //下页年份
    afterMonth, //下页月份
    afterDayCount = 0, //上页显示天数
    beforeMonthDayCount = 0; //上页月份总天数

  //上一个月月份
  beforMonth = showMonth === 1 ? 12 : showMonth - 1;
  //上一个月年份
  beforeYear = showMonth === 1 ? showYear - 1 : showYear;
  //下个月月份
  afterMonth = showMonth === 12 ? 1 : showMonth + 1;
  //下个月年份
  afterYear = showMonth === 12 ? showYear + 1 : showYear;

  //获取上一页的显示天数
  if (showMonthFirstDateDay != 0)
    beforeDayCount = showMonthFirstDateDay - 1;
  else
    beforeDayCount = 6;

  //获取下页的显示天数
  if (showMonthLastDateDay != 0)
    afterDayCount = 7 - showMonthLastDateDay;
  else
    showMonthLastDateDay = 0;

  //如果天数不够6行，则补充完整
  let tDay = showMonthDateCount + beforeDayCount + afterDayCount;
  if (tDay <= 35)
    afterDayCount += (42 - tDay); //6行7列 = 42

  let selected = this.data.data['selected'] || { year: showYear, month: showMonth, date: showDate };
  let selectDateText = selected.year + '年' + formatNumber(selected.month) + '月' + formatNumber(selected.date) + '日';

  data = {
    currentDate: currentDateObj.getDate(), //当天日期第几天
    currentYear: currentDateObj.getFullYear(), //当天年份
    currentDay: currentDateObj.getDay(), //当天星期
    currentMonth: currentDateObj.getMonth() + 1, //当天月份
    showMonth: showMonth, //当前显示月份
    showDate: showDate, //当前显示月份的第几天 
    showYear: showYear, //当前显示月份的年份
    beforeYear: beforeYear, //当前页上一页的年份
    beforMonth: beforMonth, //当前页上一页的月份
    afterYear: afterYear, //当前页下一页的年份
    afterMonth: afterMonth, //当前页下一页的月份
    selected: selected,
    selectDateText: selectDateText
  };

  let dates = [];
  let _id = 0; //为wx:key指定

  if (beforeDayCount > 0) {
    beforeMonthDayCount = new Date(beforeYear, beforMonth, 0).getDate();
    for (let fIdx = 0; fIdx < beforeDayCount; fIdx++) {
      dates.unshift({
        _id: _id,
        year: beforeYear,
        month: beforMonth,
        date: beforeMonthDayCount - fIdx
      });
      _id++;
    }
  }

  for (let cIdx = 1; cIdx <= showMonthDateCount; cIdx++) {
    dates.push({
      _id: _id,
      active: (selected['year'] == showYear && selected['month'] == showMonth && selected['date'] == cIdx), //选中状态判断
      year: showYear,
      month: showMonth,
      date: cIdx
    });
    _id++;
  }

  if (afterDayCount > 0) {
    for (let lIdx = 1; lIdx <= afterDayCount; lIdx++) {
      dates.push({
        _id: _id,
        year: afterYear,
        month: afterMonth,
        date: lIdx
      });
      _id++;
    }
  }

  data.dates = dates;


  this.setData({ data: data, pickerDateValue: showYear + '-' + showMonth });
  loadItemListData.call(this);
}
