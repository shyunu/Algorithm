function solution(s, n) {
    var answer = '';
    
    let a = 'abcdefghijklmnopqrstuvwxyz'; // 26개 - 마지막인덱스번호 25
    let b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for(let i of s) {
        if(a.includes(i)) {
            let index = a.indexOf(i);
            answer += a[(index+n)%26];
        } else if(b.includes(i)) {
            let index = b.indexOf(i);
            answer += b[(index+n)%26];
        } else {
            answer += i;
        }
    }
    
    return answer;
}