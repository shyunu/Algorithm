function solution(n, m) {
    var answer = [];
    let min = 0; // 최소공약수
    let max = 0; // 최대공배수
    
    for (let i = 1; i <= Math.min(n,m); i++) {
        if (n % i == 0 && m % i == 0) min = i;
    }
    
    answer.push(min);
    max = n * m / min;
    answer.push(max);
    
    return answer;
}