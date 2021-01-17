/**
 * @param {string} s
 * @return {character}
 */
// 只出现一次的字符 只需要判断第一次出现的位置和最后的位置是否相等
var firstUniqChar = function (s) {
  for (let k of s) {
    if (s.indexOf(k) === s.lastIndexOf(k)) return k
  }
  return ' '
}

// 用map实现
var firstUniqChar = function (s) {
  if (!s) return ' '
  const map = new Map()
  for (let c of s) {
    if (map.has(c)) {
      map.set(c, map.get(c) + 1)
    } else {
      map.set(c, 1)
    }
  }
  for (let c of map.keys()) {
    // 这里不能用in, 否则c就是数组的下标
    if (map.get(c) === 1) return c
  }
  return ' '
}

// 用对象实现
var firstUniqChar = function (s) {
  if (!s) return ' '
  const obj = {}
  for (let c of s) {
    if (obj[c]) {
      obj[c] += 1
    } else {
      obj[c] = 1
    }
  }
  for (let c in obj) {
    if (obj[c] === 1) return c
  }
  return ' '
}
