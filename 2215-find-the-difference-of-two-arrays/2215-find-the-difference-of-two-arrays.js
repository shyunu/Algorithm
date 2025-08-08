/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];
    let result = [];
    let n = [];

    for(let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i])) {
            n.push(nums1[i]);
        }
    }
    result.push(n);
    n = [];

    for(let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i])) {
            n.push(nums2[i]);
        }
    }
    result.push(n);

    return result;
};