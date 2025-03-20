function solution(arr, delete_list) {
    let delSet = new Set(delete_list);
    
    return arr.filter(num => !delSet.has(num));
}