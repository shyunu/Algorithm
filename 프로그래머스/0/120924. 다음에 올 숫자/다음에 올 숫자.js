function solution(common) {
    for (let i = 1; i < common.length - 1; i++) { 
        // 등차수열
        if (common[i] - common[i-1] == common[i+1] - common[i]) {
            return common[common.length - 1] + (common[i] - common[i-1]);
        } 
        // 등비수열
        else {
            return common[common.length - 1] * (common[i] / common[i-1]);
        }
    }
}