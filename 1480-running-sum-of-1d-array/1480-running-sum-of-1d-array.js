/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [];
    let sum = nums[0];

    for(let i = 1; i < nums.length; i++) {
        result.push(sum);
        sum += nums[i];
    }
    result.push(sum);

    return result;
};