function solution(names) {
    var answer = [];

    for(let i of names) {
        if(names.indexOf(i) % 5 == 0) {
            answer.push(i);
        }
    }
    
    return answer;
}