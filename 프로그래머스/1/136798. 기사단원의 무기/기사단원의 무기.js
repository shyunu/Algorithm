function solution(number, limit, power) {
    
    // 약수 개수 카운팅 함수
    function getDivisorCount(n) {
        let cnt = 0; // 약수 개수 카운팅
        
        for(let i = 1; i * i <= n; i++) {
            if(n % i === 0) cnt += (i * i === n) ? 1 : 2;
        }
        
        return cnt;
    }

    let result = 0; // 필요한 철의 무게
    
    for(let i = 1; i <= number; i++) {
        const count = getDivisorCount(i);
        result += count > limit ? power : count;
    }

    return result;
}