function solution(name, yearning, photo) {
    let score = 0; // 그리움 점수
    const result = [];
    
    for(let i = 0; i < photo.length; i++) {
        score = 0;
        
        for(let p = 0; p < photo[i].length; p++) {
            if(name.includes(photo[i][p])) {
                const nameIdx = name.indexOf(photo[i][p]);
                score += yearning[nameIdx];
            }
        }
        
        result.push(score);
    }
    
    return result;
}