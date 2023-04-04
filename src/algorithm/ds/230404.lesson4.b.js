// Link: https://app.codility.com/programmers/lessons/4-counting_elements/
// Title: PermCheck
// Type: Counting Element
// Code

function solution(A) {
  const numbers = A.slice();
  const set = new Set(Array(numbers.length).fill(0).map((_, i) => i + 1));

  numbers.forEach(v => {
      set.delete(v);
  });

  return set.size === 0 ? 1 : 0;
}
