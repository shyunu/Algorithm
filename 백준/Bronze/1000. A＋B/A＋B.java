import java.util.Scanner;

public class Main { //클래스명 반드시 Main
	
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int a = scan.nextInt();
		int b = scan.nextInt();		
		
		System.out.println(a+b);
		
		scan.close();
	}

}
