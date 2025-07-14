/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let allowedSet = new Set(allowed);
    let cnt = 0;

    for(let word of words) {
        let isConsistent = true;
        for(let w of word) {
            if(!allowedSet.has(w)) {
                isConsistent = false;
                break;
            }
        }
        if(isConsistent) cnt++;
    }
    return cnt;
};