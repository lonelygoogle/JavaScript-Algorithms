/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 此解法理解过于复杂，用下面的解法
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

// 此解法易于理解

var twoSum = function(nums, target) {
  let map = new Map()
  // 是map结构 不是对象，所以不能用map[x],要用map.get
  for (let i=0,len=nums.length;i<len;i++) {
    if(map.has(target-nums[i])) {
      // map的健为数组某项的值，值为数组某项的index
      // 如果目标值减去当前数组的值， 剩下的值在map里面找到key，说明找到了
      return [map.get(target-nums[i]),i]
    } else {
      // 如果目标值减去当前数组的值， 剩下的值在map里面没有找到key，把当前值放到map
      map.set(nums[i],i)
    }
  }
  return [-1,-1]
};
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
