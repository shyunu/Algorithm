function solution(myString, pat) {
    var answer = '';
    let idx = 0; // myString에서 pat이 위치한 바로 앞의 인덱스번호
    
    if(myString.includes(pat)) {
        for(let i = 0; i < myString.length; i++) {
            if(myString[i] === pat[pat.length-1]) {
                idx = i;
            }
        }
    }
    
    for(let i = 0; i <= idx; i++) {
        answer += myString[i];
    }
    return answer;
}