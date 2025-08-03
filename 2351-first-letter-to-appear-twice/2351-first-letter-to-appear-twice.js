/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let arr = [];

    for(let i = 0; i < s.length; i++) {
        if(arr.includes(s[i])) {
            return s[i];
        }
        arr.push(s[i]);
    }
};