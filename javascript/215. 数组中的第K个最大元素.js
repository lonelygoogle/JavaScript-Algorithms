/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  return quickSort(nums, 0, nums.length - 1, k)
  function swap(nums, p, q) {
    const temp = nums[p]
    nums[p] = nums[q]
    nums[q] = temp
  }
  function quickSort(nums, l, r, k) {
    let index = randomPartition(nums, l, r)
    if (index === k - 1) {
      return nums[index]
    } else if (index < k - 1) {
      return quickSort(nums, index + 1, r, k)
    } else if (index > k - 1) {
      return quickSort(nums, l, index - 1, k)
    }
  }
  function randomPartition(nums, l, r) {
    let random = Math.floor(Math.random() * (r - l + 1)) + l
    swap(nums, random, r)
    return partition(nums, l, r)
  }
  function partition(nums, l, r) {
    let pivot = nums[r]
    let rightMost = r
    while (l <= r) {
      while (l <= r && nums[l] > pivot) {
        l = l + 1
      }
      while (l <= r && nums[r] <= pivot) {  // 这里=没加 就陷入死循环
        r = r - 1
      }
      // console.log(l,r)
      if (l <= r) swap(nums,l,r)
    }
    swap(nums,l,rightMost)
    return l
  }
}

let nums = [3,2,1,5,6,4],k=2
console.log(findKthLargest(nums,k))
