function solution(num) {
    var answer = 0;
    let cnt = 0;
    
    while(num != 1) {
        if(cnt == 500) {
            answer = -1;
            break;
        }
        
        if(num % 2 == 0) {
            num /= 2;
            cnt++;
        } else {
            num = num * 3 + 1;
            cnt++;
        }        
    }
    
    if(cnt != 500) {
        answer = cnt;
    }
    
    return answer;
}