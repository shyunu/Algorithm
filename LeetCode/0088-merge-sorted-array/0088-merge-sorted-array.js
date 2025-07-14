var merge = function(nums1, m, nums2, n) {
    let merged = nums1.slice(0, m).concat(nums2.slice(0, n));
    
    merged.sort((a, b) => a - b);
    
    for(let i = 0; i < m + n; i++) {
        nums1[i] = merged[i];
    }
};