function solution(arr, queries) {
    let test = 0; // 임시 변수
    
    for(let i = 0; i < queries.length; i++) {
        test = arr[queries[i][1]];
        arr[queries[i][1]] = arr[queries[i][0]];
        arr[queries[i][0]] = test;
    }
    
    return arr;
}