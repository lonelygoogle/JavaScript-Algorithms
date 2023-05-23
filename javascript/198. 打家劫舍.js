/**
 * @param {number[]} nums
 * @return {number}
 */
// 未优化版 超出时间限制
var rob = function (nums) {
  return dp(nums, 0)
  function dp(nums, start) {
    if (start >= nums.length) return 0
    return Math.max(dp(nums, start + 1), nums[start] + dp(nums, start + 2))
  }
}

// 备忘录版 自顶向下的动态规划
var rob = function (nums) {
  let memo = new Array(nums.length).fill(-1)
  return dp(nums, 0)
  function dp(nums, start) {
    if (start >= nums.length) return 0
    if (memo[start] !== -1) return memo[start]
    let res = Math.max(dp(nums, start + 1), nums[start] + dp(nums, start + 2))
    memo[start] = res
    return res
  }
}

// 自底向上的动态规划，把数组变成两个数字
var rob = function (nums) {
  let n = nums.length,
    dp_i = 0,
    dp_i_1 = 0,
    dp_i_2 = 0
  for (let i = n - 1; i >= 0; i--) {
    dp_i = Math.max(dp_i_1, nums[i] + dp_i_2)
    dp_i_2 = dp_i_1
    dp_i_1 = dp_i
  }
  return dp_i
}
