function solution(date1, date2) {
    var answer = 0;
    const [y1, m1, d1] = date1;
    const [y2, m2, d2] = date2;
    
    if(y1 > y2) {
        answer = 0;
    } else if(y1 < y2) {
        answer = 1;
    } else if(y1 == y2) {
        if(m1 > m2) {
            answer = 0;
        } else if(m1 < m2)  {
            answer = 1;
        } else if(m1 == m2) {
            if(d1 < d2) {
                answer = 1;
            } else if(d1 >= d2) {
                answer = 0;
            } 
        
        }
    }
    
    return answer;
}