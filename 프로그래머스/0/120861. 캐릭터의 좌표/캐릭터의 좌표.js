function solution(keyinput, board) {
    const answer = [0, 0]; // 시작 위치
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    for (let i of keyinput) {
        if (i === "up" && answer[1] < maxY) answer[1]++;
        else if (i === "down" && answer[1] > -maxY) answer[1]--;
        else if (i === "left" && answer[0] > -maxX) answer[0]--;
        else if (i === "right" && answer[0] < maxX) answer[0]++;
    }
    
    return answer;
}