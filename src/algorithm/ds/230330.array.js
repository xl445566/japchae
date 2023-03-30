// Link: https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/description/
// Title: 2593. Find Score of an Array After Marking All Elements
// Type: array
// Code

/**
 * @param {number[]} nums
 * @return {number}
 */

 const findScore = function(nums) {
  const markList = Array(nums.length).fill(false);
  const numberAndIndexList = nums.map((num, i) => [num, i]).sort((a,b) => a[0] - b[0]);
  let score = 0;

  for (let [num, i] of numberAndIndexList) {
      if (markList[i]) {
          continue;
      }
      
      markList[i] = true;

      if (i > 0) {
          markList[i - 1] = true;
      }

      if (i + 1 < numberAndIndexList.length) {
          markList[i + 1] = true;
      }

      score += num;
  }
      
  return score;
};