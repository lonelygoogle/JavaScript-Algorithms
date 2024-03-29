/**
 * @param {number} n
 * @return {number}
 */
// 无空间优化版本
var climbStairs = function (n) {
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let a = 1,
    b = 2,
    sum
  for (let i = 2; i < n; i++) {
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
};
console.log(climbStairs(4));
