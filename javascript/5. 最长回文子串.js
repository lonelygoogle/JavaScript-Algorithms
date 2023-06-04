/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  function palindrome(s, l, r) {
    // 中心扩散法
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    // return s.substr(l+1, r-l-1)
    return s.slice(l + 1, r);
  }
  let n = s.length;
  let res = "";
  for (let i = 0; i < n; i++) {
    // 中心扩散法
    let res1 = palindrome(s, i, i);
    let res2 = palindrome(s, i, i + 1);
    res = res.length >= res1.length ? res : res1;
    res = res.length >= res2.length ? res : res2;
  }
  return res;
};
