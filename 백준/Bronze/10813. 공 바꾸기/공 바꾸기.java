import java.util.Arrays;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt(); // 공(바구니)의 개수
		int m = scan.nextInt(); // 공을 바꾸는 횟수
		int[] arr = new int[n]; // 처음 바구니와 공의 번호 (초기값)
		
		for(int i = 0; i < n; i++) { //바구니와 공의 번호를 일치시킨다.
			arr[i] = i + 1 ;
		}
		
		int i = 0;
		while( i < m ) {
			int a = scan.nextInt(); //바꾸는 공의 번호의 첫번째
			int b = scan.nextInt(); //바꾸는 공의 번호의 두번째
		
			int temp = arr[a-1];
			arr[a-1] = arr[b-1];
			arr[b-1] = temp; //교환하는 과정

			i++;
		}
		
		for(int j = 0; j < arr.length ; j++) {
			System.out.print(arr[j]+" ");
		}
		
		scan.close();
	}
}