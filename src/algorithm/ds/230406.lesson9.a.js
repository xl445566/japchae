// Link: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/
// Title: MaxProfit
// Type: Maximum slice problem
// Code

function solution(A) {
  const stockPrices = A.slice();
  let result = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;
  
  for (let i = 0; i < stockPrices.length; i++) {
      const price = stockPrices[i];
      minPrice = Math.min(minPrice, price);

      if (minPrice < price) {
          result = Math.max(price - minPrice, result);
      }
  }

  return result;    
}
