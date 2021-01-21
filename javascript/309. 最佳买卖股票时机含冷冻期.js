/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length
  let dp_i_0 = 0,
    dp_i_1 = -Infinity,
    dp_pre_0 = 0 // 代表dp[i-2][0]
  for (let i = 0; i < n; i++) {
    let temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, dp_pre_0 - prices[i])
    dp_pre_0 = temp
  }
  return dp_i_0
}
