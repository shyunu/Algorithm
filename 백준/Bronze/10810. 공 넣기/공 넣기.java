import java.util.Arrays;
import java.util.Scanner;

public class Main { 

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		int n = scan.nextInt(); //바구니의 개수
		int m = scan.nextInt(); //공을 넣는 횟수
		int[] basket = new int[n]; //배열의 크기가 n이고 각 값을 0으로 초기화
		
		for(int p = 0; p < m; p++) {
			int i = scan.nextInt(); //i 바구니부터
			int j = scan.nextInt(); //j 바구니까지
			int k = scan.nextInt(); //지정된 공
			
			for(int s = i-1; s < j; s++) {
				basket[s] = k;
			}
		}
		for(int i = 0; i < n; i++) {
			System.out.print(basket[i] + " ");
		}
		scan.close();
	}
}

