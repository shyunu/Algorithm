function solution(numbers) {
    var answer = 0;
    let text = "";
    
    for(let i of numbers) {
        text += i;
        
        switch(text) {
            case "zero":
                answer += "0"; text = ""; break;
            case "one":
                answer += "1"; text = ""; break;
            case "two":
                answer += "2"; text = ""; break;
            case "three":
                answer += "3"; text = ""; break;
            case "four":
                answer += "4"; text = ""; break;
            case "five":
                answer += "5"; text = ""; break;
            case "six":
                answer += "6"; text = ""; break;
            case "seven":
                answer += "7"; text = ""; break;
            case "eight":
                answer += "8"; text = ""; break;
            case "nine":
                answer += "9"; text = ""; break;
            default:
                answer += "";
        }
    }
    
    return Number(answer);
}