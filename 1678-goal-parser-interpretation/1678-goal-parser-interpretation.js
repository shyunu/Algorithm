/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let target = '';
    let result = '';

    for(let i of command) {
        target += i;
        if(target === 'G') {
            result += 'G';
            target = '';
        }
        else if(target === '()') {
            result += 'o';
            target = '';
        }
        else if(target === '(al)') {
            result += 'al';
            target = '';
        }
    }

    return result;
};