// Link: https://app.codility.com/programmers/lessons/4-counting_elements/
// Title: frogRiverOne
// Type: Counting Element
// Code

function solution(X, A) {
  const leaves = A.slice();
  const set = new Set(Array(X).fill(0).map((_, i) => i + 1));

  for (let i = 0; i < leaves.length; i++) {
      const leaf = leaves[i];
      set.delete(leaf);

      if (set.size === 0) {
          return i;
      }
  }

  return -1;
}
