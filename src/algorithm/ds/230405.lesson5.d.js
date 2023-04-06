// Link: https://app.codility.com/programmers/lessons/5-prefix_sums/
// Title: MinAvgTwoSlice
// Type: Prefix Sums
// Code

function solution(A) {
  const numbers = A.slice();
  let min = (A[1] + A[0]) / 2;
  let result = 0;

  for (let i = 2; i < numbers.length; i++) {
      const avgTwo = (numbers[i] + numbers[i - 1]) / 2;
      const avgThree = (numbers[i] + numbers[i - 1] + numbers[i - 2]) / 3;

      if (min > avgTwo) {
          min = avgTwo;
          result = i - 1;
      }

      if (min > avgThree) {
          min = avgThree;
          result = i - 2;
      }
  }

  return result;
}
