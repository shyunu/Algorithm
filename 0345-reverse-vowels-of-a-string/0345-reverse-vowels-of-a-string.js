/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowelsIdx = [];
    let vowelsList = [];

    for (let i = 0; i < s.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(s[i].toLowerCase())) {
            vowelsIdx.push(i);
            vowelsList.push(s[i]);
        }
    }

    let sArr = s.split('');

    for (let i = 0; i < vowelsIdx.length; i++) {
        let idx = vowelsIdx[i];
        sArr[idx] = vowelsList[vowelsList.length - i - 1];
    }

    return sArr.join('');
};