/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let n = prices.length
  let dp_i_0 = 0,
    dp_i_1 = -Infinity
  for (let i = 0; i < n; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i] - fee)
    dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i])
  }
  return dp_i_0
}
