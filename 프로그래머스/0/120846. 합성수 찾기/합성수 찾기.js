function solution(n) {
    var answer = 0;
    let cnt = 0; // 약수 개수

    for(let i = 4; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            if(i % j == 0) {
                cnt++;
            }
        }
        if(cnt >= 3) {
            answer++;
            cnt = 0;
        }
    }
    
    return answer;
}