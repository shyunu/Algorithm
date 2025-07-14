/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let items = '';
    for(let i = 0; i < words.length; i++) {
        items += words[i][0];
    }

    return items === s;
};