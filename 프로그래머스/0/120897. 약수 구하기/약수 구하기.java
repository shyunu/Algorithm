import java.util.Arrays;

class Solution {
    public int[] solution(int n) {
        
        int cnt = 0; //약수의 개수
        
        for(int i = 1; i <= n; i++) {
            if(n % i == 0) {
                cnt++;
            }
        }
        
        int x = 0;
        int[] answer = new int[cnt];
        
        for(int i = 1; i <= n; i++) {
            if(n % i == 0) {
                answer[x] = i;
                x++;
            }
        }
        
        
        return answer;
    }
}