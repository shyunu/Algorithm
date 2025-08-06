/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let sep = [];

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i].toString();
        for(let j = 0; j < num.length; j++) {
            sep.push(Number(num[j]));
        }
    }
    
    return sep;
};