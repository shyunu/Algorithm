function solution(A, B) {
    let cnt = 0; // 미는 횟수
    
    for (let i = 0; i < A.length; i++) {
        if(A === B) return cnt;
        A = A[A.length - 1] + A.slice(0, A.length - 1);
        cnt++;
    }
    
    return -1;
}