// Link: https://app.codility.com/demo/results/training7RW5G3-7J4/
// Title: FrogJmp
// Type: Time Complexity
// Code

function solution(X, Y, D) {
  if (Y - X === 0) return 0;

  const diff = Y - X;
  const q = Math.floor(diff / D);
  const r = diff % D;

  let result = 0
  result += q;
  result += r > 0 ? 1 : 0;

  return result;
}
