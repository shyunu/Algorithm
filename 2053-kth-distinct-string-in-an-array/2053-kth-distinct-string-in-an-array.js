/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let items = {};
    let cnt = 0;

    for(let i of arr) {
        items[i] = (items[i] || 0) + 1;
    }

    for(let c of arr) {
        if(items[c] === 1) {
            cnt++;
            if(cnt == k) {
                return c;
            }
        }
    }

    return "";
};