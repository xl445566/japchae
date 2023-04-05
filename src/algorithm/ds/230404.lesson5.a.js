// Link: https://app.codility.com/programmers/lessons/5-prefix_sums/
// Title: PassingCars
// Type: Prefix Sums
// Code

function solution(A) {
  const directions = A.slice();
  let westCar = 0; // Q
  let result = 0; // P
  // (P, Q) (동, 서) (0, 1)

  while (directions.length) {
      const direction = directions.pop();
      
      if (direction === 1) {
          westCar++; // (P, Q)의 쌍에서 Q에 들어가는 경우를 카운트 해요.
      }

      if (direction === 0) {
          result += westCar // (P, Q)의 쌍에서 P의 값이 정해지며 올 수 있는 Q의 경우는 direction === 1 인 경우에 westCar에 담아두었기 때문에 더해요.
      }

      if (result > 1000000000) {
          return -1;
      }
  }

  return result;
}
