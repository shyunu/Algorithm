function solution(num_list) {
    var answer = [];
    var num1 = 0;
    var num2 = 0;
    for(let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 == 0) {
            num1++;
        } else {
            num2++;
        }
    }
    answer.push(num1);
    answer.push(num2);
    return answer;
}