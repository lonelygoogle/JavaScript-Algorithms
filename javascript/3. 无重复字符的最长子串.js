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

// 简单版（用对象）
function lengthOfLongestSubstring(s) {
  const window = {};
  for (const c of s) {
    window[c] = 0;
  }

  let left = 0,
    right = 0;
  let result = 0; // 记录结果
  while (right < s.length) {
    // c 是将移入窗口的字符
    const c = s[right];
    // 右移窗口
    right++;

    // 进行窗口内数据的一系列更新
    window[c]++;

    // 判断左侧窗口是否要收缩
    while (window[c] > 1) {
      // d 是将移出窗口的字符
      const d = s[left];
      // 左移窗口
      left++;

      // 进行窗口内数据的一系列更新
      window[d]--;
    }

    // 在这里更新答案
    result = Math.max(result, right - left);
  }

  return result;
}