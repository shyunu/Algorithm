/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let counts = {};
    let result = [];

    for(let i = 0; i < nums.length; i++) {
        counts[nums[i]] = (counts[nums[i]] || 0) + 1;
        
        if(counts[nums[i]] == 2) result.push(nums[i]);
    }

    return result;
};