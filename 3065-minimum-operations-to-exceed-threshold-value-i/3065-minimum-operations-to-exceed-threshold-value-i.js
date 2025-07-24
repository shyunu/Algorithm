/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let count = 0;
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < k) {
            count++;
        } else {
            break;
        }
    }

    return count;
};