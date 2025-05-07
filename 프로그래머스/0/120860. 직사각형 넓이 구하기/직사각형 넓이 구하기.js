function solution(dots) {
    var answer = 1;
    
    for(let i = 1; i < dots.length; i++) {
        if(dots[i][0] == dots[0][0]) {
            answer *= dots[i][1] - dots[0][1];
        } else if(dots[i][1] == dots[0][1]) {
            answer *= dots[i][0] - dots[0][0];
        }
    }
    
    return answer >= 0 ? answer : -answer;
}