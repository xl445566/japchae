// Link: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/
// Title: Flags
// Type: Prime and composite
// Code

function solution(A) {
  const heights = A.slice();
  const N = A.length;
  const peaks = [];

  for (let i = 1; i < heights.length - 1; i++) {
      if (heights[i] > heights[i - 1] && heights[i] > heights[i + 1]) peaks.push(i);
  }

  const numPeaks = peaks.length;

  if (numPeaks < 2) {
      return numPeaks;
  }

  let maxFlags = 1;
  let lowerBound = 1;
  let upperBound = numPeaks;
  
  while (lowerBound <= upperBound) {
      const numFlags = Math.floor((lowerBound + upperBound) / 2);
      let lastFlag = peaks[0];
      let flagsSet = 1;

      for (let i = 1; i < numPeaks; i++) {
          if (peaks[i] - lastFlag >= numFlags) {
              flagsSet++;
              lastFlag = peaks[i];

              if (flagsSet === numFlags) {
                  break;
              }
          }
      }

      if (flagsSet >= numFlags) {
          maxFlags = numFlags;
          lowerBound = numFlags + 1;
      } else {
          upperBound = numFlags - 1;
      }
  }

  return maxFlags;
}
