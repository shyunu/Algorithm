/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(' ');
    let result = new Array(arr.length);

    for(let item of arr) {
        let idx = parseInt(item[item.length - 1]) - 1;
        result[idx] = item.slice(0, -1);
    }

    return result.join(' ');
};