/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let result = new Array(nums.length).fill(0);

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % 2 == 1) {
            result[i] = 1;
        }
    }

    return result.sort((a, b) => a - b);
};