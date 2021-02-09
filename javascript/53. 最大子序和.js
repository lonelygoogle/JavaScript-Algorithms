/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let result = nums[0],
    pre = 0
    // nums.forEach(x=> {
    //   pre = Math.max(pre+x,x)
    //   result = Math.max(result, pre)
    // })
    // for (let i=0;i<nums.length;i++) {
    //   pre = Math.max(pre+nums[i],nums[i])
    //   result = Math.max(result, pre)
    // }
    for (let x of nums) {
      pre = Math.max(pre+x,x)  // 拿之前的和加当前项和当前项比，如果当前项大，说明之前的
      // 负数，直接取当前项
      result = Math.max(result, pre)
    }
  return result
}

let arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(arr))
