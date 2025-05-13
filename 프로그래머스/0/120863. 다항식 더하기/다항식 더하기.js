function solution(polynomial) {
    let num = 0; // 상수항
    let numX = 0; // x항 계수
    let isAdd = true;
    const polyArr = polynomial.split(" ");
    
    for (let p = 0; p < polyArr.length; p++) {
        const token = polyArr[p];
        
        if (token === "+") {
            isAdd = true;
        } else if (token === "-") {
            isAdd = false;
        } else {
            if (token.includes("x")) {
                const coef = token === "x" ? 1 : parseInt(token.slice(0, -1));
                if (isAdd) numX += coef;
                else numX -= coef;
            } else {
                const value = parseInt(token);
                if (isAdd) num += value;
                else num -= value;
            }
        }
    }

    // 결과 조립
    if (numX !== 0 && num !== 0) {
        return (numX === 1 ? "x" : numX + "x") + " + " + num;
    } else if (numX !== 0) {
        return numX === 1 ? "x" : numX + "x";
    } else {
        return num.toString();
    }
}