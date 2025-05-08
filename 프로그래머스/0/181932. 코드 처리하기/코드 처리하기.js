function solution(code) {
    var answer = '';
    let mode = 0;
    
    for(let i = 0; i < code.length; i++) {
        
        if(mode == 0) {
            if(code[i] !== "1") {
                if(i % 2 == 0) answer += code[i];
            } else {
                mode = 1;
            }
        } else {
            if(code[i] !== "1") {
                if(i % 2 == 1) answer += code[i];
            } else {
                mode = 0;
            }
        }
    }
    
    return answer.length ? answer : "EMPTY";
}