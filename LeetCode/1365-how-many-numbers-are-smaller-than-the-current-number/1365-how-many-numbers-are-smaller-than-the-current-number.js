/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = [];
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i !== j) {
                if(nums[j] < nums[i]) {
                    sum++;
                }
            }
        }
        result.push(sum);
        sum = 0;
    }

    return result;
};