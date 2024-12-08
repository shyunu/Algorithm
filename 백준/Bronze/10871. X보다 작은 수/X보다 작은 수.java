import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
	Scanner scan = new Scanner(System.in);
	int n = scan.nextInt(); //정수 n
	int[] arr = new int[n]; //정수 n개로 이루어진 배열
	int x = scan.nextInt(); //비교 정수 x
	String result = ""; // x보다 작은 수 출력
	
	for(int i = 0; i < n; i++) {
		arr[i] = scan.nextInt();
		if(arr[i] < x) {
			result += arr[i] + " "; //조건에 맞는 수 누적
		}
	}
	
	System.out.println(result);
	
	scan.close();
	}
}

