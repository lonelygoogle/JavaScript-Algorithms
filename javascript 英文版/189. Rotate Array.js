/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
      let length = nums.length,
    arr = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    arr[(i + k) % length] = nums[i];
  }
  for (let i = 0; i < length; i++) {
    nums[i] = arr[i] 
  }
};

const repeat = (n)=> {
  console.log(`1${' '.repeat(n)}1`)
}

repeat(3)