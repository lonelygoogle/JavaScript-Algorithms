enum Nice {
  ASCENDING,
  SAME
}
function isNiceNumber(str: string) {
  if (str.length < 4) return false
  let i = 0, j = i + 1, flag: Nice | null = null; 
  while (j < str.length) {
      if (str[j] === str[j - 1]) {
          if (flag !== Nice.SAME) i = j - 1;
          flag = Nice.SAME;
      } else if (+str[j] - +str[j - 1] === 1 ) {
          if (flag !== Nice.ASCENDING) i = j - 1;
          flag = Nice.ASCENDING;
      } else {
          flag = null;
          i = j;
      }
      if (j - i >= 3) return true;
      j++;
  }
  return false;
}
console.log(isNiceNumber("1123"));