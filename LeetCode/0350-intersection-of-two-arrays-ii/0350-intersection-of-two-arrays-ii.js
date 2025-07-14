/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let items = {};
    let result = [];

    for(let num of nums1) {
        items[num] = (items[num] || 0) + 1; 
    }

    for(let num of nums2) {
        if(items[num] > 0) {
            result.push(num);
            items[num]--;
        }
    }

    return result;
};