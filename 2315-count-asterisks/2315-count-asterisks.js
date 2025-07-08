/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let flag = false; // bar 닫힌 상태
    let cnt = 0;

    for(let i of s) {
        if(i === '|') {
            flag = !flag;
        } else {
            if(flag === false && i === '*') cnt++;
        }
    }

    return cnt;
};