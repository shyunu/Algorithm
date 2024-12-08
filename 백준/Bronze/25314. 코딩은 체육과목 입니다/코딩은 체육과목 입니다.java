import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
	Scanner scan = new Scanner(System.in);
	int n = scan.nextInt(); //n바이트
	String result = "";
	
	for(int i = 4; i <= n; i++) {
		if(n % i == 0) {
			for(int j = 0; j < n/i; j++) {
				result += "long ";
			}
		}
		break;
	}
	
	System.out.println(result + "int");
	scan.close();
	}
}

