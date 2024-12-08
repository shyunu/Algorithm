class Solution {
    public int[] solution(int[] num_list, int n) {
        int[] answer = {};
        int k = 0; //answer배열의 크기
        if(num_list.length % n == 0) {
            k = num_list.length / n;
        } else {
            k = num_list.length / n + 1;
        }
        answer = new int[k];
        int j = 0; //answer의 인덱스
        for(int i = 0; i < num_list.length; i+=n) {
            answer[j] = num_list[i];
            j++;
        }
            
            
        return answer;
    }
}