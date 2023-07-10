// function solution(s) {
//     var c = s[0];
//     if ___ {  // please fix condition
//         return 'upper';
//     } else if ___ {  // please fix condition
//         return 'lower';
//     } else if ___ {  // please fix condition
//         return 'digit';
//     } else {
//         return "other";
//     }
// }

function solution(s) {
  var c = s[0];
  if (c <= "Z" && c >= "A") {
    return "upper";
  } else if (c <= "z " && c >= "a") {
    return "lower";
  } else if (c <= "9" && c >= "0") {
    return "digit";
  } else {
    return "other";
  }
}

console.log(solution("_Aa9abc"));
