// Link: https://app.codility.com/programmers/lessons/6-sorting/
// Title: Triangle
// Type: Sorting
// Code

function solution(A) {
  const nums = A.slice().sort((a, b) => a - b); // 오름차 순으로 정렬

  for (let i = 2; i < nums.length; i++) { // 3개의 숫자를 구해야 하므로 i = 2 부터 시작
      const a = nums[i - 2]; // 가장 작은 수
      const b = nums[i - 1]; // 중간
      const c = nums[i]; // 가장 큰 수

      // 3개의 요소를 뽑을 수 있는 모든 경우의 수를 체크하지 않고
      // 연속하는 3개의 요소를 체크해도 되는 이유는
      // 오름차순으로 정렬했기 때문에 연속하는 3개의 수가 가장 작은수 + 중간 > 가장 큰 수의 조건에 일치하지 않으면 
      // 사실 가장 작은수의 왼쪽의 수는 더 작기 때문에 반드시 실패하는 경우이므로 체크하지 않아요.
      
      if (a + b > c) { // 문제의 조건을 만족하려면 가장 작은수 + 중간 > 가장 큰 수의 조건을 통과하면 되므로 해당하는 경우를 발견하면 즉시 return 1
          return 1;
      }
  }

  return 0; // 조건을 만족한느 경우를 찾지 못했으므로 return 0
}
