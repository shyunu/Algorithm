/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0; i < num.length; i++) {
        let digit = parseInt(num[i]);
        if(i % 2 == 1) {
            oddSum += digit;
        } else {
            evenSum += digit;
        }
    }

    return oddSum === evenSum;
};