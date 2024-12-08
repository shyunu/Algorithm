class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        String str = Integer.toString(a) + Integer.toString(b);
        int n = Integer.parseInt(str);
        
        if( n >= 2*a*b ) {
            answer = n;
        } else { // n < 2*a*b
            answer = 2*a*b;
        }
        return answer;
    }
}








