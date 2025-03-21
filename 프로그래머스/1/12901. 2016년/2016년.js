function solution(a, b) {
    var answer = '';
    const weeks = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    // 일 개수
    const totalDays = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let days = (b-1); //일수계산
    for(let i = 1; i < a; i++) {
        days += totalDays[i];
    }

    let test = (days + 5) % 7;
    
    answer = weeks[test];
    
    return answer;
}