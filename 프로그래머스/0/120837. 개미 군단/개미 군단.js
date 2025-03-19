function solution(hp) {
    var answer = 0;
    
    var first = 0; // 장군개미 (5)
    var second = 0; // 병정개미 (3)
    var third = 0; // 일개미 (1)
    
    first = parseInt(hp / 5);
    hp = parseInt(hp % 5);
    second = parseInt(hp / 3);
    third = parseInt(hp % 3);
    
    answer = first + second + third;
    return answer;
}