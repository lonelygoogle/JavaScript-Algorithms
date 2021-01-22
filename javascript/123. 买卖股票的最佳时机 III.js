/**
 * 最多交易2笔，k<=2
 * @param {number[]} prices
 * @return {number}
 *   dp[i][2][0] = max(dp[i-1][2][0], dp[i-1][2][1] + prices[i])
    dp[i][2][1] = max(dp[i-1][2][1], dp[i-1][1][0] - prices[i])
    dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
    dp[i][1][1] = max(dp[i-1][1][1], dp[i-1][0][0] - prices[i])
                = max(dp[i-1][1][1], - prices[i])
  */
var maxProfit = function(prices) {
  let n = prices.length
  let dp_1_0 = 0,
    dp_1_1 = -Infinity,
    dp_2_0 = 0,
    dp_2_1 = -Infinity
  for (let i = 0; i < n; i++) {
    dp_2_0 = Math.max(dp_2_0, dp_2_1 + prices[i])
    dp_2_1 = Math.max(dp_2_1, dp_1_0 - prices[i])
    dp_1_0 = Math.max(dp_1_0, dp_1_1 + prices[i])
    dp_1_1 = Math.max(dp_1_1,  - prices[i])
  }
  return dp_2_0
};