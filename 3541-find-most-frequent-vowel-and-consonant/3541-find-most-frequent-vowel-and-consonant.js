/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = {};
    let items = {};

    for(let i = 0; i < s.length; i++) {
        if(['a', 'e', 'i', 'o', 'u'].includes(s[i])) {
            vowels[s[i]] = (vowels[s[i]] || 0) + 1;
        } else {
            items[s[i]] = (items[s[i]] || 0) + 1;
        }
    }

    let max1 = Math.max(0, ...Object.values(vowels));
    let max2 = Math.max(0, ...Object.values(items));

    return max1 + max2;
};