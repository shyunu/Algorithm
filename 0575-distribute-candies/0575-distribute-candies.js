/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let candySet = new Set(candyType);

    if (candySet.size >= candyType.length / 2) {
        return candyType.length / 2;
    } else {
        return candySet.size;
    }
};