function solution(s) {
    var answer = '';
    let arr = s.split(' ');
    console.log(arr);
    
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(j % 2 == 0) {
                answer += arr[i][j].toUpperCase();
            } else if(j % 2 == 1) {
                answer += arr[i][j].toLowerCase();
            } 
        }
        if(i != arr.length - 1) {
            answer += ' ';
        }
    }
    
    return answer;
}