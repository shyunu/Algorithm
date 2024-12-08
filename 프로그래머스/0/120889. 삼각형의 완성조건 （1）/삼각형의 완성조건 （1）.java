class Solution {
    public int solution(int[] sides) {
        int answer = 0;
        int max = sides[0];
        int max_index = 0; //가장 긴 변의 인덱스번호
        
        for(int i = 0; i < sides.length; i++) {
            if(sides[i] > max) {
                max = sides[i]; //가장긴변
                max_index = i;
            }
        }
        
        if(max_index == 0) {
            if(max < sides[1] + sides[2]) {
                answer = 1;
            } else {
                answer = 2;
            }
        }
        
        if(max_index == 1) {
            if(max < sides[0] + sides[2]) {
                answer = 1;
            } else {
                answer = 2;
            }
        }
        
        if(max_index == 2) {
            if(max < sides[1] + sides[0]) {
                answer = 1;
            } else {
                answer = 2;
            }
        }
        
        
        
        
        
        
        return answer;
    }
}