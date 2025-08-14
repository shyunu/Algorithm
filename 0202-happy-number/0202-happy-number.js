/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set();

    while (n !== 1) {
        if (seen.has(n)) return false;
        seen.add(n);

        let sum = 0;
        for (let i of n.toString()) {
            sum += (i ** 2);
        }
        n = sum;
    }

    return true;
};