/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tIndex = t.indexOf(sChar);
        count += Math.abs(i - tIndex);
    }

    return count;
};