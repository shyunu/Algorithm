/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num1 = 0;
    let num2 = 0;
    let arr = [];
    
    for(let i = 1; i <= n; i++) {
        arr.push(i);
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % m == 0) num2 += arr[i];
        else num1 += arr[i];
    }

    return num1 - num2;
};