function solution(sizes) {
    let maxWidth = 0; // 가로길이
    let maxHeight = 0; // 세로길이
    
    for (let i = 0; i < sizes.length; i++) {
        const [w, h] = sizes[i];
        const bigger = Math.max(w, h);
        const smaller = Math.min(w, h);
        
        if(bigger > maxWidth) maxWidth = bigger;
        if(smaller > maxHeight) maxHeight = smaller;
    }
    
    return maxWidth * maxHeight;
}