/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let nums = [];
    let tar = 1;

    while (nums.length < k) {
        if (!arr.includes(tar)) {
            nums.push(tar);
        }
        tar++;
    }

    return nums[k - 1];
};