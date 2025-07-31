/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        let start = Math.max(0, i - nums[i]);
        for(let j = start; j <= i; j++) {
            count += nums[j];
        }
    }

    return count;
};