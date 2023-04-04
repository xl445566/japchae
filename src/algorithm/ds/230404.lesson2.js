// Link: https://app.codility.com/demo/results/trainingTE66X5-V9T/
// Title: CyclicRotaion
// Type: Array
// Code

function solution(A, K) {
  // A    [3, 8, 9, 7, 6]
  // K    3
  // 9 7 6 3 8
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
