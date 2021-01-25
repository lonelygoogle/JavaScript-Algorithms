/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, p) {
  let need = new Map(),
    window = new Map(),
    n = p.length,
    left = 0,
    right = 0,
    valid = 0,
    res = []
  for (let i in p) {
    if (!need.has(p[i])) {
      need.set(p[i], 1)
    } else {
      need.set(p[i], need.get(p[i]) + 1)
    }
  }
  while (right < s.length) {
    let c = s[right]
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
        res.push(left)
      }
      let d = s[left]
      left++
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--
        window.set(d, window.get(d)-1)
      }
    }
  }
  return res
}