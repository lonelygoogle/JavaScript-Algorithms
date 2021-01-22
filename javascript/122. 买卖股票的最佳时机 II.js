/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length
  let dp_i_0 = 0,
    dp_i_1 = -Infinity
  for (let i = 0; i < n; i++) {
    let tmp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, tmp - prices[i])
  }
  return dp_i_0
}
let k = 3, n=4
const dp = new Array(n).fill('').map(() => new Array(k+1).fill('').map(() => new Array(2).fill('')))
console.log(dp)
