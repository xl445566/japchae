// Link: https://app.codility.com/programmers/lessons/5-prefix_sums/
// Title: CountDiv
// Type: Prefix Sums
// Code

function solution(A, B, K) {
  return Math.floor(B / K) - Math.floor((A - 1) / K);
}
