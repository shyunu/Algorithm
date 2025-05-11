function solution(quiz) {
    var answer = [];
    
    for (let i = 0; i < quiz.length; i++) {
        let [exp, result] = quiz[i].split(" = "); // 좌우 분리
        let [x, op, y] = exp.split(" "); // 연산파트 분리
        x = Number(x);
        y = Number(y);
        result = Number(result);
        
        let calc = op === "+" ? x + y : x - y;
        
        if(calc === result) {
            answer.push("O");
        } else {
            answer.push("X")
        }
    }
    
    return answer;
}