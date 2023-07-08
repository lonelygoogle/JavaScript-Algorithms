// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
  // Implement your solution here
  let length = A.length,
    arr = new Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    arr[(i + K) % length] = A[i];
  }
  return arr;
}

let A = [3, 8, 9, 7, 6];
console.log(solution([5], 1));
