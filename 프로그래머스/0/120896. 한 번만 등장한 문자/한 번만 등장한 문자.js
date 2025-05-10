function solution(s) {
    var answer = '';
    const count = {};
    const arr = [];
    
    for (let i of s) {
        count[i] = (count[i] || 0) + 1;
    }
    
    for (let i of s) {
        if (count[i] === 1) arr.push(i);
    }
    
    arr.sort();
    
    for(let i of arr) {
        answer += i;
    }
    
    
    return answer;
}