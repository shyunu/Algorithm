function solution(arr) {
    var stk = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (stk.length < 1) {
            stk.push(arr[i]);
        } else {
            if (stk[stk.length - 1] < arr[i]) {
                stk.push(arr[i]);
            } else {
                stk.pop();
                i--;
            }
        }
    }
    
    return stk;
}