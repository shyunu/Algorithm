function solution(numbers, n) {
    var answer = 0;
    var sum = 0; //원소합계
    
    for(let i of numbers) {
        sum += i;
        if(sum > n) {
            answer = sum;
            break;
        }
    }
    
    return answer;
}