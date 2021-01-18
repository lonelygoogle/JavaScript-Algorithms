/**
 *  基本二分查找
 * @param {number[]} array
 * @param {number} target
 * @return {number} // 索引
 */
function bSearch(array, target) {
  let left = 0,
    mid,
    right = array.length - 1

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (array[mid] < target) {
      left = mid + 1
    } else if (array[mid] > target) {
      right = mid - 1
    } else if (array[mid] === target) {
      return mid
    }
  }
  return -1
}
/**
 *  二分查找查找左边界
 * @param {number[]} array
 * @param {number} target
 * @return {number} // 索引
 */
function left_bound(array, target) {
  let left = 0,
    mid,
    right = array.length - 1

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (array[mid] < target) {
      left = mid + 1
    } else if (array[mid] > target) {
      right = mid - 1
    } else if (array[mid] === target) {
      right = mid - 1
    }
  }
  if (left >= array.length || array[left] !== target) return -1
  return left
}
/**
 *  二分查找查找右边界
 * @param {number[]} array
 * @param {number} target
 * @return {number} // 索引
 */
function right_bound(array, target) {
  let left = 0,
    mid,
    right = array.length - 1

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (array[mid] < target) {
      left = mid + 1
    } else if (array[mid] > target) {
      right = mid - 1
    } else if (array[mid] === target) {
      left = mid + 1
    }
  }
  console.log('left', left)
  console.log('right', right)
  if (right <0  || array[right] !== target) return -1
  return right
}


let arr = [4, 8, 10, 10, 10, 31, 49, 49, 49, 52]
// console.log(arr.length)
console.log(right_bound(arr, 1))
