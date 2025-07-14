/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let arr = s.split('');
    let left = 0;
    let right = s.length - 1;

    while(left < right) {
        if(arr[left] !== arr[right]) {
            let minChar = arr[left] < arr[right] ? arr[left] : arr[right];
            arr[left] = minChar;
            arr[right] = minChar;
        }
        left++;
        right--;
    }

    return arr.join('');
};