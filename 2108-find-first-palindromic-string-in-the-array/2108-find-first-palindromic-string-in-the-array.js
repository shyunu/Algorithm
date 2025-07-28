/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i = 0; i < words.length; i++) {
        let target = words[i].split('').reverse().join('');
        if(words[i] === target) {
            return words[i];
            break;
        }
    }
    return "";
};