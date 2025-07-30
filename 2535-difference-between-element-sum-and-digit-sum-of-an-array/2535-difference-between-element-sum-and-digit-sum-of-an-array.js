/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for(let i of nums) {
        elementSum += i;

        let digits = i.toString().split('');
        for(let d of digits) {
            digitSum += parseInt(d);
        }
    }

    return Math.abs(elementSum - digitSum);
};