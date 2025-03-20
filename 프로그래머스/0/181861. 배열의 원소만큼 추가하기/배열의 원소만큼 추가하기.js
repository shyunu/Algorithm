function solution(arr) {
    var answer = [];
    
    for(let i of arr) {
        for(let j = 1; j <= i; j++) {
            answer.push(i);
        }
    }
    
    return answer;
}