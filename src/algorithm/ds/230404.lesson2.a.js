// Link: https://app.codility.com/demo/results/trainingTE66X5-V9T/
// Title: CyclicRotaion
// Type: Array
// Code

function solution(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }

  let results = A.slice();
  let step = K;

  while (step) {
      const n = results.splice(results.length - 1, 1);
      results = [...n, ...results];
      step--;
  }


  return results;
}
