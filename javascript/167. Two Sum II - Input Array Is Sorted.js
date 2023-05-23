/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let lo =0, hi =numbers.length-1
    while (lo <= hi) {
        if (numbers[lo]+numbers[hi] < target) {
            lo++
        } else if (numbers[lo] + numbers[hi] > target) {
            hi--
        } else if (numbers[lo] +numbers[hi] == target) {
            return [lo+1,hi+1]
        }
    }
    return [-1,-1]
};