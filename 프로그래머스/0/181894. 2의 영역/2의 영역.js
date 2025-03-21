function solution(arr) {
    var answer = [];

    let idx1 = arr.indexOf(2);
    let idx2 = arr.lastIndexOf(2);
    
    if(idx1 === -1) {
        return [-1];
    }
    
    answer = arr.slice(idx1, idx2+1);
    
    return answer;
}