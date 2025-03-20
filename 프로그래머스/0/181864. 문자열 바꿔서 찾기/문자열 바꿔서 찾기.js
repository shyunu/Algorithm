function solution(myString, pat) {
    var answer = 0;
    var myString_ex = '';
    
    for(let i of myString) {
        if(i == 'A') {
            myString_ex += 'B';
        } else if(i == 'B') {
            myString_ex += 'A';
        } else {
            myString_ex += i;
        }
    }
    
    if(myString_ex.includes(pat)) {
        answer = 1;
    } else {
        answer = 0;
    }
    
    return answer;
}