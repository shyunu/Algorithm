/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let strS = s.split("").sort().join("");
    let strT = t.split("").sort().join("");

    if(strS === strT) {
        return true;
    } else {
        return false;
    }
};