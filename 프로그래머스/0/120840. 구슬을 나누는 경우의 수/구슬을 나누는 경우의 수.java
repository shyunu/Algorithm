class Solution {
    public double solution(int balls, int share) {
        double answer = 0;
        double mul = 1;
        double div = 1;
        
        for(int i = balls; i >= balls - share + 1; i--) {
            mul *= i;
        }
        for(int i = share; i >= 1; i--) {
            div *= i;
        }
        
        answer = mul / div;
        
        return answer;
    }
}




