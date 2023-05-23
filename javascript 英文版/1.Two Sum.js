/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = new Map()
    // 是map结构 不是对象，所以不能用map[x],要用map.get
    for (let i=0,len=nums.length;i<len;i++) {
      if(map.has(target-nums[i])) {
        // map的健为数组某项的值，值为数组某项的index
        // 如果目标值减去当前数组的值， 剩下的值在map里面找到key，说明找到了
        return [map.get(target-nums[i]),i]
      } else {
        // 如果目标值减去当前数组的值， 剩下的值在map里面没有找到key，把当前值放到map
        map.set(nums[i],i)
      }
    }
    return [-1,-1]
  };