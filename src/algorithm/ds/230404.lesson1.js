// Link: https://app.codility.com/demo/results/trainingM3D6TJ-QJF/
// Title: BinaryGap
// Type: 이진수
// Code

function solution(N) {
  const binary = N.toString(2).split('');
  let count = 0;
  let isStart = false;
  let result = 0;

  while (binary.length) {
      const b = binary.pop(); // 이진수의 뒤에서 부터 하는게 포인트
      
      if (b === '1') {
          if (!isStart) {
              isStart = true;
          } else {
              result = result < count ? count : result;
          }

          count = 0;
      } else {
          count++;
      }
  }

  return result;
}
