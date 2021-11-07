function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    let context = this
    if (timer) { 
      clearTimeout(timer)
      timer = null
    }
    // 漏了timer=这几个字就无法实现清空的防抖功能
    timer = setTimeout(fn.bind(context, ...args), delay)
  }
}

// 定时器版
function throttle1 (fun, wait){
  let timeout = null
  return function(...args){
    let context = this
    if(!timeout){
      timeout = setTimeout(() => {
        // fun.call(context, ...args)
        fun.apply(context, args)
        timeout = null 
      }, wait)
    }
  }
}

// 时间戳版
function throttle(fn, delay) {
  var preTime = Date.now();

  return function(...args) {
    var context = this,
      nowTime = Date.now();

    // 如果两次时间间隔超过了指定时间，则执行函数。
    if (nowTime - preTime >= delay) {
      preTime = Date.now();
      return fn.apply(context, args);
    }
  };
}
