/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 迭代
var myPow1 = function (x, n) {
  if (n < 0) return 1 / (x * myPow(x, -(n + 1)));
  if (n === 0) return 1;
  if (n === 1) return x;
  let res = 1;
  while (n > 1) {
    if (n % 2 === 1) {
      res = x * res;
      n--;
    }
    x = x * x;
    n = n / 2;
  }
  return x * res;
};

// 递归
var myPow = function (x, n) {
  if (n < 0) return 1 / (x * myPow(x, -(n + 1)));
  if (n === 0) return 1;
  if (n === 1) return x;
  return n % 2 === 1 ? x * myPow(x, n - 1) : myPow(x * x, n / 2);
};

console.log(3 / 2);
