function solution(i, j, k) {
    var answer = 0;
    
    for(let a = i; a <= j; a++) {
        let a_test = a.toString();
        let k_test = k.toString();
        var cnt = 0;
        
        for(let m = 0; m < a_test.length; m++) {
            if(a_test[m].includes(k_test)) {
                answer++;
            }
        }

    }
    
    return answer;
}