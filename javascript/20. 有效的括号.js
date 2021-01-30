/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let n = s.length
  if (n % 2 === 1) return false
  const stack = []
  for (c of s) {
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c)
    } else {
      // 右括号的情况
      if (stack.length === 0) return false // 右括号出现之前栈内没有左括号 false
      let left = stack[stack.length - 1] //获取栈顶的左括号
      if (
        (c === ')' && left === '(') ||
        (c === ']' && left === '[') ||
        (c === '}' && left === '{')
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return !stack.length
}
// 哈希表办法
var isValid = function (s) {
  let n = s.length
  if (n % 2 === 1) return false
  const stack = []
  const pairs = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ])
  for (c of s) {
    if (pairs.has(c)) {
      if (!stack.length || pairs.get(c) !== stack[stack.length - 1]) {
        return false
      } else {
        stack.pop()
      }
    } else {
      stack.push(c)
    }
  }
  return !stack.length
}
