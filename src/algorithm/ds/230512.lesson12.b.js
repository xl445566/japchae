// Link: https://app.codility.com/programmers/lessons/12-euclidean_algorithm/common_prime_divisors/
// Title: Common prime divisors
// Type: Euclidean algorithm
// Time Complexity: O(Z * log(max(A) + max(B))**2)
// Code

function getGreatestCommonDivisor(a, b) {
  if ((a % b) === 0) {
      return b;
  } else {
      return getGreatestCommonDivisor(b, a % b);
  }
}

function solution(A, B) {
  let result = 0;

  for (let i = 0; i < A.length; i++) {
      let a = A[i];
      let b = B[i];
      let c;
      let gcd = getGreatestCommonDivisor(a, b);
      
      c = 0;
      while (c !== 1) {
          c = getGreatestCommonDivisor(a, gcd);
          a = a / c;
      }

      c = 0;
      while (c !== 1) {
          c = getGreatestCommonDivisor(b, gcd);
          b = b / c;
      }

      if (a === 1 && b === 1) {
          result++;
      }

  }
  
  return result;
}
