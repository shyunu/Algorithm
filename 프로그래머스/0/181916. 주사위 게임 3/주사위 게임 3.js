function solution(a, b, c, d) {
    const numList = [a, b, c, d]; // 나온 숫자를 담은 배열
    let counts = {}; // 숫자별 개수 카운팅
    
    for (let n of numList) {
        counts[n] = (counts[n] || 0) + 1;
    }
    
    let keys = Object.keys(counts).map(Number);
    
    // 숫자가 모두 같을 때
    if (keys.length === 1) {
        return answer = 1111 * a;
    }
    
    if (keys.length === 2) {
        let [p, q] = keys;
        let pCnt = counts[p];
        let qCnt = counts[q];
        
        // 3개,1개 조합
        if(pCnt === 3 || qCnt === 3) {
            let three = pCnt === 3 ? p : q;
            let one = pCnt === 1 ? p : q;
            return Math.pow((10 * three + one), 2);
        } 
        
        // 2개,2개 조합
        else {
            return (p + q) * Math.abs(p - q);
        }
        
    }
    
    // 2개,1개,1개 조합
    if (keys.length === 3) {
        let pair = keys.find(key => counts[key] === 2);
        let others = keys.filter(key => counts[key] === 1);
        return others[0] * others[1];
    }
    
    // 숫자가 모두 다를 때
    if (keys.length === 4) {
        return Math.min(...keys);
    }
}