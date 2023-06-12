// Link: https://leetcode.com/problems/flatten-deeply-nested-array/description/
// Title: 2625. Flatten Deeply Nested Array
// Type: dfs
// Code

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
const flat = function (arr, n) {
    const results = [];

    const fn = (list, depth) => {
        for (let i = 0; i < list.length; i++) {
            const item = list[i];
            const isArray = Array.isArray(item);

            if (isArray && n > depth) {
                fn(item, depth + 1);
            } else {
                results.push(item);
            }
        }
    };

    fn(arr, 0);
    
    return results;
};
