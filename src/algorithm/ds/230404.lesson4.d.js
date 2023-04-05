// Link: https://app.codility.com/programmers/lessons/4-counting_elements/
// Title: MissingInteager
// Type: Counting Element
// Code

function solution(A) {
  const numbers = A.filter(v => v > 0);

  if (numbers.length === 0) {
      return 1;
  }

  const set = new Set(Array(A.length).fill(0).map((_, i) => i + 1));

  numbers.forEach(n => {
      set.delete(n);
  });

  const results = Array.from(set);
  
  return results.length === 0 ? numbers.length + 1 : results[0];
}
