function solution(myString) {
    var answer = '';
    
    for (let i of myString) {
        answer += i < 'l' ? 'l' : i;
    }
    
    return answer;
}