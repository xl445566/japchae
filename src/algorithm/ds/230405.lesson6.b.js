// Link: https://app.codility.com/programmers/lessons/6-sorting/
// Title: MaxProductOfThree
// Type: Sorting
// Code

function solution(A) {
  const numbers = A.slice().sort((a, b) => a - b);
  const caseA = numbers[0] * numbers[1] * numbers[numbers.length - 1];
  const caseB = numbers[numbers.length - 1] * numbers[numbers.length - 2] * numbers[numbers.length - 3];

  return Math.max(caseA, caseB);
}
