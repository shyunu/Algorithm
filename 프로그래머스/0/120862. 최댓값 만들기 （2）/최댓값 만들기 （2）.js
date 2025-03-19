function solution(numbers) {
    var answer = 0;
    var max = 0;
    var max2 = -100000000
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            if(numbers[i] * numbers[j] > max) {
                max = parseInt(numbers[i] * numbers[j]);
            } else if(numbers[i] * numbers[j] > max2) {
                max2 = parseInt(numbers[i] * numbers[j]);
            }
        }
    }
    
    answer = max || max2;
    
    return answer;
}