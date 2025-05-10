function solution(keyinput, board) {
    const answer = [0, 0]; // 시작 위치

    const xLimit = Math.floor(board[0] / 2);
    const yLimit = Math.floor(board[1] / 2);

    for (let key of keyinput) {
        if (key === "up" && answer[1] < yLimit) answer[1]++;
        else if (key === "down" && answer[1] > -yLimit) answer[1]--;
        else if (key === "left" && answer[0] > -xLimit) answer[0]--;
        else if (key === "right" && answer[0] < xLimit) answer[0]++;
    }

    return answer;
}