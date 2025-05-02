function solution(arr) {
    var answer = 0;
    
    while(true) {
        const arrCopy = [...arr];

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] >= 50 && arr[i] % 2 == 0) {
                arr[i] /= 2;
            } else if(arr[i] < 50 && arr[i] % 2 == 1) {
                arr[i] = arr[i] * 2 + 1;
            }
        }

        if(arrCopy.toString() === arr.toString()) {
            break;
        }
        
        answer++;
        
    }
    
    return answer;
}