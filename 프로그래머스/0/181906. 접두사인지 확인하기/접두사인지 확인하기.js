function solution(my_string, is_prefix) {
    var answer = 0;
    var test = '';
    
    for(let i = 0; i < is_prefix.length; i++) {
        test += my_string[i];
    }
    
    if(is_prefix === test) {
        answer = 1;
    } else {
        answer = 0;
    }
    
    return answer;
}