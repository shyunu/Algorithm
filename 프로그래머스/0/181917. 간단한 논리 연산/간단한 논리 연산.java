class Solution {
    public boolean solution(boolean x1, boolean x2, boolean x3, boolean x4) {
        boolean answer = true;
        boolean first = true;
        boolean second = true;
        
        if(x1 == true) {
            if(x2 == true) {
                first = true;
            } else {
                first = true;
            }
        } else {
            if(x2 == true) {
                first = true;
            } else {
                first = false;
            }
        }
        
        if(x3 == true) {
            if(x4 == true) {
                second = true;
            } else {
                second = true;
            }
        } else {
            if(x4 == true) {
                second = true;
            } else {
                second = false;
            }
        }
        
        if(first == true) {
            if(second == true) {
                answer = true;
            } else {
                answer = false;
            }
        } else {
            if(second == true) {
                answer = false;
            } else {
                answer = false;
            }
        }
        
        return answer;
    }
}