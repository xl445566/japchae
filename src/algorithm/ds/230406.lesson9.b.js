// Link: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/
// Title: MaxSliceSum
// Type: Maximum slice problem
// Code

function solution(A) {
  const nums = A.slice();
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
      sum += nums[i];

      if (sum < 0) {
          sum = 0;
      }

      if (sum > maxSum) {
          maxSum = sum;
      }
  }

  return maxSum === 0 ? Math.max(...nums) : maxSum;
}
