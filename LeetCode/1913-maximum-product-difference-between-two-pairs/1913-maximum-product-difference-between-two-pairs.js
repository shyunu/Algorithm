/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let max = Math.max(...nums);
    nums.splice(nums.indexOf(max), 1);
    max *= Math.max(...nums);

    let min = Math.min(...nums);
    nums.splice(nums.indexOf(min), 1);
    min *= Math.min(...nums);

    return max - min;
};