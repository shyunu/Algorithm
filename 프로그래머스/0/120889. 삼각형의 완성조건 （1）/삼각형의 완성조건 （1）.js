function solution(sides) {
    var answer = 0;
    var max = 0;
    var max_index = 0;
    
    for(let i = 0; i < sides.length; i++) {
        if(sides[i] > max) {
            max = sides[i];
            max_index = i;
        }
    }
    
    if (max_index == 0) {
        if(max < sides[1] + sides[2]) {
            answer = 1;
        } else {
            answer = 2;
        }
    } else if (max_index == 1) {
        if(max < sides[0] + sides[2]) {
            answer = 1;
        } else {
            answer = 2;
        }
    } else if (max_index == 2) {
        if(max < sides[0] + sides[1]) {
            answer = 1;
        } else {
            answer = 2;
        }
    }
    
    return answer;
}