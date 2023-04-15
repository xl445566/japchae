// Link: https://app.codility.com/programmers/lessons/12-euclidean_algorithm/
// Title: ChocolatesByNumbers
// Type: Euclidean algorithm
// Code

// 최대공약수 구하는 공식
// 유클리드 호제법
// numA, numB의 최대공약수는 numA % numB 가 r이라고 하면 
// GCD(numA, numB) 
// >> GCD(numB, numA % numB) 
// >> ... 
// >> GCD(x, y)에서 y가 0인 경우 x가 최대공약수이다.
function getGCD(a, b) {
  if (b === 0) return a;
  return getGCD(b, a % b);
}

function solution(N, M) {
  const gcd = getGCD(N, M);

  return Math.floor(N / gcd);
}