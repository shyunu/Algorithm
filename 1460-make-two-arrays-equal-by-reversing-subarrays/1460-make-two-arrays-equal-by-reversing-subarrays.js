/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let count = new Array(1001).fill(0);

    for (let num of target) count[num]++;
    for (let num of arr) count[num]--;

    for (let c of count) {
        if (c !== 0) return false;
    }
    return true;
};