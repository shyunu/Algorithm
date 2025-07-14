/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let n = names.length;
    let arr = [];
    let result = [];

    for(let i = 0; i < n; i++) {
        arr.push([heights[i], names[i]]);
    };

    arr.sort((a, b) => b[0] - a[0]);

    for(let i = 0; i < n; i++) {
        result.push(arr[i][1]);
    };

    return result;
};