function solution(arr) {
    var answer = [];
    let min = Math.min(...arr);
    console.log(min);
    
    for(let i = 0; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i];
        } 
    }
    
    for(let i of arr) {
        if(i != min) {
            answer.push(i);
        }
    }
    
    if(arr.length == 1) {
        answer.push(-1);
    }
    
    return answer;
}