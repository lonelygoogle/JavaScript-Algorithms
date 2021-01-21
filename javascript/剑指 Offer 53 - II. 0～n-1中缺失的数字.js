/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let i = 0, j= nums.length - 1,m
  while (i<=j) {
    m = Math.floor((i + j) / 2)
    if (nums[m] === m) {
      i = m +1
    } else {
      j = m - 1
    }
  }
  return i
}
let arr = [0, 1, 2, 3, 5, 6, 7]
console.log(missingNumber(arr))
