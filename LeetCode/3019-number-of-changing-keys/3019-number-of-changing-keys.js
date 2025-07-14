/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let cnt = 0;
    let target = s[0].toLowerCase();

    for(let i = 1; i < s.length; i++) {
        if(s[i].toLowerCase() !== target) {
            cnt++;
            target = s[i].toLowerCase();
        }
    }

    return cnt;
};