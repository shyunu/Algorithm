function solution(n) {
    var answer = 0;
    var arr = []; // 빈배열
    
    n = n.toString(); // 문자열로 변환
    
    for(let i = 0; i < n.length; i++) {
        arr.push(parseInt(n[i]));
    }
    
    arr.sort();
    
    for(let i = arr.length-1; i >= 0; i--) {
        answer += arr[i].toString();
    }
    
    answer = parseInt(answer);

    return answer;
}