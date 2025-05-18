function solution(n) {
    let cnt = 0;
    let num = 0;
    
    while (cnt < n) {
        num++;
        
        if (num % 3 !== 0 && !num.toString().includes('3')) {
            cnt++;
        }
    }
    
    return num;
}