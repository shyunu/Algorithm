class Solution {
    public int[] solution(int[] num_list) {
        int[] answer = new int[2];
        int cnt1 = 0; //짝수의 개수
        int cnt2 = 0; //홀수의 개수
        
        for(int i = 0; i < num_list.length; i++) {
            if( num_list[i] % 2 == 0) {
                cnt1++;
            }
            if( num_list[i] % 2 == 1) {
                cnt2++;
            }
        }
        
        answer[0] = cnt1;
        answer[1] = cnt2;
        
        
        return answer;
    }
}