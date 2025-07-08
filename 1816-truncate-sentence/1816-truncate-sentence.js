/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let arr = s.split(' ');
    let result = "";

    for(let i = 0; i < k; i++) {
        result += arr[i];
        if(i == k-1) {
            break;
        } else {
            result += ' ';
        }
    }

    return result;
};