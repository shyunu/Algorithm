import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
	Scanner scan = new Scanner(System.in);
	int n = scan.nextInt(); //정수의 개수
	int[] arr = new int[n]; //정수의 집합

	int sum = 0; //찾으려는 정수의 개수
	
	for(int i = 0; i < n; i++) {
		arr[i] = scan.nextInt();
	}
	
	int v = scan.nextInt(); //찾으려는 정수
	
	for(int i = 0; i < n; i++) {
		if(arr[i]==v) {
			sum ++;
		}
	}
	
	System.out.println(sum);
	
	scan.close();
	}
}
