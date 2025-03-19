function solution(my_string) {
    var answer = [];
    
    for(let i = 0; i < my_string.length; i++) {
        if(my_string[i] >= 0 && my_string[i] <= 9) {
            answer.push(parseInt(my_string[i]));
        }
    }
    
    answer.sort();
    
    return answer;
}