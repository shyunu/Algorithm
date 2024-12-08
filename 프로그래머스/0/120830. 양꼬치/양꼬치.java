class Solution {
    public int solution(int n, int k) {
        int answer = 0;
        int a = 0; //양꼬치 가격
        int b = 0; //음료수 가격
        
        a = 12000 * n;
        
        b = 2000 * k;
        
        answer = a + b - 2000* (n/10);
        
        
        
        
        
        
        
        
        
        
        return answer;
    }
}