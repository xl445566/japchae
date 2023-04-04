// Link: https://app.codility.com/demo/results/trainingTE66X5-V9T/
// Title: CyclicRotaion
// Type: Array
// Code

function solution(A, K) {
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
