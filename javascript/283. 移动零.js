/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 双指针 左指针左边是非零的处理好了的序列，右指针左边直到左指针处均为零。
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 0;
  while (j < nums.length) {
    if (nums[j] !== 0) {
      swap(nums, i, j);
      i++;
    }
    j++;
  }
  function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
};
