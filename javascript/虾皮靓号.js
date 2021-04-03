// 从字符串找靓号（4个连续相同数字，或四个连续递增加1的数字 ），符合以下两个条件之一的号码可认为是靓号

// 1. 至少连续4个相同的数字

// 2. 至少连续4个递增为1的数字

function isNiceNumber(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === str[i] || str[j] === str[j - 1] + 1) {
        count++;
      } else {
        break;
      }
      console.log("count", count);
      if (count >= 4) return true;
    }
  }
  return false;
}

console.log(isNiceNumber("12341111"));
