function solution(arr) {
    let rows = arr.length;
    let cols = arr[0].length;

    if(rows == cols) return arr;
    
    else if(rows > cols) {
        let diff = rows - cols;
        for(let i = 0; i < rows; i++) {
            for(let j = 0; j < diff; j++) {
                arr[i].push(0);
            }
        }
    }
    
    else {
        let diff = cols - rows;
        for(let i = 0; i < diff; i++) {
            arr.push(new Array(cols).fill(0));
        }
    }
    
    return arr;
}