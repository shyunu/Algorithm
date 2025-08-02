/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let count = {};
    let result = 0;

    for(let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }

    let max = Math.max(...Object.values(count));
    let arr = [...new Set(nums)];
    for(let i of arr) {
        if(count[i] === max) {
            result += max;
        }
    }

    return result;
};