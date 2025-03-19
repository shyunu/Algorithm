function solution(strlist) {
    var answer = [];
    var count = 0;
    
    for (let i = 0; i < strlist.length; i++) {
        for (let j = 0; j < strlist[i].length; j++) {
            count++;
        }
        answer.push(count);
        count = 0;
    }
    
    return answer;
}