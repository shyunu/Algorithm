function solution(myString) {
    var answer = '';
    
    for(let i of myString) {
        if(i === 'a') {
            answer += i.toUpperCase();
        } else if(i === i.toUpperCase() && i !== 'A') {
            answer += i.toLowerCase();
        } else {
            answer += i;
        }
    }
    
    return answer;
}