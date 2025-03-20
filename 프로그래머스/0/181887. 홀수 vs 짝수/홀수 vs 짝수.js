function solution(num_list) {
    var answer = 0;
    let sum1 = 0;
    let sum2 = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        if(i % 2 == 1) {
            sum1 += num_list[i];
        } else {
            sum2 += num_list[i];
        }
    }
    
    if(sum1 > sum2) {
        answer = sum1;
    } else if (sum1 < sum2) {
        answer = sum2;
    } else {
        answer = sum1;
    }
    
    return answer;
}