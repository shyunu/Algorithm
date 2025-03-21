function solution(myString, pat) {
    var answer = 0;
    let index = 0;

    while ((index = myString.indexOf(pat, index)) !== -1) {
        answer++;
        index++; // 겹치는 부분도 체크하려면 한 칸만 이동
    }
    
    return answer;
}