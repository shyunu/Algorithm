function solution(t, p) {
    var answer = 0;
    var test = '';
    
    for(let i = 0; i < t.length; i++) {
        for(let j = i; j < i + p.length; j++) {
            if(i+ p.length > t.length) {
                break;
            }
            test += t[j];
        }
        if(parseInt(test) <= parseInt(p)) {
            answer++;
        }
        test = '';
    }
    
    return answer;
}