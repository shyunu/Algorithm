/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let numSet = new Set(nums);
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (!numSet.has(i)) {
            result.push(i);
        }
    }

    return result;
};