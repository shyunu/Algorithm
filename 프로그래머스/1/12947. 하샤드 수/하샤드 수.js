function solution(x) {
    var answer = true;
    var sum = 0;
    x = x.toString();
    
    for(let i of x) {
        sum += parseInt(i);
    }
    
    if(x % sum == 0) {
        answer = true;
    } else {
        answer = false;
    }
    
    return answer;
}