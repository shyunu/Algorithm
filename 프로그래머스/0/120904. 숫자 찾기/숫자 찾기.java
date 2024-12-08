class Solution {
    public int solution(int num, int k) {
        int answer = 0;
        String str = String.valueOf(num); //정수를 문자열로
        String[] arr = str.split("");
        
        for(int i = 0; i < arr.length; i++) {
            if(arr[i].equals(String.valueOf(k))) {
                answer = i+1;
                break;
            } else {
                answer = -1;
            }
        }
        
        return answer;
    }
}