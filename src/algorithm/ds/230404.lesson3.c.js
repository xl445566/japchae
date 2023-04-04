// Link: https://app.codility.com/c/run/trainingE4PYYH-KKH/
// Title: TapeEquilibrium
// Type: Time Complexity
// Code

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  if (A.length === 2) {
      return Math.abs(A[0] - A[1]);
  }

  const numbers = A.slice();
  let result = Number.MAX_SAFE_INTEGER;
  let left = numbers[0];
  let right = numbers.reduce((prev, curr) => prev + curr, 0) - numbers[0];

  for (let i = 1; i < numbers.length; i++) {
      const diff = Math.abs(left - right);
      
      result = result > diff ? diff : result;

      left += numbers[i];
      right -= numbers[i];
  }
  

  return result;
}
