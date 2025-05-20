function solution(a, b) {
    let max = 0; // 두 수의 최대공약수
    for(let i = 1; i <= Math.min(a,b); i++) {
        if(a % i == 0 && b % i == 0) {
            max = i;
        }
    }
    
    // 기약분수로 변환
    b /= max;
    
    // 분모에서 2,5 모두 제거
    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;
    
    return b === 1 ? 1 : 2;
}