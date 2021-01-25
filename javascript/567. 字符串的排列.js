/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

var checkInclusion = function(s1, s2) {
  let need = new Map(),
    window = new Map(),
    n = s1.length,
    left = 0,
    right = 0,
    valid = 0
  for (let i in s1) {
    if (!need.has(s1[i])) {
      need.set(s1[i], 1)
    } else {
      need.set(s1[i], need.get(s1[i]) + 1)
    }
  }
  while (right < s2.length) {
    let c = s2[right]
    right++
    if (need.has(c)) {
      if (!window.has(c)) {
        window.set(c, 1)
      } else {
        window.set(c, window.get(c) + 1)
      }
      if (need.get(c) === window.get(c)) valid++
    }
    // 判断左侧窗口是否要收缩
    while (right - left >= n) {
      if (valid === need.size) {
        return true
      }
      let d = s2[left]
      left++
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--
        window.set(d, window.get(d)-1)
      }
    }
  }
  return false
}