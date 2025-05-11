function solution(dots) {
    function getSlope(p1, p2) {
        const [x1, y1] = p1;
        const [x2, y2] = p2;
        if (x1 === x2) return Infinity;
        return (y2 - y1) / (x2 - x1);
    }
    
    if (getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3])) return 1;
    if (getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])) return 1;
    if (getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])) return 1;
    
    return 0;
}