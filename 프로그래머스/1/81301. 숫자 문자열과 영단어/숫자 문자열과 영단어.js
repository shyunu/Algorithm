function solution(s) {
    var answer = '';
    var text = '';
    
    const words = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
    }
    
    for(let i of s) {
        if(parseInt(i) >= 0 && parseInt(i) <= 9) {
            answer += i;
        } else {
            text += i;
            if(words[text] != undefined) {
                answer += words[text];
                text = '';
            }
        }
    }
    
    answer = parseInt(answer);
    
    return answer;
}