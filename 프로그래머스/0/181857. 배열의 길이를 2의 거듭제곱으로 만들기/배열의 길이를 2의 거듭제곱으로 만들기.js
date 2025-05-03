function solution(arr) {
    let pow = 1;
    
    while (pow < arr.length) {
        pow *= 2;
    }
    
    while (arr.length < pow) {
        arr.push(0);
    }
    
    return arr;
}