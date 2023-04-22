// Link: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/
// Title: CountFactors
// Type: Prime and composite
// Code

function solution(N) {
  // 제곱근의 약수를 구하고
  // 예: 100의약수 > 1 2 4 5 10(제곱근) 20 25 50 100
  // 제곱근의 약수의 2배를 하고 
  // 이유: 위의 예를 보면 1 2 4 5 의 반대에 20 25 50 100 이 있으므로 
  // 제곱근이 딱 떨어지는 경우에는 자기 자신도 포함해야 하므로 + 1
  // 이유: 위의 예를 보면 10 을 추기해야 하므로
  
  if (N === 1) return 1;

  let factorCount = 1;
  const squareRoot = Math.sqrt(N);

  for (let i = 2; i < squareRoot; i++) {
      if (N % i === 0) factorCount++;
  }

  factorCount *= 2;

  if (squareRoot % 1 === 0) {
      factorCount++;
  }

  return factorCount;
}
