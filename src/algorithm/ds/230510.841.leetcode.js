// Link: https://leetcode.com/problems/keys-and-rooms/description/
// Title: Keys and Rooms
// Type: Graph
// Code

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

 const canVisitAllRooms = function(rooms) {
  const visitHistory = Array(rooms.length).fill(0);
  visitHistory[0] = 1;

  const queue = [];
  queue.push(...rooms[0]);
  
  while (queue.length) {
      const roomNumber = queue.shift();

      if (!visitHistory[roomNumber]) {
          visitHistory[roomNumber] = 1;
          queue.push(...rooms[roomNumber]);
      }
  }

  return visitHistory.filter(v => v === 0).length === 0;
};
