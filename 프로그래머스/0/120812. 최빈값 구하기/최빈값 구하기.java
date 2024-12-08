class Solution {
    public int solution(int[] array) {
        int answer = 0;
        int[] count = new int[1001];
        
        int max = 0;
        int max_index = 0;
        
        for(int i = 0; i < array.length; i++) {
            count[array[i]] ++;
        }
        
        for(int i = 0; i < count.length; i++) {
            if(count[i] > max) {
                max = count[i];
                max_index = i;
            }
        }
        int cnt = 0;
        for(int i = 0; i < count.length; i++) {
            if(count[i]==max) {
                cnt++;
            }
            if(cnt>1) {
                return -1;
            }
        }
        
        answer = max_index;
        return answer;
    }
}