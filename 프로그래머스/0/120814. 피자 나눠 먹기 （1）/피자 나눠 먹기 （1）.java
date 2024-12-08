class Solution {
    public int solution(int n) {
        int answer = 0; //피자 개수
        
        if(n%7 == 0) {
            answer = n / 7;
        } else {
            answer = n / 7 + 1;
        }
        
        
        
        
        
        
        
        return answer;
    }
}