/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target, i = 0, maps = {}) {
  const map = maps
  if (map[target - nums[i]] >= 0) {
    return [map[target - nums[i]], i]
  } else {
    map[nums[i]] = i
    i++
    if (i < nums.length) {
      return twoSum(nums, target, i, map)
    } else {
      throw 'error: twoSum is not find'
    }
  }
}
// 可以扩充三数之和的解法
var twoSum1 = function (nums, target, i = 0, maps = {}) {
  let n = nums.length,
    lIndex = 0,
    rIndex = n - 1,
    sum,
    res = []
  nums = nums.sort((a, b) => a - b)
  while (lIndex <= rIndex) {
    sum = nums[lIndex] + nums[rIndex]
    let left = nums[lIndex],
      right = nums[rIndex]
    if (sum < target) {
      while (lIndex <= rIndex && left === nums[lIndex]) lIndex++
    } else if (sum > target) {
      while (lIndex <= rIndex && right === nums[rIndex]) rIndex--
    } else if (sum === target) {
      res.push([nums[lIndex], nums[rIndex]])
      while (lIndex <= rIndex && left === nums[lIndex]) lIndex++
      while (lIndex <= rIndex && right === nums[rIndex]) rIndex--
    }
  }
  return res
}

let arr = [ -4, -1, -1, 0, 1, 2 ]
console.log(twoSum1(arr, 4))
