function solution(num_list) {
    var answer = 0;
    let even = ""; // 짝수 붙힌 글자
    let odd = ""; // 홀수 붙힌 글자
    
    for(let i of num_list) {
        if(i % 2 == 0) {
            even += i.toString();
        } else {
            odd += i.toString();
        }
    }
    
    answer = Number(even) + Number(odd);
    
    return answer;
}