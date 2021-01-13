/**
 * @param {number} n
 * @return {string}
 */
// 自己截取第一个字符串方法
var thousandSeparator = function (n) {
  let count = 0
  let str = ''
  while (n) {
    let a = n % 10
    n = Math.floor(n / 10)
    str += a.toString()
    count++
    if (count % 3 === 0) {
      str += ','
    }
  }
  str = str.split('').reverse().join('')
  return str.substr(0, 1) == ',' ? str.substr(1) : str
}

// 优化办法 用&&n来去除首位可能的.
var thousandSeparator = function (n) {
  let count = 0
  let str = ''
  do {
    let a = n % 10
    n = Math.floor(n / 10)
    str += a.toString()
    count++
    if (count % 3 === 0 && n) {
      str += '.'
    }
  } while (n)
  return str.split('').reverse().join('')
}

// 正则实现
var thousandSeparator = function (n) {
  const reg = /(\d)(?=(?:\d{3})+$)/g;
  return n.toString().replace(reg, '$1.')
}

console.log(thousandSeparator(123456789))
