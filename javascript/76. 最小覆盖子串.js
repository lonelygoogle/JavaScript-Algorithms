/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let need = new Map(),
    window = new Map(),
    n = t.length,
    left = 0,
    right = 0,
    valid = 0,
    start=0,
    len = Infinity
  for (let i in t) {
    if (!need.has(t[i])) {
      need.set(t[i], 1)
    } else {
      need.set(t[i], need.get(t[i]) + 1)
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
    while (valid === need.size) {
      if (right - left < len) {
        start = left
        len = right - left
      }
      let d = s[left]
      left++
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) valid--
        window.set(d, window.get(d)-1)
      }
    }
  }
  return len === Infinity? '': s.substr(start, len)
}

console.log(minWindow("ADOBECODEBANC", "ABC"))

