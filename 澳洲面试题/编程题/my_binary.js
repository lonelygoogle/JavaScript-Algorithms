function solution(N) {
  // Implement your solution here
  const value = N.toString(2);
  console.log(value);
  let count = 0,
    maxCount = 0;
  for (let i = 1; i < value.length; i++) {
    if (value[i] == 1) {
      maxCount = Math.max(maxCount, count);
      count = 0;
    } else {
      count++;
    }
  }
  return maxCount;
}

console.log(solution(1041));
