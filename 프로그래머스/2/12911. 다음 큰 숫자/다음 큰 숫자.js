function solution(n) {
    const nCnt = n.toString(2).split("1").length - 1; // n의 2진수의 1의 개수
    
    while (true) {
        n++;
        const newCnt = n.toString(2).split("1").length - 1;
        if(nCnt === newCnt) return n;
    }
}