/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let mul = 1;
    let sum = 0;
    const digits = n.toString();

    for(let i = 0; i < digits.length; i++) {
        const digit = Number(digits[i]);
        mul *= digit;
        sum += digit;
    }

    return mul - sum;
};