function solution(K, M, A) {
    let lowerBound = Math.max(...A);
    let upperBound = A.reduce((a, b) => a + b, 0);
    let result = upperBound;
  
    while (lowerBound <= upperBound) {
      let mid = Math.floor((lowerBound + upperBound) / 2);
      let count = 1;
      let currentSum = 0;
  
      for (let i = 0; i < A.length; i++) {
        if (currentSum + A[i] > mid) {
          count++;
          currentSum = A[i];
        } else {
          currentSum += A[i];
        }
      }
  
      if (count <= K) {
        result = mid;
        upperBound = mid - 1;
      } else {
        lowerBound = mid + 1;
      }
    }
  
    return result;
  }
  
  console.log(solution(3,5,[2, 1, 5, 1, 2, 2, 2]))