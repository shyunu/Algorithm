/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if(n % 2 == 1) {
        return n * 2;
    } else {
        return 2 * (n / 2);
    }
};