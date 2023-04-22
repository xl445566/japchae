// Link: https://app.codility.com/programmers/lessons/7-stacks_and_queues/
// Title: StoneWall
// Type: Stacks and Queues
// Code

function solution(H) {
  const heights = H.slice();
  const stack = [];
  let count = 0;
  
  for (let i = 0; i < heights.length; i++) {
      const h = heights[i];

      while (stack.length && h < stack[stack.length - 1]) {
          stack.pop();
      }

      if (!stack.length || h > stack[stack.length - 1]) {
          stack.push(h);
          count++;
      }
  }
  
  return count;
}
