/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let result = 0;

    for(let n of nums) {
        if(n % 3 === 1 || n % 3 === 2) {
            result++;
        }
    }

    return result;
};