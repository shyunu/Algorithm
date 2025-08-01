/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
  let count = {};
  let result = 0;

  for(let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }

  for(let i = 0; i < nums.length; i++) {
    if(count[nums[i]] === 1) {
        result += nums[i];
    }
  }

  return result;  
};