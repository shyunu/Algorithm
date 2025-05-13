function solution(s) {
    const answer = [];
    const lastIndex = {}; // 마지막 등장 위치
    
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (lastIndex[char] === undefined) {
            answer.push(-1);
        } else {
            answer.push(i - lastIndex[char]);
        }
        
        lastIndex[char] = i;
    }
    return answer;
}