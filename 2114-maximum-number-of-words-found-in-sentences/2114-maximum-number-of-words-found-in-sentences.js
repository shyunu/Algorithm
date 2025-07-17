/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let cnt = [];

    for(let i = 0; i < sentences.length; i++) {
        cnt.push(sentences[i].split(' ').length);
    }

    return Math.max(...cnt);
};