/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  const dp = new Array(amount + 1).fill(amount+1);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);
      }
    }
  }
  return dp[amount] === amount+1 ? -1 : dp[amount];
};

var coinChange = function (coins, amount) {
  if (amount === 0) return 0;
  const dp = new Array(amount + 1).fill(amount+1);
  dp[0] = 0;
  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  return dp[amount] === amount+1 ? -1 : dp[amount];
};

// 另一种解法
 var coinChange = function(coins, amount) {
  let memo = new Array(amount+1).fill(Infinity)
  const dp = (coins, amount) => {
      if (amount ==0) return 0
      if (amount <0) return -1
      if (memo[amount] !==Infinity) {
          return memo[amount]
      }
      let res = Infinity
      for (let coin of coins) {
          let sub = dp(coins, amount - coin)
          if (sub == -1) continue
          res = Math.min(res, sub+1)
      }
      memo[amount] = res == Infinity? -1 :res
      return memo[amount]
  }
  return dp(coins, amount)
};

