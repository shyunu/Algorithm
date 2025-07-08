/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let oneCnt = 0;
    let zeroCnt = 0;

    for(let i of s) {
        if(i === '1') oneCnt++;
        else zeroCnt++;
    }

    return '1'.repeat(oneCnt - 1) + '0'.repeat(zeroCnt) + '1';
};