/*
 * @description 页面埋点统计（停留时间）
 *
 * 当浏览器进入页面时，触发onload
 * 当关闭浏览器时，执行顺序 onbeforeunload--> visibilitychange --> onunload
 * 每一次进入页面 entry_time  记当前时间戳，初始化时记一次当前时间戳
 * 每一次隐藏页面 hidden_time 记当前时间戳， onbeforeunload时再记一次当前时间戳
 * hidden_time[i] - entry_time[i] 位每次停留的时间，求和为总的停留时间。
 *
 *
 * new PageView({closeCb: fn})
 *
 */
function PageView(option) {
    // 计算页面显示时的时间戳
    this.entry_time = [],
    // 计算页面隐藏时的时间戳
    this.hidden_time = [],
    // 停留时间  总的停留时间 = 停留时间累加
    this.split_time = [],
    // 总的停留时间
    this.stay_time = 0,

    this.closeCb = option.closeCb || null
    // 初始化
    this.init();
  }
  
  
  
  // 页面 进入
  PageView.prototype.countEntryTime = function () {
    this.entry_time.push(new Date().getTime());
  };
  
  // 页面 隐藏
  PageView.prototype.countHiddenTime = function () {
    this.hidden_time.push(new Date().getTime());
  };
  
  // 组装数据
  PageView.prototype.getAnalysisData = function () {
    let aEntryTime = this.entry_time,
      aHiddenTime = this.hidden_time;
  
    // 计算停留时间
    for (let i = 0; i < aHiddenTime.length; i++) {
      let t = +(aHiddenTime[i] - aEntryTime[i])
      this.split_time.push(t);
    }
  
    // 计算停留总时长
    let nStayTime = 0;
    for (let i = 0; i < this.split_time.length; i++) {
      nStayTime += this.split_time[i];
    };
    nStayTime = +nStayTime.toFixed(0);
    this.stay_time = nStayTime;
  
    return {
      split_time: this.split_time,
      stay_time: this.stay_time
    }
  };
  
  // 关闭或刷新页面数据处理 回调页面逻辑
  PageView.prototype.setAnalysis = function () {
    let data = this.getAnalysisData();
    if (data.stay_time) {
      this.closeCb && this.closeCb(data);
    } else {
      console.error('停留时间计算错误');
    }
  };
  
  // 关闭或刷新页面
  PageView.prototype.initCloseWindow = function () {
    let self = this;
    // onbeforeunload onunload https://stackoverflow.com/questions/6895564/difference-between-onbeforeunload-and-onunload
    window.addEventListener("beforeunload", function (event) {
      // 关闭或刷新时 记一次hidden时间
      self.countHiddenTime();
      self.setAnalysis();
    });
  };
  
  /**
   * @description 页面 显示隐藏
   * 参考: https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
   */
  PageView.prototype.initChangeVisible = function () {
    let self = this;
    function handleVisibilityChange() {
      // 页面隐藏计算时间
      if (document[hidden]) {
        self.countHiddenTime();
      } else {
        // 页面显示统计时间
        self.countEntryTime();
      }
    }
  
    // 设置隐藏属性和改变可见属性的事件的名称
    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }
  
    // 兼容 addEventListener
    if (document.addEventListener) {
      document.addEventListener(visibilityChange, handleVisibilityChange, false);
    } else {
      document.attachEvent('on' + visibilityChange, handleVisibilityChange);
    }
  
  };
  
  PageView.prototype.init = function () {
    // 第一次进入页面时 记entry时间
    this.countEntryTime();
    // 初始化 页面隐藏时间
    this.initChangeVisible();
    // 初始化 页面关闭或刷新事件
    this.initCloseWindow();
  };
  

  module.exports = PageView;

  