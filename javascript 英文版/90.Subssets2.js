/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [],
    track = [];
  nums.sort((a, b) => a - b);
  const backtrack = (start, nums) => {
    res.push([...track]);
    for (let i = start; i < nums.length; i++) {
      // 相邻的相同 通过continue剪枝，即第二个不走
      if (i > start && nums[i] === nums[i - 1]) continue;
      track.push(nums[i]);
      backtrack(i + 1, nums);
      track.pop();
    }
  };
  backtrack(0, nums);
  return res;
};

console.log(subsetsWithDup([2, 1, 2]));
