/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
// 中心拓展 On2
var shortestToChar = function(s, c) {
  let arr = new Array(s.length).fill(0)
  for (let i=0; i<s.length;i++) {
    let l =i,r=i,shortest = Number.MAX_VALUE
    while (l>=0) {
      if (s[l] === c) {
        shortest = Math.min(shortest, i-l)
        break
      }
      l--
    }
    while (r<s.length) {
      if (s[r] === c) {
        shortest = Math.min(shortest, r-i)
        break
      }
      r++
    }
    arr[i] = shortest
  }
  return arr
};

// 窗口 On
var shortestToChar = function(s, c) {
  let arr = new Array(s.length).fill(0)
  let l = s[0] ===c? 0: Number.MAX_VALUE,
      r=s.indexOf(c,1)
  for (let i=0;i<s.length;i++) {
    arr[i] = Math.min(Math.abs(i-l), Math.abs(r-i))
    if (i===r) {
      l = r
      r = s.indexOf(c,l+1)
    }
  }
  return arr
};