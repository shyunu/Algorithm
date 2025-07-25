/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let cnt = {};

    for(let i of s) {
        cnt[i] = (cnt[i] || 0) + 1;
    }

    const freq = new Set(Object.values(cnt));

    return freq.size === 1;
};