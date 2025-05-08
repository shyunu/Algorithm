function solution(myStr) {
    const result = myStr.split(/[abc]/)
                        .filter(s => s);
    
    return result.length ? result : ["EMPTY"];
}