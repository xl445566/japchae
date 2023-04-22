// Link: https://app.codility.com/c/run/training9QPVHH-YGS/
// Title: PermMissingElem
// Type: Time Complexity
// Code


function solution(A) {
  if (A.length === 0) return 1;

  const numbers = A.slice();
  const sum = numbers.reduce((prev, curr) => prev + curr, 0);
  const origin = (1 + numbers.length) * (1 + numbers.length + 1) / 2;

  return origin - sum;
}
