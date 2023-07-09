// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
  // Implement your solution here
  let set = new Set();
  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
    if (set.size === X) {
      return i;
    }
  }
  return -1;
}
let X = 5,
  A = [1, 3];
console.log(solution(5, [1, 3, 1, 4, 2, 3, 4, 5]));
