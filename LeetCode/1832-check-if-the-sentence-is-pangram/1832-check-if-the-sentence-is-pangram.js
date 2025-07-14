/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let items = new Set();

    for(let char of sentence) {
        items.add(char);
    }

    return items.size === 26;
};