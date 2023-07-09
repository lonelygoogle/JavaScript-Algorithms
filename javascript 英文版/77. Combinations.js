/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [],
    track = [];
  const backtrack = (start, n, k) => {
    if (track.length === k) {
      res.push([...track]);
      return;
      // 这里加上return 反之多余的计算
    }
    for (let i = start; i <= n; i++) {
      track.push(i);
      backtrack(i + 1, n, k);
      track.pop();
    }
  };
  backtrack(1, n, k);
  return res;
};

console.log(combine(4, 2));
