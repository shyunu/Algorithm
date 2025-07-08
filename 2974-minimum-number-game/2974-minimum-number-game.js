/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let result = [];

    while(nums.length > 0) {
        let aliceMin = Math.min(...nums);
        nums.splice(nums.indexOf(aliceMin), 1);

        let bobMin = Math.min(...nums);
        nums.splice(nums.indexOf(bobMin), 1);

        result.push(bobMin);
        result.push(aliceMin);
    }

    return result;
};