class Solution {
    public int solution(String my_string) {
        int answer = 0;
        String number = "";
        
        for(int i = 0; i < my_string.length(); i++) {
            if(my_string.charAt(i) >= '1' && my_string.charAt(i) <= '9') {
                number += my_string.charAt(i);
            }
        }
        
        for(int i = 0; i < number.length(); i++) {
            int num = number.charAt(i) - '0';
            answer += num;
        }
        
        
        
        
        return answer;
    }
}