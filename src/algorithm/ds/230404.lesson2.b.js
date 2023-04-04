
// Link: https://app.codility.com/demo/results/training5ZKPCY-GQV/
// Title: OddOccurrencesInArray
// Type: Array
// Code

function solution(A) {
  const numbers = A.slice();
  const set = new Set();

  numbers.forEach(v => {
      if (!set.has(v)) {
          set.add(v);
      } else {
          set.delete(v);
      }
  });

  return Array.from(set)[0];
}
