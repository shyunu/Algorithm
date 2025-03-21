function solution(s) {
    var answer = '';
    let arr = [];
    let text = '';
    
    for(let i of s) {
        if(i != ' ') {
            text += i;
        } else {
            arr.push(parseInt(text));
            text = '';
        }
    }
    arr.push(parseInt(text));
    
    console.log(arr);
    
    answer += Math.min(...arr);
    answer += ' ';
    answer += Math.max(...arr);



    return answer;
}