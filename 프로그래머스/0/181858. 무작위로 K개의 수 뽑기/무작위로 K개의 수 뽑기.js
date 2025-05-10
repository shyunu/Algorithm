function solution(arr, k) {
    var answer = Array(k).fill(-1);
    const newArr = [...new Set(arr)];
    
    for (let i = 0; i < k; i++) {
        if(i == newArr.length) break;
        answer[i] = newArr[i];
    }
    
    return answer;
}