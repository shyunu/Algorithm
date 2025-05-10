function solution(my_string) {
    var answer = 0;
    const contents = my_string.split(" ");
    console.log(contents);
    let flag = true; // 참이면 +, 거짓이면 -
    
    for (let i of contents) {
        if (i === "+") {
            flag = true;
            
        } else if (i === "-") {
            flag = false;
            
        } else {
            if(flag) answer += Number(i);
            if(!flag) answer -= Number(i);
        }
    }
    
    
    return answer;
}