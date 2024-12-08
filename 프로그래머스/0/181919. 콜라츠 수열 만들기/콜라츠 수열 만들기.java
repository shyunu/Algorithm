class Solution {
    public int[] solution(int n) {

        int num = 0;
        int x = n;
        while(true) {
            if(x % 2 == 0) {
                x /= 2;
                num++;
            } else {
                x = 3 * x + 1;
                num++;
            }
            
            if(x == 1) {
                break;
            }
        }
        
        int[] answer = new int[num+1];
        answer[0] = n;
        
        for(int i = 1; i <= num; i++) {
            if(n % 2 == 0) {
                answer[i] = n / 2;
                n /= 2;
            } else {
                answer[i] = 3 * n + 1;
                n = 3 * n + 1;
            }
        }
        
        return answer;
    }
}