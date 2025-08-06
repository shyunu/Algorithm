/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a, b) => b - a);

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(num > 0 && nums.includes(-num)) {
            return num;
        }
    }

    return -1;
};