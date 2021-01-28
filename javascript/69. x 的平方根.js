/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0,
    right = x,
    mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid < x) {
      left = mid + 1
    } else if (mid * mid == x) {
      return mid
    }
  }
  return right
}
