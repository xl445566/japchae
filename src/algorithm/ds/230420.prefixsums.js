// Link: https://leetcode.com/problems/corporate-flight-bookings/description/
// Title: Euc1109. Corporate Flight Bookings
// Type: PrefixSums
// Code

const corpFlightBookings = function(bookings, n) {
  const results = Array(n).fill(0);

  bookings.forEach(([first, last, seats]) => {
    results[first - 1] += seats;
    
    if (last >= n) { 
      return;
    }

    results[last] -= seats;
  });

  for (let index = 0; index < n; index++) {
    results[index] += results[index - 1] ?? 0;
  }

  return results;
};
