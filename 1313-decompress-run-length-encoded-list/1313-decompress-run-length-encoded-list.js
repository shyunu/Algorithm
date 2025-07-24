/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = [];

    for(let i = 1; i < nums.length; i += 2) {
        for(let j = 0; j < nums[i - 1]; j++) {
            result.push(nums[i]);
        }
    }

    return result;
};