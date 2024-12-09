class Solution {
    public int solution(int left, int right) {
        int answer = 0; //결과
        int num = 0; //약수의 개수
        
        for(int i = left; i <= right; i++) {
            for(int j = 1; j <= i; j++) {
                if(i % j == 0) {
                    num++;
                }
            }
            
            if(num % 2 == 0) {
                answer += i;
            } else {
                answer -= i;
            }
            
            num = 0;
        }
        
        return answer;
    }
}