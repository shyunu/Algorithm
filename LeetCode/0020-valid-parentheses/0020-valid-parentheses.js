/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let pair = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for(let char of s) {
        if(char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if(stack.pop() !== pair[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};