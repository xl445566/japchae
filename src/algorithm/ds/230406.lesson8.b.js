// Link: https://app.codility.com/programmers/lessons/7-stacks_and_queues/
// Title: EquiLeader
// Type: Leader
// Code

function solution(A) {
  const nums = A.slice();
  const map = new Map();

  nums.forEach(n => {
      if (!map.has(n)) {
          map.set(n, 1);
      } else {
          map.set(n, map.get(n) + 1);
      }
  });

  let dominator = null;

  for (const [k , v] of map) {
      if (nums.length / 2 < v) {
          dominator = k;
          break;
      }
  }

  let result = 0;
  let dominatorCount = 0;

  for (let i = 0; i < nums.length; i++) {
      const n = nums[i];

      if (n === dominator) dominatorCount++;
      
      const leftLength = i + 1;
      const rightLength = nums.length - leftLength;

      const totalLeader = map.get(dominator);
      const isLeftLeader = dominatorCount > leftLength / 2;
      const isRightLeader = totalLeader - dominatorCount > rightLength / 2;
      
      if (isLeftLeader && isRightLeader) result++;
  }

  return result;
}
