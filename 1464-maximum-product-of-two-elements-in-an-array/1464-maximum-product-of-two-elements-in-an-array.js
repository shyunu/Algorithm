/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let val1 = Math.max(...nums) - 1;
    nums[nums.indexOf(val1 + 1)] = 0;
    let val2 = Math.max(...nums) - 1;
    
    return val1 * val2;
};