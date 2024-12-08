class Solution {
    public int solution(int a, int b, int c) {
        int answer = 0;
        
        if(a != b && a != c && b != c) { //모두 다를 경우
            answer = a+b+c;
        } else if(a == b && a == c && b == c) { //모두 같을 경우
            answer = (a+b+c)*(a*a + b*b + c*c)*(a*a*a + b*b*b + c*c*c);
        } else { //그 외의 경우
            answer = (a+b+c)*(a*a + b*b + c*c);
        }
        
        return answer;
    }
}