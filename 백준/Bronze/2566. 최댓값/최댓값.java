import java.util.Arrays;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int[][] arr = new int[9][9];
		int max = 0; //최댓값
		int x = 0; //배열의 인덱스값
		int y = 0; //배열의 인덱스값
		
		
		for(int i = 0; i < 9; i++) {
			
			for(int j = 0; j < 9; j++) {
				arr[i][j] = scan.nextInt();//배열에 넣기
		
				
				if (arr[i][j] > max) { // 최대값 찾기
					max = arr[i][j];
					x = i; y = j;
				}
				
				
				
		} 
	}	

		System.out.println(max);
		System.out.println((x+1) + " " + (y+1));
		//최대값의 위치
		
	}
}