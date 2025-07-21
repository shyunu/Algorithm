/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const xMap = points.map(point => point[0]);
    xMap.sort((a, b) => a - b);

    let maxGap = 0;
    for(let i = 1; i < xMap.length; i++) {
        const gap = xMap[i] - xMap[i - 1];
        if(gap > maxGap) {
            maxGap = gap;
        }
    }

    return maxGap;
};