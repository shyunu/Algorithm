function solution(array, n) {
    let sub = [];
    
    for(let i = 0; i < array.length; i++) {
        sub.push(Math.abs(array[i] - n));
    }
    
    let minDiff = Math.min(...sub);
    
    let minValues = array.filter((val, idx) => sub[idx] === minDiff);
    
    return Math.min(...minValues);
}