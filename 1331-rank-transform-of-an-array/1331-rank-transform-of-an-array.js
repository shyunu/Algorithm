/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    const sorted = [...new Set(arr)].sort((a, b) => a - b);
    const rankObj = {};

    for(let i = 0; i < sorted.length; i++) {
        if(rankObj[sorted[i]] === undefined) {
            rankObj[sorted[i]] = i + 1;
        }
    }

    return arr.map(num => rankObj[num]);
};