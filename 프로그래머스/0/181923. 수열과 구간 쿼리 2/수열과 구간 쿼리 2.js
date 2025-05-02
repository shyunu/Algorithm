function solution(arr, queries) {
    var answer = [];
    
    for(let q of queries) {
        const [s, e, k] = q;
        let min = Infinity; // 최소값
        
        for(let i = s; i <= e; i++) {
            if(arr[i] > k && arr[i] < min) {
                min = arr[i];
            }
        }
        
        answer.push(min == Infinity ? -1 : min);
    }
    
    return answer;
}