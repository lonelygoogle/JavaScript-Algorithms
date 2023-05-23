/**
 * @param {number} x
 * @return {boolean}
 * 原始未优化解法
 */
// var isPalindrome = function (x) {
//   let a = x.toString();
//   let b = a.split("").reverse().join("");
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// };
// 优化版算法
var isPalindrome = function (x) {
  // 排除负数和个位是0的数，他们不可能是回文整数
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  let revertNum = 0;
  // 反转一半数字即可
  while (x > revertNum) {
    revertNum = revertNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  // 原来的x有偶数位和奇数位两种情况
	return x === revertNum || x ===  Math.floor(revertNum/10)
};

console.log(isPalindrome(123))
