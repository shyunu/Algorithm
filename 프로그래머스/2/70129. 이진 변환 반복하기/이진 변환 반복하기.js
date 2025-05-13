function solution(s) {
    let cnt = 0; // 실행횟수
    let zeroCnt = 0; // 제거한 0의 개수
    
    while (s !== "1") {
        let onlyOne = s.replaceAll("0", "");
        zeroCnt += s.length - onlyOne.length;
        s = onlyOne.length.toString(2);
        cnt++;
    }
    
    return [cnt, zeroCnt];
}