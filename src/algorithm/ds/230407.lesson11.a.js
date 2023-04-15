// Link: https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/
// Title: CountNonDivisoble
// Type: Sieve of Eratosthenes
// Code

function solution(A) {
  const LENGTH = A.length;
  const countArray = Array((LENGTH * 2 + 1)).fill(0);

  for (let i = 0; i < LENGTH; i++) {
      countArray[A[i]] += 1;
  }

  const results = [];

  for (let i = 0; i < LENGTH; i++) {
      const number = A[i];
      let count = 0;

      for (let j = 1; j ** 2 <= number; j++) {
          if (number % j === 0) {
              count += countArray[j];

              if(number / j !== j) {
                  count += countArray[number / j];
              }
              
          }
      }

      results.push(LENGTH - count);
  }

  return results;
}
