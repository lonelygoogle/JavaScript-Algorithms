function solution(N) {
  // Implement your solution here
  let n = 0,
    number = N;
  while (number % 2 !== 1) {
    number = number / 2;
    n++;
  }
  return n;
}

console.log(solution(24))
