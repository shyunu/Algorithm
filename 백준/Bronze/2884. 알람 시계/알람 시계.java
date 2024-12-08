import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		int h = scan.nextInt();
		int m = scan.nextInt();
		
		if (h == 0) {
			if (m >= 45) {
				System.out.println(h);
				System.out.print(m-45);
			} else {
				System.out.println(23);
				System.out.print(m+15);
			}
		} else {
			if (m >= 45) {
				System.out.println(h);
				System.out.print(m-45);
			} else {
				System.out.println(h-1);
				System.out.print(m+15);
			}
		}
		
		scan.close();
		
		
	}
}