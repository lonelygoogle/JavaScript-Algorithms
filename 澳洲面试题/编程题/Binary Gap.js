// A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
// Write a function solution(N) that takes an integer N as input and returns the length of the longest binary gap. If N doesn't contain a binary gap, the function should return 0.
// Example:
// Input: 1041
// 10000010001
// Output: 5

function solution(N) {
    const binary = N.toString(2); // Convert N to binary representation
    let maxGap = 0; // Variable to track the length of the longest binary gap
    let currentGap = 0; // Variable to track the length of the current binary gap
  
    // Iterate through the binary representation
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === '1') {
        // If a '1' is encountered, check if it's the first '1' or in the middle of a binary gap
        if (currentGap !== 0) {
          // If it's in the middle of a binary gap, update the maxGap if necessary
          maxGap = Math.max(maxGap, currentGap);
          currentGap = 0; // Reset the currentGap
        }
      } else {
        // If a '0' is encountered, increment the currentGap
        currentGap++;
      }
    }
  
    return maxGap;
  }
  