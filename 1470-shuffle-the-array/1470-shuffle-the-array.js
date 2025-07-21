/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let tail = nums.slice(nums.length/2);
    let result = [];

    for(let i = 0; i < nums.length/2; i++) {
        result.push(nums[i]);
        result.push(tail[i]);
    }

    return result;
};