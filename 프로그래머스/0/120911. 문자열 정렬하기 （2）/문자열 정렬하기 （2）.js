function solution(my_string) {
    var answer = '';
    var sample = [];
    
    for(let i = 0; i < my_string.length; i++) {
        sample.push(my_string[i].toLowerCase());
    }
    
    sample.sort();
    
    for(let i = 0; i < sample.length; i++) {
        answer += sample[i];
    }
    
    return answer;
}