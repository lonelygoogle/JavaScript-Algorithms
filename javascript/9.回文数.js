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
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  let revertNum = 0;
  while (x > revertNum) {
    revertNum = revertNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
	return x === revertNum || x ===  Math.floor(revertNum/10)
};

console.log(isPalindrome(123))
