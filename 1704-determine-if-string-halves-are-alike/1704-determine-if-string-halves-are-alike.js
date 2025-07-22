/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const mid = s.length / 2;

    let countA = 0;
    let countB = 0;

    for(let i = 0; i < mid; i++) {
        if (vowels.has(s[i])) countA++;
        if (vowels.has(s[i + mid])) countB++;
    }

    return countA === countB;
};