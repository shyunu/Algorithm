function solution(a, b) {
    var answer = 0;
    
    // 모두 홀수
    if(a % 2 == 1 && b % 2 == 1) {
        answer += a * a + b * b;
    } 
    // 모두 짝수
    else if(a % 2 == 0 && b % 2 == 0) {
        if(a > b) {
            answer = a - b;
        } else {
            answer = b - a;
        }
    } else {
        answer = 2 * (a + b);
    }
    
    return answer;
}