/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let a = 0,
    b = 1,
    sum
  for (let i = 0; i < n; i++) {
    sum = (a + b) % 1000000007
    a = b
    b = sum
  }
  return a
}

let count = 0 
const indentPrint = (n, i) => {
      let str = ' '.repeat(n)
      console.log(`${str}i=%s`, i);
}
const printReturn = (n,res) => {
  let str = ' '.repeat(n)
  console.log(`${str}return %s`, res)
}
var rawFib = function (n) {
  // 在递归函数的开头，调用 indentPrint(count++) 并打印关键变量；
  indentPrint(count++, n)
  if (n ==0) {
    // 然后在所有 return 语句之前调用 printIndent(--count) 并打印返回值。
    printReturn(count--, 0)
    return 0
  }
  if (n ==1) {
    // 然后在所有 return 语句之前调用 printIndent(--count) 并打印返回值。
    printReturn(count--,1)
    return 1
  }
  let res = rawFib(n-1) + rawFib(n-2)
  // 然后在所有 return 语句之前调用 printIndent(--count) 并打印返回值。
  printReturn(count--,res)
  return res
}

console.log('结果是',rawFib(6))
