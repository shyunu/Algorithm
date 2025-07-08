/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let freqMap = {};

    for(let num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    nums.sort((a, b) => {
        const freqA = freqMap[a];
        const freqB = freqMap[b];

        if(freqA === freqB) {
            return b - a;
        }

        return freqA - freqB;
    });

    return nums;
};