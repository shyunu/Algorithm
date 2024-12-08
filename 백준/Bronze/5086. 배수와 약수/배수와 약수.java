import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		String result = "";
		
		while (true) {
			
			int a = scan.nextInt();
			int b = scan.nextInt();
		
			if ( a == 0 && b == 0 ) {
				break;
			}
			if ( b % a == 0 ) {
				result += "factor ";
			} else if ( a % b == 0 ) {
				result += "multiple ";
			} else {
				result += "neither ";
			}
		
		
			
		}
		System.out.println(result);
	}
}
