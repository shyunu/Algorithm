function solution(my_string) {
    var answer = 0;
    let num = ""; // 조회된 숫자
    
    for(let i of my_string) {
        if(!isNaN(i) && i !== " ") {
            num += i;
        } else {
            if(num !== "") {
                answer += Number(num);
                num = "";
            }
        }
    }
    
    if(num !== "") answer += Number(num);
    
    return answer > 0 ? answer : 0;
}