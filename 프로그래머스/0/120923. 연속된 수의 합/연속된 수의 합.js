function solution(num, total) {
    var answer = [];
    // n-1.5 / n-0.5 / n+0.5 / n+1.5 -> 4n
    
    if(total % num == 0) {
        for(let i = 0; i < num; i++) {
            answer.push((total / num) - (num - 1) / 2 + i);
        }
    } else {
        for(let i = 0; i < num; i++) {
            answer.push(Math.round((total / num) - (num / 2) + i));
        }
    }
    
    return answer;
}