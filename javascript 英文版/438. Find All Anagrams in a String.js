/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let need = new Map(),
    window = new Map(),
    left = 0,
    right = 0,
    valid = 0,
    res = [];
  for (let t of p) {
    need.set(t, (need.get(t) || 0) + 1);
  }

  while (right < s.length) {
    const c = s[right];
    right++;
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }
    while (right - left >= p.length) {
      if (valid === need.size) {
        res.push(left);
      }
      const d = s[left];
      left++;
      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }
  return res;
};

let s = "cbaebabacd",
  p = "abc";

console.log(findAnagrams(s, p));
