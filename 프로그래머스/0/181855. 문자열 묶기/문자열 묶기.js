function solution(strArr) {
    var answer = 0;
    let lengthArr = []; // strArr배열 각 요소의 길이를 담은 배열
    
    for(let i of strArr) {
        lengthArr.push(i.length);
    }
    
    let countData = {};
    for(let cnt of lengthArr) {
        countData[cnt] = (countData[cnt]  || 0) + 1;
    }
    
    answer = Math.max(...Object.values(countData))
    
    return answer;
}