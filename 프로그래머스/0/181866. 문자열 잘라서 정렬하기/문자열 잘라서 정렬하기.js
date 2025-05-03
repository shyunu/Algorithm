function solution(myString) {
    var answer = [];
    let text = "";
    
    for(let i of myString) {
        if(i !== 'x') {
            text += i;
        } else {
            if(text !== "") answer.push(text);
            text = "";
        }
    }
    
    if(text !== "") answer.push(text);
    
    answer.sort();
    
    return answer;
}