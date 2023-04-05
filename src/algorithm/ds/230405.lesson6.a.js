// Link: https://app.codility.com/programmers/lessons/6-sorting/
// Title: Distinct
// Type: Sorting
// Code

function solution(A) {
  const set = new Set();
  const numbers = A.slice();

  numbers.forEach(n => {
      set.add(n);
  });

  return set.size;
}
