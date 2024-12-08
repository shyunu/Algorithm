class Solution {
    public String solution(int age) {
        String answer = "";
        String programmers962 = "abcdefghij";
        String[] arr = String.valueOf(age).split(""); //2 3
        
        for(int i = 0; i < arr.length; i++) {
            answer += programmers962.charAt(Integer.valueOf(arr[i]));
        }
        
        return answer;
    }
}