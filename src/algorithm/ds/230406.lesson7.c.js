// Link: https://app.codility.com/programmers/lessons/7-stacks_and_queues/
// Title: Nesting
// Type: Stacks and Queues
// Code

function solution(S) {
  const stack = [];

  for (const bracket of S) {
      if (bracket === '(' || bracket === '{' || bracket === '[') {
          stack.push(bracket);
      } else {
          if (!stack.length) {
              return 0;
          }

          const lastOpenBracket = stack.pop();

          if (bracket === ')' && lastOpenBracket !== '(') return 0;
          if (bracket === '}' && lastOpenBracket !== '{') return 0;
          if (bracket === ']' && lastOpenBracket !== '[') return 0;
      }
  }

  return stack.length > 0 ? 0 : 1;
}
