function solution(a, b) {
    let s = "";
    let letterA = "a";
    let letterB = "b";
  
    // Determine the letter with more occurrences
    if (a > b) {
      [a, b] = [b, a];
      [letterA, letterB] = [letterB, letterA];
    }
  
    while (a > 0 || b > 0) {
      // Append the letter with more occurrences until it reaches its limit
      if (b >= a && b > 0) {
        s += letterB;
        b--;
      } else if (a > 0) {
        s += letterA;
        a--;
      }
  
      // Check if the substring 'aaa' occurs in s
      if (s.slice(-3) === "aaa") {
        [a, b] = [b, a];
        [letterA, letterB] = [letterB, letterA];
      }
    }
  
    return s;
  }
  



  console.log(solution(3,5))