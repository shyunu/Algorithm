/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if(nums.length < 3) return -1;

    const min = Math.min(...nums);
    const max = Math.max(...nums);

    for(let i of nums) {
        if(i !== min && i !== max) {
            return i;
        }
    }

    return -1;
};