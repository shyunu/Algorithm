function solution(num_list) {
    var answer = [];
    num_list.sort((a,b) => a-b); //정수오름차순
    for(let i = 0; i < 5; i++) {
        answer.push(num_list[i]);
    }
    return answer;
}