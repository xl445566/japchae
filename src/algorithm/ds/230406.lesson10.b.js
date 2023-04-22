// Link: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/
// Title: MinPerimeterRectangle
// Type: Prime and composite
// Code

function solution(N) {
  const x = Math.sqrt(N);

  if (x % 1 === 0) return 4 * x;

  let a = 1;

  for (let i = 2; i < x; i++) {
      if (N % i === 0) {
          a = Math.max(i, a);
      }
  }

  let b = N / a;

  return 2 * (a + b);
}
