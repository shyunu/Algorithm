function solution(arr1, arr2) {
    var answer = 0;
    var sum1 = 0; // arr1요소합
    var sum2 = 0; // arr2요소합
    
    for(let i of arr1) {
        sum1 += i;
    }
    
    for(let i of arr2) {
        sum2 += i;
    }
    
    if(arr1.length != arr2.length) {
        if(arr1.length > arr2.length) {
            answer = 1;
        } else {
            answer = -1;
        }
    } else {
        if(sum1 > sum2) {
            answer = 1;
        } else if(sum1 < sum2) {
            answer = -1;
        } else {
            answer = 0;
        }
    }
    
    return answer;
}