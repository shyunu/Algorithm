function solution(n)
{
    var answer = 0;
    n = n.toString();
    for(let i of n) {
        answer += parseInt(i);
    }

    return answer;
}