function solution(my_string, num1, num2) {
    var answer = '';
    
    if(num1 < num2) {
        for(let i = 0; i < num1; i++) {
            answer += my_string[i];
        }
        answer += my_string[num2];
        for(let i = num1+1; i < num2; i++) {
            answer += my_string[i];
        }
        answer += my_string[num1];
        for(let i = num2+1; i < my_string.length; i++) {
            answer += my_string[i];
        }
    } else {
        for(let i = 0; i < num2; i++) {
            answer += my_string[i];
        }
        answer += my_string[num1];
        for(let i = num2+1; i < num1; i++) {
            answer += my_string[i];
        }
        answer += my_string[num2];
        for(let i = num1+1; i < my_string.length; i++) {
            answer += my_string[i];
        }
    }
    
        return answer;
    
}