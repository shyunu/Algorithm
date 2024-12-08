import java.util.Arrays;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
	Scanner scan = new Scanner(System.in);
	int[] arr = new int[10]; // 42로 나눈 나머지를 저장하는 배열
	int result = 0;
	
	for(int i = 0; i < 10; i++) {
		arr[i] = scan.nextInt() % 42;
	}
	
	
	for(int i = 0; i < 10; i++) {
		int cnt = 0; // 나머지 중복의 개수
		for(int j = i+1; j < 10; j++) {
			if(arr[i] == arr[j]) {
				cnt++;
			}
			
		}
		if(cnt == 0) {
			result++;
		}
	}
	
	
	System.out.println(result);
	scan.close();
	}
}
