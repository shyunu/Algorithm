function solution(my_string) {
    const result = Array(52).fill(0);
    
    for (let i of my_string) {
        const code = i.charCodeAt(0);
        if(code >= 65 && code <= 90) result[code-65]++;
        else if(code >= 97 && code <= 122) result[26 + (code-97)]++;
    }
    
    return result;
}