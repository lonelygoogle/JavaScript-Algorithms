function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    let context = this
    if (timer) clearTimeout(timer)
    // 漏了timer=这几个字就无法实现清空的防抖功能
    timer = setTimeout(fn.bind(context, ...args), delay)
  }
}
