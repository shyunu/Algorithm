function solution(n) {
    var answer = [];
    n = n.toString();
    
    for(let i of n) {
        answer.push(parseInt(i));
    }
    
    answer.reverse();
    
    return answer;
}