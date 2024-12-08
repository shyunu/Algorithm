class Solution {
    public String solution(String[] seoul) {
        String answer = "김서방은 ";
        int num = 1;
        
        for(int i = 0; i < seoul.length; i++) {
            if(seoul[i].equals("Kim")) {
                num = i;
                break;
            }    
        }
        
        return answer + num + "에 있다";
    }
}