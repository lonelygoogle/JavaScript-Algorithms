/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = [],
    track = [];
  let trackSum = 0;
  const sorted = candidates.sort((a, b) => a - b);

  const backtrack = (nums, start, target) => {
    if (trackSum === target) {
      res.push([...track]);
      return;
    }
    if (trackSum > target) return;

    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue;
      }
      trackSum += nums[i];
      track.push(nums[i]);
      backtrack(nums, i + 1, target);
      trackSum -= nums[i];
      track.pop();
    }
  };

  backtrack(sorted, 0, target);
  return res;
};

let candidates = [2, 5, 2, 1, 2],
  target = 5;

console.log(combinationSum2(candidates, target));
