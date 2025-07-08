/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let max = Math.max(word1.length, word2.length);
    let min = Math.min(word1.length, word2.length);
    let str = "";

    for(let i = 0; i < max; i++) {
        if(i < min) {
            str += word1[i];
            str += word2[i];
        } else {
            if(max === word1.length) {
                str += word1[i];
            } else {
                str += word2[i];
            }
        }
    }

    return str;
};