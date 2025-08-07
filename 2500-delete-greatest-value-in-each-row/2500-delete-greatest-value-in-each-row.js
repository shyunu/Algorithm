/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    for(let i of grid) {
        i.sort((a, b) => a - b);
    }

    let result = 0;
    let columns = grid[0].length;

    for(let col = columns - 1; col >= 0; col--) {
        let max = 0;

        for(let row = 0; row < grid.length; row++) {
            max = Math.max(max, grid[row][col]);
        }

        result += max;
    }


    return result;
};