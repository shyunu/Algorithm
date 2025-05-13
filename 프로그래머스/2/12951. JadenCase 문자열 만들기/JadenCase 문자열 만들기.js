function solution(s) {
    const items = s.split(" ");
    
    for (let i = 0; i < items.length; i++) {
        let word = items[i];
        
        if (word.length > 0) {
            items[i] = word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
        
    }
    
    return items.join(" ");
}