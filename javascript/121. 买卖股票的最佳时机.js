/**
 * @param {number[]} prices
 * @return {number}
 */
// 性能好的特异解法
var maxProfit = function(prices) {
  let min = prices[0],
      profit = 0;
  for (i=1; i< prices.length; i++) {
      if (prices[i] > prices [i-1]) {
          profit = Math.max(profit, prices[i] - min)
      } else{
          min = Math.min(min, prices[i])
      }
  }
  return profit
};

// let arr = [7,1,3,4,6,4]
let arr = [6,7,5,4,3,2]
console.log(maxProfit(arr))
// 统一解法
var maxProfit = function(prices) {
  let n = prices.length
  let dp_i_0 = 0,
    dp_i_1 = -Infinity
  for (let i = 0; i < n; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, -prices[i])
  }
  return dp_i_0
};