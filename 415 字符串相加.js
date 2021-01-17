/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let str = ''
  let carry = 0
  while (i >= 0 || j >= 0) {
    let n1 = i >= 0 ? num1.charAt(i) - '0' : 0
    let n2 = j >= 0 ? num2.charAt(j) - '0' : 0
    let tmp = n1 + n2 + carry
    str +=tmp % 10
    carry = Math.floor(tmp / 10)
    i--
    j--
  }
  if (carry === 1) {
    str += '1'

  }
  return str.split('').reverse().join('')
}

console.log(addStrings('1', '9'))
