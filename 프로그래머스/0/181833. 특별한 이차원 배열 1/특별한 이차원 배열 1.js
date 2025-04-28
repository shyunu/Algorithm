function solution(n) {
    let arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[0].length; j++) {
            if(i == j) {
                arr[i][j] = 1;
            } else {
                arr[i][j] = 0;
            }
        }
    }
    
    return arr;
}