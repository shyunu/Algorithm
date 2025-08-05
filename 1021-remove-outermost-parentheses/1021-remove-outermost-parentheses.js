/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = "";
    let cnt = 0;

    for(let i of s) {
        if(i === '(') {
            if(cnt > 0) result += i;
            cnt++;
        } else if (i === ')') {
            cnt--;
            if(cnt > 0) result += i;
        }
    }

    return result;
};