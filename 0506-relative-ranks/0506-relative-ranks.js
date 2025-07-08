/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let n = score.length;
    let result = new Array(n);

    let indexed = score.map((val, idx) => [val, idx]);
    indexed.sort((a, b) => b[0] - a[0]);

    for(let i = 0; i < n; i++) {
        const index = indexed[i][1];
        if (i === 0) result[index] = "Gold Medal";
        else if (i === 1) result[index] = "Silver Medal";
        else if (i === 2) result[index] = "Bronze Medal";
        else result[index] = (i + 1).toString();
    }

    return result;
};