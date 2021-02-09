/**
 *
 * @param {*} arr
 * @param {*} l
 * @param {*} r
 * 没有实现随机获取pivot的版本
 */

function quickSort(arr, l, r) {
  if (l >= r) return
  let left = l,
    right = r,
    pivot = arr[left]
  while (left < right) {
    while (left < right && arr[right] >= pivot) right--
    if (left < right && arr[right] < pivot) arr[left] = arr[right]
    while (left < right && arr[left] <= pivot) left++
    if (left < right && arr[left] > pivot) arr[right] = arr[left]
    if (left >= right) arr[left] = pivot
  }
  quickSort(arr, l, right - 1)
  quickSort(arr, right + 1, r)
  return arr
}

/**
 * 
 * @param {*} arr 
 * @param {*} l 
 * @param {*} r 
 * 实现随机获取pivot的版本
 */
function swap(nums, p, q) {
  const temp = nums[p]
  nums[p] = nums[q]
  nums[q] = temp
}
function randomQuickSort(arr,l,r) {
  if (l >= r) return
  let random = Math.floor(Math.random() * (r - l + 1)) + l
  swap(arr, random, l)
  let left = l,
    right = r,
    pivot = arr[left]
  while (left < right) {
    while (left < right && arr[right] >= pivot) right--
    if (left < right && arr[right] < pivot) arr[left] = arr[right]
    while (left < right && arr[left] <= pivot) left++
    if (left < right && arr[left] > pivot) arr[right] = arr[left]
    if (left >= right) arr[left] = pivot
  }
  randomQuickSort(arr, l, right - 1)
  randomQuickSort(arr, right + 1, r)
  return arr
}
let arr = [19, 97, 9, 17, 1, 8,1,19]
console.log(randomQuickSort(arr,0,arr.length-1))
