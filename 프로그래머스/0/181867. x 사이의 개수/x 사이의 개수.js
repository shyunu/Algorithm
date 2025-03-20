function solution(myString) {
    var answer = [];
    let count = 0;
    
    for(let i of myString) {
        if(i != 'x') {
            count++;
        } else {
            answer.push(count);
            count = 0;
        }
    }
    
    answer.push(count);

    return answer;
}