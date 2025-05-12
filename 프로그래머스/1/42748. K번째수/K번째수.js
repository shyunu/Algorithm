function solution(array, commands) {
    const answer = [];
    
    for(let i = 0; i < commands.length; i++) {
        const arr = array.slice(commands[i][0]-1, commands[i][1]);
        arr.sort((a,b) => a-b);
        answer.push(arr[commands[i][2]-1]);
    }
    
    return answer;
}