/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let result = [];
    let cnt = 0;

    for(let i = 0; i < n; i++) {
        let arr = [];
        for(let j = 0; j < n; j++) {
            arr.push(cnt++);
        }
        result.push(arr);
    }

    let first = 0;
    let second = 0;
    for(let sign of commands) {
        if(sign === 'DOWN') first++;
        else if(sign === 'UP') first--;
        else if(sign === 'RIGHT') second++;
        else second--;
    }

    return result[first][second];
};