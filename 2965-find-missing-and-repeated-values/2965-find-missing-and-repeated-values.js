/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length;
    let arr= grid.flat();
    let map = {};
    let result = [];

    for (let i of arr) {
        map[i] = (map[i] || 0) + 1;
    }

    for (let i = 1; i <= n * n; i++) {
        if (map[i] === 2) {
            result[0] = i;
        } else if (map[i] === undefined) {
            result[1] = i;
        }
    }

    return result;
};