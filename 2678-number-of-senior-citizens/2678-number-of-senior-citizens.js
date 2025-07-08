/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let cnt = 0;

    for(let i = 0; i < details.length; i++) {
        let age = parseInt(details[i].slice(11, 13));
        if(age > 60) cnt++;
    }

    return cnt > 0 ? cnt : 0;
};