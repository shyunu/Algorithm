function solution(picture, k) {
    var answer = [];
    let text = "";
    
    for(let p of picture) {
        for(let n of p) {
            for(let i = 1; i <= k; i++) {
                text += n;
            }
        }
        
        for(let i = 1; i <= k; i++) {
                answer.push(text);
        }
        
        text = "";
        
    }
    
    return answer;
}