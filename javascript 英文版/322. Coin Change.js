/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChangeOld = function (coins, amount) {
  return dp(coins, amount);
};

// 以下第一步，伪代码
var pseudocodeDp = function (coins, amount) {
  let result = Infinity;
  for (let coin of coins) {
    result = Math.min(result, subprobem + 1);
  }
  return result;
};
const indentPrint = (n, i) => {
  let str = " ".repeat(n);
  console.log(`${str}i=%s`, i);
};
const printReturn = (n, res) => {
  let str = " ".repeat(n);
  console.log(`${str}return %s`, res);
};
let recursionCounter = 0;

// 第二部，把base case if (amount === 0) return 0 加入
var dp = function (coins, amount) {
  if (amount === 0) {
    return 0;
  }
  if (amount < 0) {
    return -1;
  }
  let result = Infinity;
  for (let coin of coins) {
    const subprobem = dp(coins, amount - coin);
    // 子问题无解 跳过
    if (subprobem === -1) continue;
    result = Math.min(result, subprobem + 1);
  }
  // 关键，成功解决了Infinity转成-1或者值的问题
  return result === Infinity ? -1 : result;
};

// 第三步，剪枝法，备忘录+递归
var coinChange3 = function (coins, amount) {
  // 剪枝法备忘录要数组的长度必须是amount+1
  const memo = new Array(amount + 1).fill(-888);

  const dp = (coins, amount) => {
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    if (memo[amount] != -888) return memo[amount];

    let result = Infinity;
    for (let coin of coins) {
      const subprobem = dp(coins, amount - coin);
      // 子问题无解 跳过
      if (subprobem === -1) continue;
      result = Math.min(result, subprobem + 1);
    }
    // 关键，成功解决了Infinity转成-1或者值的问题
    memo[amount] = result === Infinity ? -1 : result;
    return memo[amount];
  };

  return dp(coins, amount);
};

// 第四步，dp数组法
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(amount + 1);

  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
};

let coins = [1, 2, 5],
  amount = 11;

console.log(coinChange([1, 2, 5], 11));
