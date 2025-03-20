function solution(number) {
    var answer = 0;
    let sum = 0;
    for(let i of number) {
        sum += parseInt(i);
    }
    
    answer = sum % 9;
    return answer;
}