/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let count1 = {};
    let count2 = {};
    let common = [];
    let result = 0;

    for (let i of words1) {
        count1[i] = (count1[i] || 0) + 1;
    }

    for (let i of words2) {
        count2[i] = (count2[i] || 0) + 1;
    }

    for (let i = 0; i < words1.length; i++) {
        for (let j = 0; j < words2.length; j++) {
            if (words1[i] === words2[j] && !common.includes(words1[i])) {
                common.push(words1[i]);
            }
        }
    }

    for (let i of common) {
        if (count1[i] === 1 && count2[i] === 1) result++;
    }

    return result;
}