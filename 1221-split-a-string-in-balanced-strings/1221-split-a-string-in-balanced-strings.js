/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let cntR = 0;
    let cntL = 0;
    let result = 0;

    for(let i of s) {
        if(i === 'R') {
            cntR++;
        } else if(i === 'L') {
            cntL++;
        }

        if(cntR == cntL) result++;
    }

    return result;
};