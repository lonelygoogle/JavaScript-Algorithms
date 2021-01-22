/** 未完成
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  let n = prices.length
  function subProfit () {
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
  if (k > n / 2) return subProfit(prices);
  const dp = new Array(n).fill('').map(() => new Array(k+1).fill('').map(() => new Array(2).fill('')))

  for (let i = 0; i < n; i++) {
    for (let j = k; k>=1 ; k--) {
      if (i - 1 == -1) {
        dp[-1][k][0] = dp[i][0][0] = 0
        dp[-1][k][1] = dp[i][0][1] = -infinity
       }
      dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i]);
      dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i]);  
    }
  }
  return dp[n - 1][k][0]
};