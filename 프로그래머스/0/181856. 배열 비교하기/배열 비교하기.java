class Solution {
    public int solution(int[] arr1, int[] arr2) {
        int answer = 0; //정답 판별
        int result1 = 0;
        int result2 = 0;
        
        if(arr1.length != arr2.length) { //배열의 길이가 다른 경우
            if(arr1.length > arr2.length) {
                answer = 1;
            } else {
                answer = -1;
            }
        } else { //배열의 길이가 같은 경우
            for(int i = 0; i < arr1.length; i++) {
                result1 += arr1[i];
                result2 += arr2[i];
            }
            if(result1 > result2) {
                answer = 1;
            } else if(result1 < result2) {
                answer = -1;
            } else {
                answer = 0;
            }
        }        
        return answer;
    }
}

