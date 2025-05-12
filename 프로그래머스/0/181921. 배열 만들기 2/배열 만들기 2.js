function solution(l, r) {
    var answer = [];
    
    for (let i = l; i <= r; i++) {
        const str = i.toString();
        let isValid = true; // 가능한 숫자인지 판별 플래그
        
        for (let s of str) {
            if(s !== "0" && s !== "5") {
                isValid = false;
                break;
            }
        }
        
        if (isValid) answer.push(i);
    }
    
    return answer.length ? answer : [-1];
}