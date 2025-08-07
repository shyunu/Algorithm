/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let cnt1 = 0;
    let cnt2 = 0;

    for(let i of nums1) {
        if(nums2.includes(i)) cnt1++;
    }

    for(let i of nums2) {
        if(nums1.includes(i)) cnt2++;
    }

    return [cnt1, cnt2];
};