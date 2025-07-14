/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let cnt = 0;

    for(let i = 0; i < words.length; i++) {
        const rev = words[i].split('').reverse().join('');

        for(let j = i+1; j < words.length; j++) {
            if(rev === words[j]) cnt++;
        }
    }

    return cnt;
};