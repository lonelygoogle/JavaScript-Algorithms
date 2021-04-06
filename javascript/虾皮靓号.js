// 从字符串找靓号（4个连续相同数字，或四个连续递增加1的数字 ），符合以下两个条件之一的号码可认为是靓号

// 1. 至少连续4个相同的数字

// 2. 至少连续4个递增为1的数字

// 双重循环法
function isNiceNumber1(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === str[i] || parseInt(str[j]) === parseInt(str[j - 1]) + 1) {
        count++;
      } else {
        break;
      }
      // console.log("count", count);
      if (count >= 4) return true;
    }
  }
  return false;
}

function isNiceNumberZHOU(str) {
  if (str.length < 4) return false;
  let i = 0,
    j = i + 1,
    flag = null;
  while (j < str.length) {
    if (str[j] === str[j - 1]) {
      if (flag !== "same") i = j - 1;
      flag = "same";
    } else if (+str[j] - +str[j - 1] === 1) {
      if (flag !== "up") i = j - 1;
      flag = "up";
    } else {
      flag = null;
      i = j;
    }
    if (j - i >= 3) return true;
    j++;
  }
  return false;
}

function isNiceNumber(str) {
  if (str.length < 4) return false;
  let i = 0,
    j = i + 1,
    flag = null;
  while (j < str.length) {
    if (str[j] === str[j - 1]) {
      if (flag !== "same") i = j - 1;
      flag = "same";
    } else if (+str[j] - +str[j - 1] === 1) {
      if (flag !== "up") i = j - 1;
      flag = "up";
    } else {
      flag = null;
      i = j;
    }
    if (j - i >= 3) return true;
    j++;
  }
  return false;
}

console.log(isNiceNumber("1123115678"));
