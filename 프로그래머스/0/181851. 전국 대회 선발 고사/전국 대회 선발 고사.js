function solution(rank, attendance) {
    const arrIdx = []; // 참석이 가능한 학생의 학생 번호
    const stuList = []; // 참석이 가능한 학생의 랭킹 번호
    
    for (let i = 0; i < attendance.length; i++) {
        if (attendance[i] === true) {
            arrIdx.push(i);
            stuList.push(rank[i]);
        }
    }
    
    const a = rank.indexOf(Math.min(...stuList));
    stuList.splice(stuList.indexOf(Math.min(...stuList)), 1);
    
    const b = rank.indexOf(Math.min(...stuList));
    stuList.splice(stuList.indexOf(Math.min(...stuList)), 1);
    
    const c = rank.indexOf(Math.min(...stuList));

    return 10000*a + 100*b + c;
}