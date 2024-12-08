class Solution {
    public String[] solution(String[] todo_list, boolean[] finished) {
        String[] answer = {};
        int n = 0; //false개수
        int k = 0;
        for(int i = 0; i < finished.length; i++) {
            if(finished[i] == false) {
                n++;
            }
        }
        answer = new String[n];
        
        for(int i = 0; i < finished.length; i++) {
            if(finished[i] == false) {
                answer[k] = todo_list[i];
                k++;
            }
        }
        
        return answer;
    }
}