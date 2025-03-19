function solution(n) {
    var answer = 0;
    if(n >= 7) {
        if(n % 7 == 0) {
            answer = parseInt(n / 7);
        } else {
            answer = parseInt(n / 7) + 1;
        }
        
    } else {
        answer = 1;
    }
    
    return answer;
}