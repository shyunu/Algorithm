/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let count = 0;

    for(let i = 0; i < s.length - 2; i++) {
        const a = s[i], b = s[i + 1], c = s[i + 2];

        if(a !== b && a !== c && b !== c) {
            count++;
        }
    }

    return count;
};