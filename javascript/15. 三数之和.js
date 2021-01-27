/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  function twoSum(nums, start, target) {
    let n = nums.length,
      lIndex = start,
      rIndex = n - 1,
      sum,
      res = []
    while (lIndex < rIndex) {
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
  nums = nums.sort((a, b) => a - b)
  console.log('排序后的nums', nums)
  let n = nums.length,
    res = []
  for (let i = 0; i < n; i++) {
    let tuples = twoSum(nums,i+1,-nums[i])
    // console.log('tuple',tuples)
    // console.log('i',i)
    // console.log('nums[i]',nums[i])
    for (let value of tuples) {
      value.push(nums[i])
      res.push(value)
    }
    while (i<n-1 && nums[i]===nums[i+1]) i++
  }
  return res
}
let arr =[-1,0,1,2,-1,-4]
console.log(threeSum(arr))
