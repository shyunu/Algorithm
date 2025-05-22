function solution(n) {
    const mod = 1234567;
    let prev = 0, curr = 1;
    
    for(let i = 2; i <= n; i++) {
        let next = (prev + curr) % mod;
        prev = curr;
        curr = next;
    }
    
    return curr;
}