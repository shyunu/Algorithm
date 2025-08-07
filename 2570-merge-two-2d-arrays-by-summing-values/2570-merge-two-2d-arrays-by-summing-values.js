/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const map = new Map();

    for (let [id, val] of nums1) {
        map.set(id, val);
    }

    for (let [id, val] of nums2) {
        map.set(id, (map.get(id) || 0) + val);
    }

    const result = [...map.entries()];
    result.sort((a, b) => a[0] - b[0]);

    return result;
};