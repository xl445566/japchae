// Link: https://app.codility.com/programmers/lessons/4-counting_elements/
// Title: MaxCounters
// Type: Counting Element
// Code

function solution(N, A) {
  const numbers = A.filter(v => v <= N + 1); // N + 1 보다 큰 값은 의미 없으므로 filter
  const results = Array(N).fill(0); // 반환 배열 초기화
  const MAX_COUNTER = N + 1; // maxCounter 상수
  
  let max = 0; // lastMax를 갱신할 값을 저장하고 있는 변수
  let lastMax = 0; // 최근 maxCounter에 적용할 최대 값
  
  numbers.forEach(value => {
      const index = value - 1; // index는 value - 1

      if (value === MAX_COUNTER) {
          lastMax = max; // maxCounter 조건에는 lastMax를 max값으로 갱신
      } else {
          if (results[index] < lastMax) { // maxCounter의 lastMax값을 적용하지 않은 경우 적용
              results[index] = lastMax;
          }
          
          results[index] += 1; // increase 로직인 +1
          
          if (max < results[index]) {
              max = results[index]; // 임시로 저장하고 있는 max값보다 result[index]값이 큰 경우에 max 값을 갱신하여 이후 maxCounter 조건에 최대 값을 전달할 수 있도록 Math.max를 사용하지 않기위한...
          }
      }
  });
  
  return results.map(v => v < lastMax ? lastMax : v); // numbers배열에 모든 index가 없기에 순회하지 못한 요소는 maxCounter의 조건이 적용되도록 lastMax를 할당하고 나머지는 그대로 유지
}
