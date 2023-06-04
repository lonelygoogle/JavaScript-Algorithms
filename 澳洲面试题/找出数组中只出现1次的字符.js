// given a non-emty array of intergers nums, every element appears twice except for one. find that single one.you must implement a solution with a linear runtime complexity and use only constant extra

function singleNumber(nums) {
  const freq = {};

  for (const num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (const num in freq) {
    if (freq[num] === 1) {
      return parseInt(num);
    }
  }
}

console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
console.log(singleNumber([1])); // Output: 1
