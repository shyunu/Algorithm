/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let insertPos = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[insertPos] = nums[i];
            insertPos++;
        }
    }

    return insertPos;
};