/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    const numSet = new Set(nums);
    let cnt = 0;

    for(let i of nums) {
        if(numSet.has(i + diff) && numSet.has(i + 2 * diff)) {
            cnt++;
        }
    }
    
    return cnt;
};