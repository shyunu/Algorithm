import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
	Scanner scan = new Scanner(System.in);
	int[] arr = new int[9]; // 자연수 9개를 가지는 배열
	int max = arr[0]; // 최대값 초기화
	int x = 0; //최대값의 인덱스번호
	
	for(int i = 0; i < 9; i++) {
		
		arr[i] = scan.nextInt();
		
		if(arr[i] > max) {
			max = arr[i];
			x = i;
		}
	}
	
	System.out.println(max);
	System.out.println(x+1);
	
	scan.close();
	}
}
