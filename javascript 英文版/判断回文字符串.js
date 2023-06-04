// 用双指针
let isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
};

console.log(isPalindrome("abcaa"));
