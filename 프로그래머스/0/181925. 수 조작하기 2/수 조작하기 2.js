function solution(numLog) {
    var answer = '';
    
    for(let i = 1; i < numLog.length; i++) {
        let test = numLog[i] - numLog[i-1];
        if(test == 1) {
            answer += 'w';
        } else if(test == -1) {
            answer += 's';
        } else if(test == 10) {
            answer += 'd';
        } else if(test == -10) {
            answer += 'a';
        }
            
    }
    
    return answer;
}