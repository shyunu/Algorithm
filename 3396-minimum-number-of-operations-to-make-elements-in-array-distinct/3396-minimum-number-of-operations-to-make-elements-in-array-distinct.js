/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    for (let k = 0; k * 3 <= nums.length; k++) {
        let seen = new Set();
        let ok = true;
        for (let i = k * 3; i < nums.length; i++) {
            if (seen.has(nums[i])) {
                ok = false;
                break;
            }
            seen.add(nums[i]);
        }
        if (ok) return k;
    }
    
    return Math.ceil(nums.length / 3);
};