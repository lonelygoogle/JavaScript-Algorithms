/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  let a = 1,
    b = 1,
    sum = 1
  for (let i = 2; i <=n; i++) {
    sum = (a + b) % 1000000007
    a = b
    b = sum
  }
  return sum
}
