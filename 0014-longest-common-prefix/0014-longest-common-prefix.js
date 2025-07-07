var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    strs.sort();

    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;

    while(i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.slice(0, i);    
};