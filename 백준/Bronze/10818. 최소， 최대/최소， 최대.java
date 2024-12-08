import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
	Scanner scan = new Scanner(System.in);
	int n = scan.nextInt(); //정수의 개수
	int[] arr = new int[n];
	
	for(int i = 0; i < n; i++) {
		arr[i] = scan.nextInt();
	}

	int min = arr[0]; //최대값
	int max = arr[0]; //최소값
	
	for(int i = 0; i < n; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
		if(arr[i] < min) {
			min = arr[i];
		}
	}
	
	System.out.println(min + " " + max);
	
	scan.close();
	}
}

