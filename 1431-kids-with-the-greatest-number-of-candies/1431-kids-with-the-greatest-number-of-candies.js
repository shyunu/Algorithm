/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let result = new Array(candies.length).fill(true);
    let max = Math.max(...candies);

    for(let i = 0; i < candies.length; i++) {
        if(candies[i] + extraCandies < max) {
            result[i] = false;
        }
    }

    return result;
};