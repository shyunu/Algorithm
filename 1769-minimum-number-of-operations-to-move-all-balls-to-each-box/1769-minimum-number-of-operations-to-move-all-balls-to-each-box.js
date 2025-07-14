/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    const n = boxes.length;
    const answer = new Array(n).fill(0);

    let moves = 0;
    let count = 0;

    for(let i = 0; i < n; i++) {
        answer[i] += moves;
        if(boxes[i] === '1') count++;
        moves += count;
    }

    moves = 0;
    count = 0;

    for(let i = n - 1; i >= 0; i--) {
        answer[i] += moves;
        if(boxes[i] === '1') count++;
        moves += count;
    }

    return answer;
};