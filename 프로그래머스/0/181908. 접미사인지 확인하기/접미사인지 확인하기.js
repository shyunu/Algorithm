function solution(my_string, is_suffix) {
    var answer = 0;
    let test = '';
    
    for(let i = my_string.length - is_suffix.length; i < my_string.length; i++) {
        test += my_string[i];
    }
    
    if(test == is_suffix) {
        answer = 1;
    } else {
        answer = 0;
    }
    
    return answer;
}