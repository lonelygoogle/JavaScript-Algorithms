function solution(N, A) {
  // Implement your solution here
  const length = A.length;
  let count = new Array(N).fill(0),
    maxValue = 0;

  for (let i = 0; i < length; i++) {
    let x =A[i] - 1
    if (x >= 0 && x < N) {
      count[x] += 1;
      maxValue = Math.max(maxValue, count[x])
    } else if (x === N) {
      for(let j=0; j<N;j++) {
        count[j]= maxValue
      }
    }
  }
  return count;
}

A = [3, 4, 4, 6, 1, 4, 4];
console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
