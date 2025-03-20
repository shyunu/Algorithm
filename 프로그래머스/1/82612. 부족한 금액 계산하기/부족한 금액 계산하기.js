function solution(price, money, count) {
    var answer = 0;
    var request = 0; // count에 따른 필요한 금액
    
    for(let i = 1; i <= count; i++) {
        request += price * i;
    }
    
    if(request > money) {
        answer = request - money;
    } else if(request <= money) {
        answer = 0;
    }
    

    return answer;
}