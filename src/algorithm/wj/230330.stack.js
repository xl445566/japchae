// https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/

function solution(S) {
  const stack = [];

  for (let i = 0; i < S.length; i++) {
      if (S[i] === "(") {
          stack.push("(");
      } else {
          if (stack.length === 0) {
              return 0;
          }

          stack.pop();
      }
  }

  return stack.length === 0 ? 1 : 0;
}
