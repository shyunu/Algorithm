import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
	
		int a = scan.nextInt();
		int i = 1;
	
		while ( i <= 9 ) {
		System.out.println(a + " * " + i + " = " + (a*i));
		i++;
		}
	}
}
