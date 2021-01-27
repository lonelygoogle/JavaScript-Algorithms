/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0,
    n = height.length,
    right = n-1,
    left_max = height[0],
    right_max = height[n-1],
    res = 0
  while (left <= right) {
    left_max = Math.max(left_max,height[left])
    right_max = Math.max(right_max,height[right])
    if (left_max < right_max) {
      res+= left_max - height[left]
      left++
    } else {
      res+=right_max - height[right]
      right--
    }
  }
  return res
}
let arr = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(arr))
