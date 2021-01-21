/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // 查找右边界
  let i = 0,
    j = nums.length - 1,
    m
  while (i <= j) {
    m = Math.floor((i + j) / 2)
    if (nums[m] < target) {
      i = m + 1
    } else if (nums[m] > target) {
      j = m - 1
    } else if (nums[m] === target) {
      i = m + 1
    }
  }
  let right = j
  // 右边界找不到值 直接返回0
  if (right < 0 || nums[right] !== target) return 0
  // 查找左边界
  i = 0
  j = nums.length - 1
  while (i <= j) {
    m = Math.floor((i + j) / 2)
    if (nums[m] < target) {
      i = m + 1
    } else if (nums[m] > target) {
      j = m - 1
    } else if (nums[m] === target) {
      j = m - 1
    }
  }
  let left = i
  return right - left + 1
}

// 优化算法
var search2 = function (nums, target) {
  return help(nums, target) - help(nums, target-1) 
  function help (nums, target) {
    let i = 0,
    j = nums.length - 1,
    m
    while (i <= j) {
      m = Math.floor((i + j) / 2)
      if (nums[m] < target) {
        i = m + 1
      } else if (nums[m] > target) {
        j = m - 1
      } else if (nums[m] === target) {
        i = m + 1
      }
    }
    return i
  }
}


arr = [4, 8, 10, 10, 10, 31, 49, 49, 49, 52]
console.log(search2(arr, 52))
