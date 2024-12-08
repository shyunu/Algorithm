class Solution {
    public int[] solution(int numer1, int denom1, int numer2, int denom2) {
        int[] answer = new int[2];
        
        int a = numer1*denom2 + numer2*denom1; //분자
        int b = denom1*denom2; //분모
        int divide = 0; //공통약수
        for(int i = 1; i <= a && i <= b; i++) {
            if(a % i == 0 && b % i == 0) {
                divide = i; 
            }
        }
        
        answer[0] = a / divide;
        answer[1] = b / divide;
        
        return answer;
    }
}