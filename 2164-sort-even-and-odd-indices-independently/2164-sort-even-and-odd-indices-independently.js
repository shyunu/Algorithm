/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let odds = [];
    let evens = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 1) {
            odds.push(nums[i]);
        } else {
            evens.push(nums[i]);
        }
    }

    odds.sort((a, b) => b - a);
    evens.sort((a, b) => a - b);

    let evenIdx = 0, oddIdx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            result.push(evens[evenIdx++]);
        } else {
            result.push(odds[oddIdx++]);
        }
    }

    return result;
};