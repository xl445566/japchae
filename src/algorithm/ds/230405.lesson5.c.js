// Link: https://app.codility.com/programmers/lessons/5-prefix_sums/
// Title: GenomicRangeQuery
// Type: Prefix Sums
// Code

function solution(S, P, Q) {
  const results = [];

  const getMinFactorValue = (fragment) => {
      if (fragment.includes('A')) return 1;
      if (fragment.includes('C')) return 2;
      if (fragment.includes('G')) return 3;
      if (fragment.includes('T')) return 4;
  };

  for (let i = 0; i < P.length; i++) {
      const fragmentOfDna = S.slice(P[i], Q[i] + 1);
      results.push(getMinFactorValue(fragmentOfDna));
  }

  return results;
}
