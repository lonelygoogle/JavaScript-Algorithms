/** 同剑指48，这里用另一种解法，套用滑动窗口的通用模板
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let window = new Map(),
    left = 0,
    right = 0,
    res = 0
  while (right < s.length) {
    let c = s[right]
    right++
    if (!window.has(c)) {
      window.set(c, 1)
    } else {
      window.set(c, window.get(c) + 1)
    }
    // 判断左侧窗口是否要收缩
    while (window.get(c) >1) {
      let d = s[left]
      left++
      if (window.has(d)) {
        window.set(d, window.get(d)-1)
      }
    }
    res = Math.max(res, right - left)
  }
  return res
}