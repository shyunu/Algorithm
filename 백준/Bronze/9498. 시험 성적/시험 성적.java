import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		int i = scan.nextInt();
		
		if (i >= 90) {
			System.out.println("A");
		} else if (i >= 80) {
			System.out.println("B");
		} else if (i >= 70) {
			System.out.println("C");
		} else if (i >= 60) {
			System.out.println("D");
		} else {
			System.out.println("F");
		}
		
		scan.close();
	}
}