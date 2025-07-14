/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let sum = 0;
    for(let i = 1; i < s.length; i++) {
        let diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1));
        sum += diff;
    }

    return sum;
};