function solution(s) {
    var answer = 0;
    let lastNum = 0;
    let target = s.split(" ");
    
    for (let tar of target) {
        if (tar === "Z") answer -= lastNum;
        else {
            let num = Number(tar);
            answer += num;
            lastNum = num;
        }
    }
    
    
    return answer;
}