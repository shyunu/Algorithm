function solution(n) {
    var answer = 0;
    
    while(true) {
        answer += parseInt(n % 10);
        n = parseInt(n / 10);
        
        if(n == 0) {
            break;
        }
    }
    
    return answer;
}