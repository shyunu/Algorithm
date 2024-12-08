import java.util.Arrays;
class Solution {
    public int[] solution(int[] numbers, String direction) {
        int[] answer = new int[numbers.length];
        
        if(direction.equals("right")) { //오른쪽으로 이동
            
            for(int i = 0; i < numbers.length-1; i++) {
                answer[i+1] = numbers[i];
            }
            answer[0] = numbers[numbers.length-1];
            
        } else { //왼쪽으로 이동
            
            for(int i = 0; i < numbers.length-1; i++) {
                answer[i] = numbers[i+1];
            }
            answer[answer.length-1] = numbers[0];
        }
        return answer;
    }
}