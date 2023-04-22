// Link: https://app.codility.com/programmers/lessons/7-stacks_and_queues/
// Title: Dominator
// Type: Leader
// Code

function solution(A) {
  const map = new Map();
  const nums = A.slice();
  let dominator = nums[0];

  nums.forEach(n => {
      if (!map.has(n)) {
          map.set(n, 1);
      } else {
          map.set(n, map.get(n) + 1);
      }

      const a = map.get(n);
      const b = map.get(dominator);

      if (a > b) {
          dominator = n;
      }
  });

  return nums.length / 2 < map.get(dominator) ? nums.indexOf(dominator) : -1;
}
