/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let memo = new Array(n + 1).fill(0);
  return dp(memo, n);
};

var dp = function (memo, n) {
  if (n == 0 || n == 1) return n;
  if (memo[n] !== 0) return memo[n];
  memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
  return memo[n];
};

var tableFib = function (N) {
  if (N === 0) return 0;
  let dp = new Array(N + 1).fill(0);
  // base case
  dp[0] = 0;
  dp[1] = 1;
  // 状态转移
  for (let i = 2; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[N];
};

var updatedFib = function (n) {
  if (n === 0 || n === 1) {
    // base case
    return n;
  }
  // 分别代表 dp[i - 1] 和 dp[i - 2]
  let dp_i_1 = 1,
    dp_i_2 = 0;
  for (let i = 2; i <= n; i++) {
    // dp[i] = dp[i - 1] + dp[i - 2];
    const dp_i = dp_i_1 + dp_i_2;
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }
  return dp_i_1;
};
console.log(updatedFib(20));
