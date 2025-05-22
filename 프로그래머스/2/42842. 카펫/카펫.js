function solution(brown, yellow) {
    const total = brown + yellow;
    
    for(let height = 3; height <= total; height++) {
        const width = total / height;
        
        if(Number.isInteger(width) && width >= height) {
            const yellowArea = (width - 2) * (height - 2);
            if(yellowArea === yellow) {
                return [width, height];
            }
        }
    }
}