/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let doubled = s + s;

    return doubled.slice(1, -1).includes(s);
};