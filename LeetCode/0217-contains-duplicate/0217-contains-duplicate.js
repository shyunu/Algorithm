/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let items = {};

    for(let i = 0; i < nums.length; i++) {
        items[nums[i]] = (items[nums[i]] || 0) + 1;
    }

    for(let key in items) {
        if(items[key] > 1) {
            return true;
        }
    }

    return false;
};