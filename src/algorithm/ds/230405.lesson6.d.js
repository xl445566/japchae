// Link: https://app.codility.com/programmers/lessons/6-sorting/
// Title: NumberOfDiscIntersections
// Type: Sorting
// Code

function solution(A) {
  let count = 0;
  const pairs = A.map((radius, center) => [center - radius, center + radius]);
  pairs.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < pairs.length; i++) {
      const rightP = pairs[i][1];

      for (let j = i + 1; j < pairs.length; j++) {
          const leftP = pairs[j][0];

          if (rightP >= leftP) {
              count++;
              
              if (count > 10000000) {
                  return -1;
              }
          } else {
            break;
          }
      }

  }

  return count;
}
