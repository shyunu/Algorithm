var twoSum = function(nums, target) {
    let idxArr = [];

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                idxArr.push(i, j);
                return idxArr;
            }
        }
    }

    
};