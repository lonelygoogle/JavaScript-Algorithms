/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let need = new Map(),
    window = new Map(),
    left = 0,
    right = 0,
    valid = 0,
    start = 0,
    len = Infinity;
  for (let c of t) {
    need.set(c, (need.get(c) || 0) + 1);
  }
  //   console.log(need);
  //   console.log(need.size);
  while (right < s.length) {
    let c = s[right];
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }
    right++;
    while (valid === need.size) {
      // 满足条件 且长度更短,更新输入结果 start和len
      console.log("left right length", left, right, s.length);
      console.log(s.length);
      if (right - left < len) {
        start = left;
        len = right - left;
      }
      let d = s[left];
      left++;
      if (need.has(d)) {
        window.set(d, window.get(d) - 1);
        if (window.get(d) < need.get(d)) {
          valid--;
        }
      }
    }
  }
  return len === Infinity ? "" : s.substring(start, len + start);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
