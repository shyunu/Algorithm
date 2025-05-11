function solution(my_string, queries) {
    var answer = '';
    
    for (let i = 0; i < queries.length; i++) {
        answer += my_string.slice(0, queries[i][0]);
        for (let q = queries[i][1]; q >= queries[i][0]; q--) answer += my_string[q];
        answer += my_string.slice(queries[i][1] + 1);
        my_string = answer;
        answer = "";
    }
    
    return my_string;
}