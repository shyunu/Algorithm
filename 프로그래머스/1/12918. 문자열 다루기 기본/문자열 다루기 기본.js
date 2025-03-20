function solution(s) {
    // 길이가 4 또는 6인지 확인
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    // 모든 문자가 숫자인지 확인
    return /^\d+$/.test(s);
}