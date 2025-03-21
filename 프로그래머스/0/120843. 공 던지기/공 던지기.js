function solution(numbers, k) {
    var answer = 0;
    let idx = 0; 
    
    // 배열길이 : 짝수
    if(numbers.length % 2 == 0) {
        idx = (k-1)*2;
        if(idx >= numbers.length) {
            idx = idx - numbers.length * parseInt(idx / numbers.length);
            answer = numbers[idx];
        } else {
            answer = numbers[idx];
        }
    } else {
        // 배열길이 : 홀수
        idx = (k-1)*2;
        if(idx >= numbers.length) {
            idx = idx - numbers.length * parseInt(idx / numbers.length);
            answer = numbers[idx];
        } else {
            answer = numbers[idx];
        }
    }
    
    return answer;
}