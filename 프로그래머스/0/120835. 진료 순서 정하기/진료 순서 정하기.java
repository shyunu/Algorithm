import java.util.Arrays;


class Solution {
    public int[] solution(int[] emergency) {
        int[] answer = new int[emergency.length];
        int[] em = emergency.clone(); //배열 복사
        Arrays.sort(em); // 배열 오름차순 정렬
        for(int i = 0; i < em.length; i++) {
           
            for(int j = 0; j < emergency.length; j++) {
                
                if(em[i] == emergency[j]) {
                    answer[i] = emergency.length - j;
                }
                
            }
            
        }
        
        
        
        
        
        
        
        return answer;
    }
}