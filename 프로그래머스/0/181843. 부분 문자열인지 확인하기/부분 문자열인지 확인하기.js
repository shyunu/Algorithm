function solution(my_string, target) {
    var answer = 0;
    
    for(let i of my_string) {
        if(my_string.includes(target)) {
            answer = 1;
            break;
        } else {
            answer = 0;
        }
    }
    
    return answer;
}