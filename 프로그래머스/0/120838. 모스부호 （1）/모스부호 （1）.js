function solution(letter) {
    var answer = '';
    let text = '';
    
    const morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    
    for(let i of letter) {
        if(i !== ' ') {
            text += i;
        } else {
            answer += morse[text];
            text = '';
        }
    }
    
    answer += morse[text];
    
    
    return answer;
}