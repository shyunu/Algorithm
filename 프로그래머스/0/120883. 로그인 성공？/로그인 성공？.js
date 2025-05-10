function solution(id_pw, db) {
    var answer = '';
    
    for (let i = 0; i < db.length; i++) {
        // 아이디가 일치할 경우
        if (id_pw[0] === db[i][0]) {
            // 비밀번호가 일치할 경우
            if (id_pw[1] === db[i][1]) {
                return "login";
            }
            // 비밀번호가 오류일 경우
            else return "wrong pw";
        } 
    }
    
    // 아이디가 오류일 경우
    return "fail";
}