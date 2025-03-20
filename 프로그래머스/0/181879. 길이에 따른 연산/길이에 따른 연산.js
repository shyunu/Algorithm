function solution(num_list) {
    var answer = 1;
    
    if(num_list.length >= 11) {
        for(let i of num_list) {
            answer += i;
        }
        return answer - 1;
    } else {
        for(let i of num_list) {
            answer *= i;
        }
        return answer;
    }
}