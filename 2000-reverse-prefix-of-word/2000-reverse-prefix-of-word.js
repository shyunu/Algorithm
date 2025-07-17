/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch);

    if(index == -1) return word;

    const reversed = word.slice(0, index + 1).split('').reverse().join('');
    const rest = word.slice(index + 1);

    return reversed + rest;
};