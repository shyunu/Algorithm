import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		int a = scan.nextInt(); //a:시
		int b = scan.nextInt(); //b:분
		int c = scan.nextInt(); //c:소요시간(분단위)
		
		if ( b+c < 60 ) {
			System.out.println(a);
			System.out.println(b+c);
		} else {
			if ( a + (b+c)/60 >= 24 ) {
				System.out.println(a+(b+c)/60-24);
				System.out.println((b+c)%60);
			} else {
				System.out.println(a+(b+c)/60);
				System.out.println((b+c)%60);
			}
			
		}
		
		scan.close();
		
	}
}