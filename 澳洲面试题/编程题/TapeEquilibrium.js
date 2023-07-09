// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  const sum = A.reduce((sum, acc) => acc + sum, 0),
    length = A.length;
  let minDiff = Infinity,
    leftSum = 0,
    rightSum = 0;
    // cannot i< length because cannot separate [1,2,3] and [0]
    // for (let i = 0; i < length; i++) {
    for (let i = 0; i < length-1; i++) {
    leftSum += A[i];
    rightSum = sum - leftSum;
    minDiff = Math.min(minDiff, Math.abs(leftSum - rightSum));
  }
  return minDiff;
}

let A = [-1000, 1000];
console.log(solution(A));
