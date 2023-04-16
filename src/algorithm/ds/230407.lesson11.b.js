// Link: https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/
// Title: CountSemiprimes
// Type: Sieve of Eratosthenes
// Code

function solution(N, P, Q) {
  const countList = Array(N + 1).fill(0);

  for (let i = 4; i <= N; i++) {
      const number = i;

      for (let j = 2; j <= Math.sqrt(number); j++) {
          if (number % j === 0) {
              const q = number / j;

              let countA = 0;

              for (let k = 1; k <= Math.sqrt(q); k++) {
                  if (q % k === 0) {
                    countA += 2;
                  }
              }

              let countB = 0;
              
              for (let k = 1; k <= Math.sqrt(j); k++) {
                  if (j % k === 0) {
                    countB += 2;
                  }
              }

              if (countA === 2 && countB === 2) {
                  countList[number] = 1;
              }
          }
      }
  }

  const prefixSums = [];
  let sum = 0;

  countList.forEach(n => {
      sum += n;
      prefixSums.push(sum);
  });

  const results = [];
  
  for (let i = 0; i < P.length; i++) {
      const start = P[i] - 1;
      const end = Q[i];

      results.push(prefixSums[end] - prefixSums[start]);
  }
  
  return results;
}
