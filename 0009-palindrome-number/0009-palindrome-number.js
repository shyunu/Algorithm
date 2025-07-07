/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;

    let str = x.toString();
    let reverse = str.split('').reverse().join('');
    
    return str === reverse;
};