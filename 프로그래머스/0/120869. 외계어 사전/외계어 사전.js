function solution(spell, dic) {
    var answer = 2;
    let cnt = 0;
    
    for (let d of dic) {
        for (let s of spell) {
            if (d.length === spell.length && d.includes(s)) {
                cnt++;
            }
        }
        
        if(cnt === spell.length) {
            answer = 1;
            break;
        } else {
            cnt = 0;
        }
    }
    
    return answer;
}