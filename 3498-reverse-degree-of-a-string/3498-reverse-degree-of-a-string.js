/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let total = 0;

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        const position = i + 1;
        const rev = 26 - (char.charCodeAt(0) - 'a'.charCodeAt(0));
        total += position * rev;
    }

    return total;
};