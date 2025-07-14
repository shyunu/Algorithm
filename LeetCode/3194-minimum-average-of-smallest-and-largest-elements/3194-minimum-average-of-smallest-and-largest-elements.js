/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let averages = []; // 평균값 배열

    while(nums.length > 0) {
        let min = Math.min(...nums);
        let max = Math.max(...nums);
        averages.push((min + max) / 2);
        nums.splice(nums.indexOf(min), 1);
        nums.splice(nums.indexOf(max), 1);
    }

    return Math.min(...averages);
};