/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let items = {};
    
    for(let i = 0; i < nums.length; i++) {
        items[nums[i]] = (items[nums[i]] || 0) + 1;

        if(items[nums[i]] > nums.length / 2) {
            return nums[i];
        }
    }
};