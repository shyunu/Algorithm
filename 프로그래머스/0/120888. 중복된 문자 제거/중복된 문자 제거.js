function solution(my_string) {
    var answer = '';
    
    for(let i of my_string) {
        if(!answer.includes(i)) {
            answer += i;
        } 
    }
    
    return answer;
}