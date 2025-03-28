function solution(arr, divisor) {
    var answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % divisor == 0) {
            answer.push(arr[i]);
        }
    }
    
    answer.sort((a,b) => a-b);
    
    if(answer[0] == null) {
        answer.push(-1);
    }
    
    return answer;
}