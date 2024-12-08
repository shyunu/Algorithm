class Solution {
    public int solution(int n) {
        int answer = 0;
        
        for(int i = 1; i <= n; i++) {
            if(n % i == 0) {
                if(i*i == n) {
                    answer += 1;
                } else {
                    answer += 1;
                }
                
            }
          
        }
      
        return answer;
    }
}