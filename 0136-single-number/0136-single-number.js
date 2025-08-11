/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};

    for(let i of nums) {
        map[i] = (map[i] || 0) + 1;
    }

    for(let i of nums) {
        if(map[i] === 1) {
            return i;
        }
    }
};