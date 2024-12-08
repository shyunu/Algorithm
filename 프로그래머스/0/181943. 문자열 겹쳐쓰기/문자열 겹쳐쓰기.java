class Solution {
    public String solution(String my, String overwrite, int s) {
        String answer = "";
        
        answer = my.substring(0, s) + overwrite + my.substring(s+overwrite.length());
        return answer;
    }
}
