function solution(str1, str2) {
    var answer = 0;
    
    for(let i of str2) {
        if(str2.includes(str1)) {
            answer = 1;
            break;
        } else {
            answer = 0;
        }
    }
    
    return answer;
}