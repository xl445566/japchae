// Link: https://app.codility.com/programmers/lessons/7-stacks_and_queues/
// Title: Fish
// Type: Stacks and Queues
// Code

function solution(A, B) {
  const fishes = A.slice();
  const directions = B.slice();
  let fighters = [];
  let count = 0;

  for (let i = 0; i < fishes.length; i++) {
      const fish = fishes[i];
      const direction = directions[i];

      if (!fighters.length) {
          if (direction === 1) {
              fighters.push(fish);
          }

          if (direction === 0) {
              count++;
          }
      } else {
          if (direction === 0) {
              while (fighters.length) {
                  const fighter = fighters.pop();

                  if (fighter > fish) {
                      fighters.push(fighter);
                      break;
                  }
              }

              if (!fighters.length) {
                  count++;
              }
          }

          if (direction === 1) {
              fighters.push(fish);
          }
      }
  }

  return count + fighters.length;
}
