function solution(d, budget) {
    var answer = 0;
    
    // d배열 먼저 정렬하고 앞에서부터 budget에서 차감해서 0되면 끝
    d.sort((a,b) => a-b); //d배열 정렬
    for(let i = 0; i < d.length; i++) {
        budget -= d[i];
        answer++; //부서개수 카운트
        if(budget < 0) {
            answer--;
            break;
        }
    }
    
    return answer;
}